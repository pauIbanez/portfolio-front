import { CVListSectionData } from "../../Types/CVSectionData";

interface Sections {
  readonly education: CVListSectionData;
  readonly experience: CVListSectionData;
  readonly languages: any;
  readonly technologies: any;
  readonly references: any;
  readonly download: any;
}

const sections = {
  education: {
    title: "Education",
    items: [
      {
        name: "ISDI Coders Bootcamp",
        location: "Barcelona, Spain",
        concept: "Bootcamp in Full-Stack Web Development",
        dates: {
          startDate: "Jan 2022",
          endDate: "Mar 2022",
        },
        image: "ISDI_Coders.jpg",
        textSections: [
          {
            title: "What I learned",
            text: "During my tenure at the ISDI Coders bootcamp, I had the opportunity to work extensively with some of my favorite technologies, including React, Node, Express, MongoDB, and Git. The program played a crucial role in deepening my understanding of JavaScript, enabling me to enhance my coding efficiency and sharpen my troubleshooting skills.",
          },
          {
            title: "Projects",
            text: "Throughout my academic journey, I successfully completed a diverse range of projects, showcasing my expertise in various areas of software development. These projects encompassed front-end, back-end, and full-stack development, involving both native applications and framework-like apps.",
          },
        ],
      },
      {
        name: "Jesuïtes El Clot",
        location: "Barcelona, Spain",
        concept: "Professional Formation in Computer Systems and Networks",
        dates: {
          startDate: "Sep 2017",
          endDate: "Jun 2019",
        },
        image: "jesuites.png",
        textSections: [
          {
            title: "What I learned",
            text: "In this course I learned the ins and outs of PCs and Server Systems. I built both hardware and software, from assembling a PC to creating an HTTP Apache server. We did a lot of system virtualization and we worked on HTTP, Static and SMTP servers. We also learned to correctly use the consoles in different Operating Systems as well as to create scripts for task automation with them.",
          },
          {
            title: "Remarks",
            text: "In this course, we did not have any programming classes, but I already loved it, so I spent a lot of free time in them trying out stuff. It’s while coursing in here that I was developing mini-games in unity.",
          },
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        name: "Blikk",
        location: "Reykjavik, Iceland (Remote)",
        concept: "Full-Stack developer",
        dates: {
          startDate: "Jun 2022",
          endDate: "Sep 2022",
        },
        image: "blikk.png",
        textSections: [
          {
            title: "My Tasks",
            text: "I Developed a Full-Stack banking application with Flutter, Dart and Go. My responsibilities included the architecture of the front-end app, the styling, some design (both design creation of certain elements and design interpretation). Development of both front and back-end with user authentication including OAuth and user recovery.",
          },
        ],
      },
      {
        name: "WebHelp / Google",
        location: "Barcelona, Spain (Remote)",
        concept: "Technical Support Engineer",
        dates: {
          startDate: "Jun 2021",
          endDate: "Sep 2021",
        },
        image: "webhelp.png",
        textSections: [
          {
            title: "My Tasks",
            text: "I Provided top tier customer support for Google Workspace. I investigated bugs and errors in the program and provided workaround solutions to the clients if available. My tasks focused primarily on investigation and client communication for companies using Google Workspace. I also provided consults for lower tiers of support that were in charge of individual or smaller clients.",
          },
        ],
      },
      {
        name: "i3e Informática",
        location: "Mataró, Spain",
        concept: "OS Technician",
        dates: {
          startDate: "Jan 2021",
          endDate: "Feb 2021",
        },
        image: "i3e.jpg",
        textSections: [
          {
            title: "My Tasks",
            text: "I installed and configured a customized Windows OS on hundreds of PC’s for their use in the vaccination posts during the pandemic.",
          },
        ],
      },
      {
        name: "Laforja Sistemas S.L",
        location: "Cabrera de mar, Spain",
        concept: "Machine building technician",
        dates: {
          startDate: "Nov 2018",
          endDate: "Apr 2019",
        },
        image: "laforja.png",
        textSections: [
          {
            title: "My Tasks",
            text: "I soldered and mounted logic boards for use in public transportation LED panels. I also mounted some of the LED panels themselves. Other than public transport, I configured and tested android players for their use in digital signage for hotels, companies’ internal channels, shop showcases, restaurant menus...",
          },
        ],
      },
    ],
  },
  languages: {
    title: "Languages",
    text: "These are the lanaguages I speak and write along with my level at them.",
    sections: [
      {
        title: "<&>Lan<&>guages",
        items: [
          {
            name: "Catalan",
            text: "Native",
          },
          {
            name: "Spanish",
            text: "Native",
          },
          {
            name: "English",
            text: "Fluent",
          },
        ],
        notRated: true,
      },
      {
        title: "Programmin <&>Languages",
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
        title: "Other <&>Languages",
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
    name: "Technologies",
    title: "Technbologies and Skills",
    text: "These are my most developed technologies and methodologies with an added rating. Note that the ratings reflect my evaluation of my general knowledge and proficiency in each respective area. However, understand that a high rating does not mean I claim to know everything about the given skill.",
    pages: {
      technologies: {
        name: "Technologies",
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
              title: "Databases",
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
              title: "Unidirectional data flows",
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
              title: "Version control",
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
              title: "Styling",
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
              title: "Methodologies",
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
                  name: "Test driven p.",
                  rating: 3,
                },
                {
                  name: "Agile development",
                  rating: 4,
                },
              ],
            },
          ],
        ],
      },
      skills: {
        name: "Skills",
        sections: [
          [
            {
              title: "Critical <&>Thinking",
              text: "I possess a keen analytical mindset, evaluating information objectively and drawing logical conclusions.",
            },
            {
              title: "<&>Team<&>work",
              text: "I thrive in collaborative environments, fostering open communication, trust, and mutual respect. I actively contribute to group dynamics, valuing diverse perspectives and working towards shared goals.",
            },
            {
              title: "Problem <&>Thinking",
              text: "I excel at breaking down complex problems, anticipating obstacles, and devising innovative solutions. I strongly believe that troubleshooting is the most important skill to have as a programmer. No one's code always works the first time, and it's important to know how to find what's causing the error.",
            },
          ],
          [
            {
              title: "<&>Flex<&>ibility",
              text: " I thrive in dynamic and changing environments. I embrace new challenges, willingly take on different roles, and effectively contribute to team objectives.",
            },
            {
              title: "De<&>sign (me, xd)",
              text: "I do not consider myself to be a designer, but I have an eye for it. I won’t create the best design, but I’ll know when something doesn’t work right. I put myself in the position of the end user and I try to figure out the best layout and style for the desired  purpose of the page.",
            },
            {
              title: "<&>Fast <&>learning",
              text: "I think of myself as a fast learner. My experience with such varies technologies and developing enviroments allows me to adapt to new ones with ease.",
            },
          ],
        ],
      },
    },
  },
};

export default sections;
