import Link from "next/link";
import Image from "next/image";
import useAuth from "hooks/useAuth";

function Nav() {
  const { isAuthenticated, signOut } = useAuth();

  return (
    <nav className="navbar navbar-default navbar-expand bg-light">
      <div className="container-fluid">
        <div className="navbar-nav me-auto">
          <Link href="/" className="nav-item nav-link">
            <Image
              src="/image/logo.svg"
              alt="Rentinel"
              width={150}
              height={26}
            />
          </Link>
        </div>
        <div className="navbar-nav">
          {isAuthenticated ? (
            <a
              onClick={signOut}
              className="nav-item nav-link"
              style={{ cursor: "pointer" }}
            >
              Log Out
            </a>
          ) : (
            <>
              <Link href="auth/login" className="nav-item nav-link">
                LogIn
              </Link>
              <Link href="auth/register" className="nav-item nav-link">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
