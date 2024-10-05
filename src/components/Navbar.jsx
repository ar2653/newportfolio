import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Svg from "./Svg";
import PropTypes from "prop-types";

function Navbar({ theme, setTheme }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "cyberpunk" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setShouldAnimate(true);
      setTimeout(() => {
        setIsDropdownOpen(false);
        setShouldAnimate(false);
      }, 300);
    } else {
      setIsDropdownOpen(true);
    }
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false); // Close dropdown on link click
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to="/">
            ANKUSH RANAPURE
          </Link>
        </div>

        {/* Menu for mobile */}
        <div className="flex-none md:hidden relative">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost"
              onClick={toggleDropdown}
            >
              <Svg name="menu" />
            </label>
            {isDropdownOpen && (
              <ul
              tabIndex={0}
              className={`dropdown-content menu bg-base-100 p-2 shadow rounded-box absolute right-0 w-52 mt-2 font-thin z-50 ${
                shouldAnimate ? "hide" : "show"
              }`}
            >
                <li>
                  <Link to="/about" onClick={handleLinkClick}>
                    <Svg name="about" />
                    <span className="text-center flex justify-center items-center">
                      About
                    </span>
                    <span className="badge badge-xs badge-info"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/projects" onClick={handleLinkClick}>
                    <Svg name="projects" />
                    <span className="text-center flex justify-center items-center">
                      Projects
                    </span>
                    <span className="badge badge-xs badge-warning"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleLinkClick}>
                    <Svg name="contact" />
                    <span className="text-center flex justify-center items-center">
                      Contact
                    </span>
                    <span className="badge badge-xs badge-success"></span>
                  </Link>
                </li>
                <li>
                  <label className="flex cursor-pointer items-center justify-between">
                    <Svg name="sun" />
                    <span className="flex-grow flex justify-center items-center">
                      <input
                        type="checkbox"
                        checked={theme === "cyberpunk"}
                        onChange={toggleTheme}
                        className="toggle theme-controller"
                      />
                    </span>
                    <Svg name="moon" />
                  </label>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Menu for desktop */}
        <div className="flex-none hidden md:block">
          <ul className="menu bg-base-100 lg:menu-horizontal md:menu-horizontal rounded-box font-thin">
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                <Svg name="about" />
                About
                <span className="badge badge-xs badge-info"></span>
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleLinkClick}>
                <Svg name="projects" />
                Projects
                <span className="badge badge-xs badge-warning"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                <Svg name="contact" />
                Contact
                <span className="badge badge-xs badge-success"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Theme toggle for desktop */}
        <div className="flex-none hidden md:block">
          <label className="flex cursor-pointer gap-2">
            <Svg name="sun" />
            <input
              type="checkbox"
              checked={theme === "cyberpunk"}
              onChange={toggleTheme}
              className="toggle theme-controller text-center"
            />
            <Svg name="moon" />
          </label>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired
};

export default Navbar;
