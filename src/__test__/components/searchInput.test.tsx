import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render } from '../../__utils__/test-utils';
import App from "../../App";

let getByTestId: any;

beforeEach(() => {
  const component = render(<App />);

  getByTestId = component.getByTestId;
});

test("input renders empty by default", () => {

  const inputEl = getByTestId("search-input");

  expect(inputEl).toHaveValue("");
});


test("change value of input correctly", () => {

  const inputEl = getByTestId("search-input");

  expect(inputEl).toHaveValue("");

  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });

  expect(inputEl).toHaveValue("5");
});
