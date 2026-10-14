export const contact = {
  heading: "Let's talk about your project",
  intro:
    "Tell me about your organisation and what you need. I'll respond promptly to discuss scope, timeline and how I can help.",
  interestLabel: "I'm interested in",
  interests: [
    "Safeguarding & PSEAH",
    "Gender, Disability & Social Inclusion",
    "Education Research, Review & Advocacy",
    "Training & Capacity Building",
    "Grants Management & Resource Mobilisation",
    "Leadership, Mentorship & Speaking",
    "Something else",
  ],
  buttonLabel: "Send enquiry",
  successHeading: "Thank you for getting in touch",
  successBody:
    "Your message has been sent. I'll respond promptly to discuss scope, timeline and how I can help.",
  generalError:
    "Sorry, something went wrong while sending your message. Please try again, or email me directly.",
  errors: {
    name: "Please enter your name.",
    emailRequired: "Please enter your email address.",
    emailInvalid:
      "Please enter a valid email address (for example, name@example.com).",
    message: "Please enter a message.",
  },
} as const;
