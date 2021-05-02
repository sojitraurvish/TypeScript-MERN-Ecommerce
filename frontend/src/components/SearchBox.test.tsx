import { fireEvent, render } from "@testing-library/react";
import SearchBox from "./SearchBox";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchBox />);

  expect(queryByTestId("search-box")).toBeTruthy();
  expect(queryByPlaceholderText("Searching...")).toBeTruthy();
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(<SearchBox />);

    const searchInput: any = queryByPlaceholderText("Searching...");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
