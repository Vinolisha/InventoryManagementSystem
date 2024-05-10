import { fireEvent, render, screen } from "@testing-library/react";

import AddRetailer from "../pages/AddRetailer";
import Service from "../service/Service";

jest.mock("react-router-dom");
jest.mock("axios");

describe("My Test Cases", () => {
  it("renders 'name' ", () => {
    render(<AddRetailer />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
  });
});
it("renders 'number' ", () => {
  render(<AddRetailer />);
  const linkElement = screen.getByRole("number");
  expect(linkElement).toBeInTheDocument();
});

it("renders 'address' ", () => {
  render(<AddRetailer />);
  const linkElement = screen.getByRole("address");
  expect(linkElement).toBeInTheDocument();
});
it("renders 'submit button' ", () => {
  render(<AddRetailer />);
  const linkElement = screen.getByTestId("login-submit");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("Submit");
});

it("submit the form with valid data", async () => {
  render(<AddRetailer />);

  //valid data inputs
  fireEvent.change(screen.getByPlaceholderText("Enter Retailer Name"), {
    target: { value: "Vinolisha" },
  });

  fireEvent.change(screen.getByPlaceholderText("Enter Retailer phone no"), {
    target: { value: "786567867" },
  });

  fireEvent.change(screen.getByPlaceholderText("Enter retailer address"), {
    target: { value: "Chennai" },
  });

});
test("checking title",()=>{
  render(<AddRetailer />);
      const linkElement = screen.getByTestId("exist")
      expect(linkElement).toBeInTheDocument()
});
