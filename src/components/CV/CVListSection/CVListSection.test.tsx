/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import CVListSection from "./CVListSection";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Given the CVListSection component", () => {
  describe("When it's intanciated passing a title some items", () => {
    test("Then it should render the title and items", () => {
      const items = [
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
      ];
      const title = "Test title";

      render(<CVListSection title={title} items={items} />);

      const foundTitle = screen.getByRole("heading", { level: 3, name: title });
      const foundItemTitle = screen.getByRole("heading", {
        level: 4,
        name: items[0].name,
      });

      expect(foundTitle).toBeInTheDocument();
      expect(foundItemTitle).toBeInTheDocument();
    });
  });

  describe("When it's intanciated passing a title some items and the user changes the order", () => {
    test("Then it should render the items with the changed order", () => {
      const items = [
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
      ];

      render(<CVListSection title={"title"} items={items} />);

      const foundButton = screen.getByRole("button");

      let foundItemNames = screen.getAllByRole("heading", { level: 4 });

      foundItemNames.forEach((name, index) => {
        expect(name.textContent).toBe(items[index].name);
      });
      act(() => {
        userEvent.click(foundButton);
      });

      foundItemNames = screen.getAllByRole("heading", {
        level: 4,
      });

      foundItemNames.forEach((name, index) => {
        expect(name.textContent).not.toBe(items[index].name);
      });

      act(() => {
        userEvent.click(foundButton);
      });

      foundItemNames = screen.getAllByRole("heading", {
        level: 4,
      });

      foundItemNames.forEach((name, index) => {
        expect(name.textContent).toBe(items[index].name);
      });

      act(() => {
        userEvent.click(foundButton);
      });

      foundItemNames = screen.getAllByRole("heading", {
        level: 4,
      });

      foundItemNames.forEach((name, index) => {
        expect(name.textContent).not.toBe(items[index].name);
      });

      act(() => {
        userEvent.click(foundButton);
      });

      foundItemNames = screen.getAllByRole("heading", {
        level: 4,
      });

      foundItemNames.forEach((name, index) => {
        expect(name.textContent).toBe(items[index].name);
      });
    });
  });
});
