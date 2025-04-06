/**
 * Format a phone number as the user types
 * @param input Raw input from user 
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (input: string): string => {
  // Remove all non-digit characters
  const digits = input.replace(/\D/g, '');
  
  // Format as +7 (XXX) XXX-XX-XX
  if (digits.length > 0) {
    let formatted = '+';
    
    // Country code (always 7 for Russia)
    if (digits.length >= 1) {
      formatted += '7';
    }
    
    // Area code
    if (digits.length > 1) {
      formatted += ' (' + digits.substring(1, Math.min(4, digits.length));
    }
    
    // Add closing parenthesis and first part of number
    if (digits.length >= 4) {
      formatted += ') ' + digits.substring(4, Math.min(7, digits.length));
    }
    
    // Add first dash and next part
    if (digits.length >= 7) {
      formatted += '-' + digits.substring(7, Math.min(9, digits.length));
    }
    
    // Add second dash and last part
    if (digits.length >= 9) {
      formatted += '-' + digits.substring(9, Math.min(11, digits.length));
    }
    
    return formatted;
  }
  
  return '';
};

/**
 * Format a Telegram username
 * @param input Raw input from user
 * @returns Formatted Telegram username with a single @ prefix
 */
export const formatTelegramUsername = (input: string): string => {
  // Remove any existing @ symbols
  const cleaned = input.replace(/@/g, '');
  
  // Add a single @ at the beginning
  return '@' + cleaned;
};

/**
 * Validate if at least one contact method has a value
 * @param formData Form data object containing contact information
 * @param contactMethods Object indicating which contact methods are enabled
 * @returns Boolean indicating if at least one contact method has a value
 */
export const validateContactMethods = (
  formData: {
    email: string;
    phone: string;
    telegram: string;
    whatsapp: string;
  },
  contactMethods: {
    email: boolean;
    phone: boolean;
    telegram: boolean;
    whatsapp: boolean;
  }
): boolean => {
  // Check if at least one enabled contact method has a value
  return Object.entries(contactMethods)
    .some(([method, isEnabled]) => 
      isEnabled && 
      formData[method as keyof typeof formData]?.trim()
    );
};