import Link from "next/link";

export default Nav;

function Nav(props) {
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
            <Link href="account/logout" className="nav-item nav-link">
              Log Out
            </Link>
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
