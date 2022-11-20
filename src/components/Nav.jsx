import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import useAuth from "hooks/useAuth";

function NavBar() {
  const { isAuthenticated, signOut, user } = useAuth();

  return (
    <Navbar className="ms-2 me-2">
      <Navbar.Brand href="/">
        <Image src="/image/logo.svg" alt="Rentinel" width={150} height={26} />
      </Navbar.Brand>
      <Navbar.Collapse id="navbar">
        <Nav className="ms-auto">
          {isAuthenticated ? (
            <NavDropdown id="nav-dropdown" title={`${user.email}`}>
              <NavDropdown.Item onClick={signOut}>Log Out</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Nav.Link href="auth/login">LogIn</Nav.Link>
              <Nav.Link href="auth/register">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <nav className="navbar navbar-default navbar-expand bg-light">
    //   <div className="container-fluid">
    //     <div className="navbar-nav me-auto">
    //       <Link href="/" className="nav-item nav-link">
    //         <Image
    //           src="/image/logo.svg"
    //           alt="Rentinel"
    //           width={150}
    //           height={26}
    //         />
    //       </Link>
    //     </div>
    //     <div className="navbar-nav">
    //       {isAuthenticated ? (
    //         <a
    //           onClick={signOut}
    //           className="nav-item nav-link"
    //           style={{ cursor: "pointer" }}
    //         >
    //           Log Out
    //         </a>
    //       ) : (
    //         <>
    //           <Link href="auth/login" className="nav-item nav-link">
    //             LogIn
    //           </Link>
    //           <Link href="auth/register" className="nav-item nav-link">
    //             Register
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </nav>
  );
}

export default NavBar;
