export enum MessageType {
  JobOportunity = "jobOportunity",
  Collaboration = "collaboration",
  GeneralQuestion = "generalQuestion",
  Other = "other",
  default = "default",
}

export const TypeVariable = {
  default: {
    name: "Contact.contactForm.messageTypes.select",
    hasVariableField: false,
    field: "",
  },
  jobOportunity: {
    name: "Contact.contactForm.messageTypes.jobOpportunity",
    hasVariableField: true,
    field: "Contact.contactForm.labels.companyName",
  },
  collaboration: {
    name: "Contact.contactForm.messageTypes.collaboration",
    hasVariableField: true,
    field: "Contact.contactForm.labels.projectName",
  },
  generalQuestion: {
    name: "Contact.contactForm.messageTypes.generalQuestion",
    hasVariableField: false,
    field: "",
  },
  other: {
    name: "Contact.contactForm.messageTypes.other",
    hasVariableField: false,
    field: "",
  },
};

interface ContactFormValues {
  firstName: string;
  lastName: string;
  messageType: MessageType;
  typeVariable?: string;
  email: string;
  subject: string;
  message: string;
}

export interface MessageSender {
  firstName: string;
  lastName: string;
  email: string;
}

export default ContactFormValues;
