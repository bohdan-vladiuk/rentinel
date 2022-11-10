import { useEffect } from "react";
import Nav from "./Nav";

export default Layout;

function Layout({ role, children }) {
  useEffect(() => {}, []);

  return (
    <>
      <Nav role={role} />
      <div>{children}</div>
    </>
  );
}
