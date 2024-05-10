import { render, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import Navbar from '../layout/Navbar';
jest.mock("react-router-dom");
 
test("checking title",async()=>{
  render(<Navbar />);
  await waitFor(()=>{
      const linkElement = screen.getByTestId("producttbl")
      expect(linkElement).toBeInTheDocument();
  })
}) 

test("checking title",async()=>{
  render(<Navbar />);
  await waitFor(()=>{
      const linkElement = screen.getByTestId("requesttbl")
      expect(linkElement).toBeInTheDocument();
  })
}) 

test("checking title",async()=>{
  render(<Navbar />);
  await waitFor(()=>{
      const linkElement = screen.getByTestId("retailertbl")
      expect(linkElement).toBeInTheDocument();
  })
}) 