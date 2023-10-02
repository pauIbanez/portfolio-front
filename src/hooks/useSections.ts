import { useTranslation } from "react-i18next";

const useSections = () => {
  const { t } = useTranslation();

  const getTextSection = (prev: string, index: number) => ({
    title: t(`${prev}.${index}.title`),
    text: t(`${prev}.${index}.text`),
  });

  const getLetter = (prev: string, index: number, picture: string) => ({
    name: t(`${prev}.${index}.name`),
    position: t(`${prev}.${index}.position`),
    email: t(`${prev}.${index}.email`),
    linkedIn: t(`${prev}.${index}.linkedIn`),
    picture,
    letter: t(`${prev}.${index}.letter`),
  });

  const getListItem = (
    sectionName: string,
    index: number,
    textSections: number,
    image: string
  ) => ({
    name: t(`CV.sections.${sectionName}.items.${index}.name`),
    location: t(`CV.sections.${sectionName}.items.${index}.location`),
    concept: t(`CV.sections.${sectionName}.items.${index}.concept`),
    dates: {
      startDate: t(`CV.sections.${sectionName}.items.${index}.dates.startDate`),
      endDate: t(`CV.sections.${sectionName}.items.${index}.dates.endDate`),
    },
    image,
    textSections: (() => {
      let sections: { title: string; text: string }[] = [];
      for (let i = 0; i < textSections; i++) {
        const section = getTextSection(
          `CV.sections.${sectionName}.items.${index}.textSections`,
          i
        );
        sections.push(section);
      }

      return sections;
    })(),
  });

  return {
    sections: {
      education: {
        title: t("CV.sections.education.title"),
        items: [
          getListItem("education", 0, 2, "ISDI_Coders.jpg"),
          getListItem("education", 1, 2, "jesuites.png"),
        ],
      },
      experience: {
        title: t("CV.sections.experience.title"),
        items: [
          getListItem("experience", 0, 1, "blikk.png"),
          getListItem("experience", 1, 1, "webhelp.png"),
          getListItem("experience", 2, 1, "i3e.jpg"),
          getListItem("experience", 3, 1, "laforja.png"),
        ],
      },
      languages: {
        title: t("CV.sections.languages.title"),
        text: t("CV.sections.languages.text"),
        sections: [
          {
            title: t("CV.sections.languages.sections.0"),
            items: [
              {
                name: t("CV.sections.languages.languages.0"),
                text: t("CV.sections.languages.native"),
              },
              {
                name: t("CV.sections.languages.languages.1"),
                text: t("CV.sections.languages.native"),
              },
              {
                name: t("CV.sections.languages.languages.2"),
                text: t("CV.sections.languages.fluent"),
              },
            ],
            notRated: true,
          },
          {
            title: t("CV.sections.languages.sections.1"),
            items: [
              {
                name: "JavaScript",
                rating: 5,
              },
              {
                name: "TypeScript",
                rating: 5,
              },
              {
                name: "C#",
                rating: 3,
              },
              {
                name: "C++",
                rating: 2,
              },
              {
                name: "Lua",
                rating: 4,
              },
              {
                name: "SQL",
                rating: 4,
              },
            ],
          },
          {
            title: t("CV.sections.languages.sections.2"),
            items: [
              {
                name: "HTML / JSX",
                rating: 5,
              },
              {
                name: "JSON",
                rating: 5,
              },
              {
                name: "XML",
                rating: 5,
              },
            ],
          },
        ],
      },
      technologies: {
        name: t("CV.sections.technologies.name"),
        title: t("CV.sections.technologies.title"),
        text: t("CV.sections.technologies.text"),
        pages: {
          technologies: {
            name: t("CV.sections.technologies.pages.technologies.name"),
            sections: [
              [
                {
                  title: "Frameworks",
                  items: [
                    {
                      name: "React",
                      rating: 5,
                    },
                    {
                      name: "Next.js",
                      rating: 4,
                    },
                    {
                      name: "Express",
                      rating: 5,
                    },
                    {
                      name: "JQuery",
                      rating: 2,
                    },
                    {
                      name: "Flutter",
                      rating: 3,
                    },
                  ],
                },
                {
                  title: t(
                    "CV.sections.technologies.pages.technologies.names.databases"
                  ),
                  items: [
                    {
                      name: "MongoDB",
                      rating: 5,
                    },
                    {
                      name: "MySQL",
                      rating: 4,
                    },
                    {
                      name: "PostgresSQL",
                      rating: 3,
                    },
                  ],
                },
              ],
              [
                {
                  title: "Testing",
                  items: [
                    {
                      name: "Jest",
                      rating: 5,
                    },
                    {
                      name: "Supertest",
                      rating: 4,
                    },
                    {
                      name: "Testing-library",
                      rating: 5,
                    },
                  ],
                },
                {
                  title: t(
                    "CV.sections.technologies.pages.technologies.names.dataflow"
                  ),
                  items: [
                    {
                      name: "Flux",
                      rating: 5,
                    },
                    {
                      name: "Redux",
                      rating: 5,
                    },
                  ],
                },
                {
                  title: t(
                    "CV.sections.technologies.pages.technologies.names.versioncontrol"
                  ),
                  items: [
                    {
                      name: "Git",
                      rating: 5,
                    },
                    {
                      name: "GitHub",
                      rating: 5,
                    },
                  ],
                },
              ],
              [
                {
                  title: t(
                    "CV.sections.technologies.pages.technologies.names.styling"
                  ),
                  items: [
                    {
                      name: "CSS",
                      rating: 5,
                    },
                    {
                      name: "SCSS",
                      rating: 5,
                    },
                    {
                      name: "Styled-components",
                      rating: 5,
                    },
                    {
                      name: "CSS Modules",
                      rating: 5,
                    },
                  ],
                },
                {
                  title: t(
                    "CV.sections.technologies.pages.technologies.names.methodology"
                  ),
                  items: [
                    {
                      name: "CI/CD",
                      rating: 5,
                    },
                    {
                      name: "SOLID Principles",
                      rating: 4,
                    },
                    {
                      name: "TDD",
                      rating: 3,
                    },
                    {
                      name: "Agile",
                      rating: 4,
                    },
                  ],
                },
              ],
            ],
          },
          skills: {
            name: t("CV.sections.technologies.pages.skills.name"),
            sections: [
              [
                getTextSection(
                  "CV.sections.technologies.pages.skills.sections",
                  0
                ),
                getTextSection(
                  "CV.sections.technologies.pages.skills.sections",
                  1
                ),
                getTextSection(
                  "CV.sections.technologies.pages.skills.sections",
                  2
                ),
              ],
              [
                getTextSection(
                  "CV.sections.technologies.pages.skills.sections",
                  3
                ),
                getTextSection(
                  "CV.sections.technologies.pages.skills.sections",
                  4
                ),
                getTextSection(
                  "CV.sections.technologies.pages.skills.sections",
                  5
                ),
              ],
            ],
          },
          controls: {
            prev: t("CV.sections.technologies.pages.controls.prev"),
            next: t("CV.sections.technologies.pages.controls.next"),
            page: t("CV.sections.technologies.pages.controls.page"),
          },
        },
      },
      references: {
        title: t("CV.sections.references.title"),
        button: {
          original: t("CV.sections.references.button.original"),
          translated: t("CV.sections.references.button.translated"),
        },
        items: [getLetter("CV.sections.references.items", 0, "gunnar.jpg")],
      },
      download: {
        title: t("CV.sections.download.title"),
        text: t("CV.sections.download.text"),
        disclaimer: t("CV.sections.download.disclaimer"),
        checkmark: t("CV.sections.download.checkmark"),
        checkmarkError: t("CV.sections.download.checkmarkError"),
        buttonText: t("CV.sections.download.buttonText"),
        items: [
          [
            {
              name: t("CV.sections.download.items.0"),
              link: "PauIbanezCV.pdf",
            },
            {
              name: t("CV.sections.download.items.1"),
              link: "PauIbanezCV_RecomendationLetter.pdf",
            },
          ],
          [
            {
              name: t("CV.sections.download.items.2"),
              link: "static.CL",
            },
            {
              name: t("CV.sections.download.items.3"),
              link: "PauIbanezCV_Combined.pdf",
            },
          ],
        ],
      },
    },
  };
};

export default useSections;
