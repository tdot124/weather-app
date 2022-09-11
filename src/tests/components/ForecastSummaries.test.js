import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description1",
      icon: "stubIcon1",
      temperature: {
        min: 11,
        max: 22,
      },
    },
    {
      date: 2222222,
      description: "Stub description2",
      icon: "stubIcon2",
      temperature: {
        min: 22,
        max: 33,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
