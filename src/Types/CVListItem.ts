interface CVListItemData {
  name: string;
  image: string;
  concept: string;
  dates: {
    startDate: string;
    endDate: string;
  };
  textSections: {
    title: string;
    text: string;
  }[];
}

export default CVListItemData;
