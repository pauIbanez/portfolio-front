export enum MessageType {
  JobOportunity = "JO",
  Collaboration = "C",
  GeneralQuestion = "GQ",
  Other = "O",
  default = "",
}

export const TypeVariable = {
  JO: {
    name: "Job Oportunity",
    hasVariableField: true,
    field: "Company name",
  },
  C: {
    name: "Collaboration",
    hasVariableField: true,
    field: "Project Name",
  },
  GQ: {
    name: "Job Oportunity",
    hasVariableField: false,
  },
  O: {
    name: "Other",
    hasVariableField: false,
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
