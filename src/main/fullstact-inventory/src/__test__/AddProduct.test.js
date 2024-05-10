import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddProduct from "../pages/AddProducts";
import Service from "../service/Service";
jest.mock("react-router-dom");


describe("My Test Cases", () => {
  it("renders 'label' ", () => {
    render(<AddProduct />);
    const linkElement = screen.getByRole("label");
    expect(linkElement).toBeInTheDocument();
  });
});
it("renders 'price' ", () => {
  render(<AddProduct />);
  const linkElement = screen.getByRole("price");
  expect(linkElement).toBeInTheDocument();
});
it("renders 'rate' ", () => {
  render(<AddProduct />);
  const linkElement = screen.getByRole("rate");
  expect(linkElement).toBeInTheDocument();
});

it("renders 'stock' ", () => {
  render(<AddProduct />);
  const linkElement = screen.getByRole("stock");
  expect(linkElement).toBeInTheDocument();
});

it("renders 'submit button' ", () => {
  render(<AddProduct />);
  const linkElement = screen.getByTestId("login-submit");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("Submit");
 
});

it("submit the form with valid data", async () => {
  render(<AddProduct />);

  //valid data inputs
  fireEvent.change(screen.getByPlaceholderText("Enter Product Name"), {
    target: { value: "Watch" },
  });

  fireEvent.change(screen.getByPlaceholderText("Enter selling price"), {
    target: { value: "500" },
  });

  fireEvent.change(screen.getByPlaceholderText("Enter purchased rate"), {
    target: { value: "400" },
  });

  fireEvent.change(screen.getByPlaceholderText("Enter available stock"), {
    target: { value: "1000" },
  });
});

test("checking title",()=>{
  render(<AddProduct />);
      const linkElement = screen.getByTestId("exist")
      expect(linkElement).toBeInTheDocument()
}) ;
