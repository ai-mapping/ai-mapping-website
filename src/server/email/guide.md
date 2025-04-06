# Form Submission Integration with Brevo - Implementation Plan

## Overview

Based on your requirements, I'll outline a lightweight implementation plan for integrating forms with Brevo email service. The approach prioritizes simplicity while ensuring flexibility for different form types.

## Server-Side Implementation (API Route)

### Create API Route

```
/app/api/form/route.ts
```

### API Flow:

1. Receive form data via POST request
2. Format data into email content
3. Send email using Brevo API
4. Return success/error response

### Data Structure for Request

```
{
  formName: string;         // Identifies which form was submitted
  formData: {               // The actual form fields
    [key: string]: any;     // Any form fields
  },
  pageUrl: string;          // The page URL where the form was submitted
}
```

### Implementation Notes:

- Use environment variables `BREVO_API_KEY` and `BREVO_EMAIL` directly
- Perform minimal validation (just ensure required fields exist)
- Handle Brevo API errors gracefully
- Include retry logic for temporary failures
- Format email content as simple text with field names and values

## Client-Side Implementation

### Create Form Submission Hook

```
/src/components/forms/useFormSubmission.ts
```

### Hook Features:

- Track submission state (idle, loading, success, error)
- Handle submission logic
- Manage retry attempts for failed submissions
- Provide feedback states for UI

### Hook Usage:

```
const { submit, isLoading, isSuccess, error, retry } = useFormSubmission({
  formName: "find-part-form"
});

// Submit form
submit(formData, window.location.href);
```

### Form Component Implementation:

- Each form should use the submission hook
- Display loading state during submission
- Show success/error messages
- Provide retry option if submission fails
- Support additional loading states for field-specific interactions

## Email Content Formatting

### Approach:

- Convert form data object to readable text format
- Include form name and page URL at the beginning
- List all form fields with their values
- Format phone numbers and other special fields appropriately
- Handle attachments if present (photo attachment option)

### Example Format:

```
Form: Find Part Form
Page: /catalog/engine-parts

Part Number/Name: 1234567
Equipment Model: CAT 320D
Phone: +7 (123) 456-7890
Message: Need this part urgently
Photo Attached: Yes/No
```

## Implementation Steps

1. **Create API Route:**

   - Set up the form submission endpoint
   - Implement Brevo API integration
   - Add basic error handling and validation

2. **Create Form Submission Hook:**

   - Implement form state management
   - Create submission function
   - Add retry logic
   - Export helper components for feedback states

3. **Update Form Components:**

   - Integrate submission hook with each form
   - Add loading/success/error states
   - Support photo attachments if needed
   - Add intermediate loading states for complex interactions

4. **Test the Implementation:**
   - Use curl to test API endpoint with different form data
   - Verify email formatting
   - Check error handling

## Considerations for Future Extensions

While keeping it simple now, the system is designed to be extended later with:

1. **Template Support:**

   - Add template IDs for different forms when needed
   - Make the template selection based on formName

2. **Advanced Validation:**

   - Add form-specific validation rules
   - Implement more sophisticated error handling

3. **Database Integration:**

   - Store submissions in a database when needed
   - Add reference IDs to emails

4. **User Notifications:**
   - Send confirmation emails to users

## Example Implementation Outline

I'll provide a general outline (not actual code) for both server and client components:

### API Route Structure:

```
- Import Brevo API client
- Configure with environment variables
- Define POST handler
- Parse and validate incoming data
- Format email content
- Send email via Brevo
- Handle success/error responses
```

### Form Hook Structure:

```
- Define submission states
- Create submit function
- Handle API responses
- Provide retry functionality
- Export state values and functions
```

This plan provides a lightweight but flexible approach to form submissions with Brevo, focusing on simplicity while allowing for future enhancements.
