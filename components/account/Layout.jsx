import { useEffect } from "react";

export default Layout;

function Layout({ children }) {
  useEffect(() => {}, []);

  return <div className="col-md-6 offset-md-3 mt-5">{children}</div>;
}
