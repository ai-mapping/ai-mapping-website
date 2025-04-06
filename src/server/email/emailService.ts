import { sendEmailToBrevo } from './api';
import { FormId, getEmailSubject, getFormTitle } from './formsConfig';

// Define the structure of the form submission
export interface FormSubmission {
  formName: string;
  formData: {
    [key: string]: string | number | boolean | null | undefined;
  };
  pageUrl: string;
}

// Function to format form data into readable email content
export function formatEmailContent(submission: FormSubmission): string {
  const { formName, formData, pageUrl } = submission;
  
  // Get the form title from the config (or use the formName if not found)
  const formTitle = getFormTitle(formName as FormId) || formName;

  let content = `Form: ${formTitle}\n`;
  content += `Page: ${pageUrl}\n\n`;

  // Add all form fields
  Object.entries(formData).forEach(([key, value]) => {
    // Format the key for better readability
    const formattedKey = key
      .split(/(?=[A-Z])/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Handle special cases like arrays, objects, or null values
    let formattedValue = value;

    if (value === null || value === undefined) {
      formattedValue = 'Not provided';
    } else if (typeof value === 'object') {
      formattedValue = JSON.stringify(value);
    } else if (key === 'phone') {
      // Format phone numbers if they match common patterns
      const phoneStr = String(value);
      if (/^\+?\d{10,12}$/.test(phoneStr.replace(/\D/g, ''))) {
        const digits = phoneStr.replace(/\D/g, '');
        if (digits.length === 11 && digits.startsWith('7')) {
          formattedValue = `+7 (${digits.substring(1, 4)}) ${digits.substring(4, 7)}-${digits.substring(7, 9)}-${digits.substring(9, 11)}`;
        }
      }
    }

    content += `${formattedKey}: ${formattedValue}\n`;
  });

  return content;
}

// Function to prepare and send email
export async function sendEmail(submission: FormSubmission): Promise<Record<string, unknown>> {
  const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
  const BREVO_EMAIL_ADDRESS = process.env.BREVO_EMAIL_ADDRESS;

  if (!BREVO_SENDER_EMAIL || !BREVO_EMAIL_ADDRESS) {
    throw new Error('Missing Brevo email configuration');
  }

  const emailContent = formatEmailContent(submission);

  // Generate subject based on form name from config
  const emailSubject = getEmailSubject(submission.formName as FormId);

  // Prepare the email data for Brevo API
  const emailData = {
    sender: {
      email: BREVO_SENDER_EMAIL,
      name: 'Form Submission',
    },
    to: [
      {
        email: BREVO_EMAIL_ADDRESS, // Send to the configured email
      },
    ],
    subject: emailSubject,
    textContent: emailContent,
  };

  // Handle file attachments if present
  if (submission.formData.photoAttached && submission.formData.photoFilename) {
    // In a real implementation, you would handle the file upload and attachment here
    // This is simplified as file uploads require multipart form data handling
    emailData.textContent += '\n\nPhoto was attached: ' + submission.formData.photoFilename;
  }
  console.log("🚀 ~ sendEmail ~ emailData:", emailData)

  // Send the email using Brevo API service
  return await sendEmailToBrevo(emailData);
}