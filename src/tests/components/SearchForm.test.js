import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    onSubmit: jest.fn(),
    searchText: "",
    setSearchText: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        onSubmit={validProps.onSubmit}
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button text correctly", () => {
    const { getByText } = render(
      <SearchForm
        onSubmit={validProps.onSubmit}
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
      />
    );

    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });

  it("calls handleCitySearch when search button is pressed", () => {
    render(
      <SearchForm
        onSubmit={validProps.onSubmit}
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
      />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(validProps.onSubmit).toHaveBeenCalledTimes(1);
  });
});
