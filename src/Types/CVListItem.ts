interface CVListItemData {
  name: string;
  image: string;
  concept: string;
  location: string;
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
