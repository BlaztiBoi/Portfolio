import  Navigation  from "./Navigation";
import { Outlet } from "react-router-dom";



export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <main>
        <Navigation />  
        <Outlet />
      </main>
    </div>
  );
}
