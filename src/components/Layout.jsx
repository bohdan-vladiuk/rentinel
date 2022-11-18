import Nav from "./Nav";

export default Layout;

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
