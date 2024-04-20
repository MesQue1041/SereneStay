import { Outlet } from "react-router-dom";
import { Header } from "./Header"; // Import the Header component

export function Layout() {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Header /> {/* Render the Header component */}
      <Outlet /> {/* Render the child components */}
    </div>
  );
}
