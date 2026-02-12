// EmailJS Configuration
// Replace these values with your actual EmailJS service details
// Get these from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_27lkaod', // Replace with your EmailJS service ID
  PARTNER_TEMPLATE_ID: 'template_m5ejtjx', // Replace with your partner application template ID
  DEMO_TEMPLATE_ID: 'template_w7coddn', // Replace with your demo request template ID
  PUBLIC_KEY: 'DA-Q-yxYC_qxFcgMf' // Replace with your EmailJS public key
};

// Email template variables used:
//
// Partner Application Form:
// - {{from_name}}: Applicant's full name
// - {{from_email}}: Applicant's email address
// - {{phone}}: Applicant's phone number (international format)
// - {{partner_type}}: Selected partnership type (referral/affiliate/reseller/integration)
// - {{message}}: Applicant's message/description
//
// Demo Request Form:
// - {{from_name}}: Requester's full name
// - {{from_email}}: Requester's email address
// - {{phone}}: Requester's phone number (international format)
// - {{organization}}: Organization/school name
// - {{role}}: Requester's role (teacher/administrator/parent/student/other)
// - {{demo_type}}: Selected demo type (general/teacher/administrator/technical)
// - {{message}}: Additional information/message
//
// Both forms:
// - {{to_email}}: hello@budlee.ai (recipient email)