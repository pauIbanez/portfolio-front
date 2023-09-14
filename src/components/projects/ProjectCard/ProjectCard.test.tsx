/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen } from "@testing-library/react";
import ProjectCardInfo from "../../../Types/ProjectCardInfo";
import { ProjectTags } from "../../../data/projects/Projects";
import ProjectCard from "./ProjectCard";

describe("Given the ProjectCard component", () => {
  const mockProject: ProjectCardInfo = {
    name: "test Project",
    description: "test description",
    link: "/asd",
    logo: "some image",
    isInteractive: true,
    tags: [ProjectTags.jest, ProjectTags.typeScript],
  };

  describe("When it's instanciated with a project", () => {
    test("Then it should render the name of the project 3 times as h3,h4 and h5", () => {
      const expectedName = mockProject.name;

      render(<ProjectCard cardInfo={mockProject} onClick={() => null} />);

      const foundNameH3 = screen.getByRole("heading", {
        level: 3,
        name: expectedName,
      });
      const foundNameH4 = screen.getByRole("heading", {
        level: 4,
        name: expectedName,
      });
      const foundNameH5 = screen.getByRole("heading", {
        level: 5,
        name: expectedName,
      });

      expect(foundNameH3).toBeInTheDocument();
      expect(foundNameH4).toBeInTheDocument();
      expect(foundNameH5).toBeInTheDocument();
    });

    test("Then it should render the project logo twice", () => {
      const expectedAlt = `${mockProject.name} logo`;

      render(<ProjectCard cardInfo={mockProject} onClick={() => null} />);

      const foundLogos = screen.getAllByAltText(expectedAlt);

      expect(foundLogos.length).toBe(2);
    });
  });

  describe("When it's instanciated with a project and the mouse enters", () => {
    test("Then it should not crash", () => {
      render(<ProjectCard cardInfo={mockProject} onClick={() => null} />);

      const foundCard = screen.getByTestId("project-card");

      expect(foundCard).toBeInTheDocument();

      fireEvent.mouseEnter(foundCard);
    });
  });

  describe("When it's instanciated with a project and the mouse leaves", () => {
    test("Then it should not crash", () => {
      const mockProjectWithBGImage: ProjectCardInfo = {
        name: "test Project",
        description: "test description",
        link: "/asd",
        logo: "some image",
        isInteractive: false,
        tags: [ProjectTags.jest, ProjectTags.typeScript],
        backgroundImage: "some bgImage",
      };

      render(
        <ProjectCard cardInfo={mockProjectWithBGImage} onClick={() => null} />
      );

      const foundCard = screen.getByTestId("project-card");

      expect(foundCard).toBeInTheDocument();

      fireEvent.mouseLeave(foundCard);
    });
  });
});
