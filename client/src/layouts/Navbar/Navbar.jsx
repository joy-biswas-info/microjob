import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(open);
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
  console.log(pathname);
  return (
    <nav className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span
              className={active || pathname !== "/" ? "text active" : "text"}
            >
              Fiverr
            </span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser && <span>Sign In</span>}

          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F19896008-male-user-avatar-icon-in-flat-design-style-person-signs-illustration&psig=AOvVaw2rCP_LZaIZpSXEFVywF7Mr&ust=1699894423119000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJi7t6v2voIDFQAAAAAdAAAAABAE"
                alt=""
                height="50"
              />
              <span onClick={() => setOpen(!open)}>
                {currentUser?.username}
              </span>
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
      <hr />
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
