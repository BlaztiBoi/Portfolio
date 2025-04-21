import { Outlet } from "react-router-dom";
import { Header } from "./Header";
// import FloatingHeader from "./common/FloatingHeader";
// import FloatingHeader from "@/components/header/FloatingHeader";



export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <Header/>
      {/* <FloatingHeader /> */}

      {/* Main Content */}
      <main>
        {/* Renders child routes */}
        <Outlet />
      </main>
    </div>
  );
}
