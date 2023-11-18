import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    userId: 1,
    username: "Joy Biswas",
    isSeller: true,
  };

  return (
    <nav className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span
              className={active || pathname !== "/" ? "text active" : "text"}
            >
              Jiverr
            </span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Jiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser && <span>Sign In</span>}

          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="./images/man.png" alt="" height="50" />

              <span>{currentUser?.username}</span>
              <div className="options" onClick={() => setOpen(!open)}>
                {open && (
                  <>
                    {currentUser?.isSeller && (
                      <>
                        <Link to="/mygigs">My Gigs</Link>
                        <Link to="/add">Add new gigs</Link>
                      </>
                    )}

                    <Link to="/orders">Order</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="orders">Orders</Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && <hr />}
      <div className={active || pathname !== "/" ? "active menu" : "menu"}>
        <Link to="/"> Graphics & Design</Link>
        <Link to="/">Programming & Tech</Link>
        <Link to="/">Digital Marketing</Link>
        <Link to="/">Video & Animation</Link>
        <Link to="/">Writing & Translation</Link>
        <Link to="/">Business</Link>
        <Link to="/">Music & Audio</Link>
        <Link to="/"> Data</Link>
        <Link to="/"> Photography</Link>
        <Link to="/"> AI Services</Link>
      </div>
    </nav>
  );
};

export default Navbar;
