import Link from "next/link";
import { userService } from "../services";

export default Nav;

function Nav(props) {
  const logout = () => {
    return userService.logout();
  };

  return (
    <nav className="navbar navbar-default navbar-expand bg-light">
      <div className="container-fluid">
        <div className="navbar-nav me-auto">
          <Link href="/" className="nav-item nav-link">
            Home
          </Link>
        </div>
        <div className="navbar-nav">
          {props.role ? (
            <a
              onClick={logout}
              className="nav-item nav-link"
              style={{ cursor: "pointer" }}
            >
              Log Out
            </a>
          ) : (
            <>
              <Link href="account/login" className="nav-item nav-link">
                LogIn
              </Link>
              <Link href="account/register" className="nav-item nav-link">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
