// Form identifiers (technical names)
export const FORM_IDS = {
  CTA: 'cta-form',
  PARTS_SEARCH: 'components-search-form',
  CALLBACK: 'callback-form',
  REQUEST: 'request-form',
} as const;

// Type for form identifiers
export type FormId = typeof FORM_IDS[keyof typeof FORM_IDS];

// Configuration for each form
export const FORMS_CONFIG = {
  [FORM_IDS.CTA]: {
    title: 'Request a Demo', // Form title for display in emails
    emailSubject: 'New Demo Request Submission',
  },
  [FORM_IDS.PARTS_SEARCH]: {
    title: 'Component Search',
    emailSubject: 'New Component Search Submission',
  },
  [FORM_IDS.CALLBACK]: {
    title: 'Request a Callback',
    emailSubject: 'New Callback Request',
  },
  [FORM_IDS.REQUEST]: {
    title: 'Request from ai-mapping.dev',
    emailSubject: 'New Information Request',
  },
} as const;

// Helper function to get email subject based on form name
export function getEmailSubject(formId: FormId): string {
  return FORMS_CONFIG[formId]?.emailSubject || 'New Form Submission';
}

// Helper function to get form title based on form name
export function getFormTitle(formId: FormId): string {
  return FORMS_CONFIG[formId]?.title || 'Form Submission';
}