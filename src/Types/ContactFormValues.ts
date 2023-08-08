export enum MessageType {
  JobOportunity = "jobOportunity",
  Collaboration = "collaboration",
  GeneralQuestion = "generalQuestion",
  Other = "other",
  default = "default",
}

export const TypeVariable = {
  jobOportunity: {
    name: "Job Oportunity",
    hasVariableField: true,
    field: "Company name",
  },
  collaboration: {
    name: "Collaboration",
    hasVariableField: true,
    field: "Project Name",
  },
  generalQuestion: {
    name: "General Question",
    hasVariableField: false,
    field: "",
  },
  other: {
    name: "Other",
    hasVariableField: false,
    field: "",
  },
  default: {
    name: "Select one...",
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

export default ContactFormValues;
