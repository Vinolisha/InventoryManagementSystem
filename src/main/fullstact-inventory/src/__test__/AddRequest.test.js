import { fireEvent, render, screen } from "@testing-library/react";
import Service from "../service/Service";
import AddRequest from "../pages/AddRequest";

jest.mock("react-router-dom");
jest.mock("axios");

describe("My Test Cases", () => {
  it("renders 'Product-name' ", () => {
    render(<AddRequest />);
    const linkElement = screen.getByRole("Product-name");
    expect(linkElement).toBeInTheDocument();
  });
});
it("renders 'Retail-name' ", () => {
    render(<AddRequest />);
    const linkElement = screen.getByRole("Retail-name");
    expect(linkElement).toBeInTheDocument();
  });
  
  it("renders 'quantity' ", () => {
    render(<AddRequest />);
    const linkElement = screen.getByRole("quantity");
    expect(linkElement).toBeInTheDocument();
  });

  test("checking title",()=>{
    render(<AddRequest />);
        const linkElement = screen.getByTestId("exist")
        expect(linkElement).toBeInTheDocument()
  });
