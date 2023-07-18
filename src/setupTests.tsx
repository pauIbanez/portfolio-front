// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ReactNode, ReactElement } from "react";
import { render } from "@testing-library/react";

export const renderInRouter = (
  component: ReactElement,
  initialEntries?: string[]
) => {
  const Bocata = ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={initialEntries || ["/home"]}>
      {children}
    </MemoryRouter>
  );

  render(component, { wrapper: Bocata });
};
