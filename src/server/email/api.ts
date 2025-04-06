interface EmailData {
  sender: {
    email: string;
    name: string;
  };
  to: Array<{
    email: string;
  }>;
  subject: string;
  textContent: string;
}

// Function to send email via Brevo API
export async function sendEmailToBrevo(emailData: EmailData): Promise<Record<string, unknown>> {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    throw new Error('Missing Brevo API key');
  }

  // Send the email using Brevo API
  let retries = 3;
  while (retries > 0) {
    try {
      const response = await fetch('https://api.sendinblue.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Brevo API error: ${errorData.message || 'Unknown error'}`
        );
      }

      return await response.json();
    } catch (error) {
      retries--;
      if (retries === 0) throw error;
      // Wait 1 second before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // This shouldn't be reached but TypeScript requires a return statement
  throw new Error('Failed to send email after multiple retries');
}