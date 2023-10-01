// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ReactNode, ReactElement } from "react";
import { render } from "@testing-library/react";

export const mockChangeLanguage = jest.fn();

// i18n
jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: mockChangeLanguage,
        language: "en",
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));

//Window open
window.open = jest.fn();

// Local scrollTo
Element.prototype.scrollTo = jest.fn();
window.scrollTo = jest.fn();

// Local storage
class LocalStorageMock {
  store = {};

  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return (this.store as any)[key] || null;
  }

  setItem(key: string, value: any) {
    (this.store as any)[key] = String(value);
  }

  removeItem(key: string) {
    delete (this.store as any)[key];
  }
}

global.localStorage = new LocalStorageMock() as any;

//Wrappers

export const renderInRouter = (
  component: ReactElement,
  initialEntries?: string[]
) => {
  const Bocata = ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={initialEntries ?? ["/home"]}>
      {children}
    </MemoryRouter>
  );

  render(component, { wrapper: Bocata });
};
