# Curl Examples for Testing Form Submissions

## Testing CTA Form Submission

```bash
curl -X POST http://localhost:3000/api/form \
  -H "Content-Type: application/json" \
  -d '{
    "formName": "cta-form",
    "formData": {
      "partNumber": "12345",
      "phone": "+79123456789",
      "callbackRequested": true
    },
    "pageUrl": "http://localhost:3000/catalog"
  }'
```

## Testing Parts Search Form Submission

```bash
curl -X POST http://localhost:3000/api/form \
  -H "Content-Type: application/json" \
  -d '{
    "formName": "parts-search-form",
    "formData": {
      "partNumber": "CAT123456",
      "equipmentModel": "CAT 320D",
      "phone": "+79123456789",
      "photoAttached": true,
      "photoFilename": "part-photo.jpg"
    },
    "pageUrl": "http://localhost:3000/catalog/parts"
  }'
```

## Testing with Invalid Data

```bash
curl -X POST http://localhost:3000/api/form \
  -H "Content-Type: application/json" \
  -d '{
    "formName": "unknown-form",
    "formData": {},
    "pageUrl": "http://localhost:3000/"
  }'
```

## Testing Missing Required Fields

```bash
curl -X POST http://localhost:3000/api/form \
  -H "Content-Type: application/json" \
  -d '{
    "formData": {
      "partNumber": "12345",
      "phone": "+79123456789"
    },
    "pageUrl": "http://localhost:3000/"
  }'
```

## Production Testing

To test in production, replace `localhost:3000` with your actual domain:

```bash
curl -X POST https://your-domain.com/api/form \
  -H "Content-Type: application/json" \
  -d '{
    "formName": "cta-form",
    "formData": {
      "partNumber": "12345",
      "phone": "+79123456789",
      "callbackRequested": true
    },
    "pageUrl": "https://your-domain.com/catalog"
  }'
```

## Important Notes

1. Make sure the Brevo API environment variables are properly set:
   - `BREVO_API_KEY` - Your Brevo API key
   - `BREVO_EMAIL` - Email address to send from/to

2. The API endpoint checks for required fields:
   - `formName` - The name of the form (e.g., "cta-form", "parts-search-form")
   - `formData` - An object containing the form fields
   - `pageUrl` - The URL where the form was submitted

3. Response Format:
   
   Success response:
   ```json
   {
     "success": true,
     "message": "Form submitted successfully",
     "emailResult": { ... } // Details from Brevo API
   }
   ```
   
   Error response:
   ```json
   {
     "success": false,
     "error": "Error message details"
   }
   ```

4. For file uploads with actual files rather than just filenames, you would need to use `FormData` and multipart/form-data instead of JSON.