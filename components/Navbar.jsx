import Link from "next/link";
import React, { useState } from "react";

export default function Navbar(props) {
  const navbar = {
    backgroundColor: "grey",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  };

  const navButton = {
    fontSize: "32px",
    fontFamily: "sans-serif",
    color: "#f8f8ff",
  };

  const navButtonHover = {
    fontSize: "32px",
    fontFamily: "sans-serif",
    color: "#60fc70",
  };

  const navButtonShown = {
    fontSize: "32px",
    backgroundColor: "#60fc70",
    fontFamily: "sans-serif",
    color: "#f8f8ff",
  };

  const navButtonShownHover = {
    fontSize: "32px",
    backgroundColor: "#60fc70",
    fontFamily: "sans-serif",
    color: "grey",
  };

  const [isHomeHover, setHomeHover] = useState(false);
  const [isExpHover, setExpHover] = useState(false);
  const [isContactsHover, setContactsHover] = useState(false);
  const [islab07Hover, setlab07Hover] = useState(false);

  return (
    <div className="d-flex justify-content-evenly m-5 mb-0 p-5" style={navbar}>
      <div className="hstack gap-5 d-none d-sm-flex">
        <span>
          <Link href="/">
            <a
              className="border-0 rounded-3 py-1 px-3 p-3"
              style={
                props.link === "index"
                  ? isHomeHover
                    ? navButtonShownHover
                    : navButtonShown
                  : isHomeHover
                  ? navButtonHover
                  : navButton
              }
              onMouseEnter={() => setHomeHover(true)}
              onMouseLeave={() => setHomeHover(false)}
            >
              Home
            </a>
          </Link>
        </span>
        <span>
          <Link href="/exp">
            <a
              className="border-0 rounded-3 py-1 px-3"
              style={
                props.link === "exp"
                  ? isExpHover
                    ? navButtonShownHover
                    : navButtonShown
                  : isExpHover
                  ? navButtonHover
                  : navButton
              }
              onMouseEnter={() => setExpHover(true)}
              onMouseLeave={() => setExpHover(false)}
            >
              Experience
            </a>
          </Link>
        </span>
        <span>
          <Link href="/contacts">
            <a
              className="border-0 rounded-3 py-1 px-3"
              style={
                props.link === "contacts"
                  ? isContactsHover
                    ? navButtonShownHover
                    : navButtonShown
                  : isContactsHover
                  ? navButtonHover
                  : navButton
              }
              onMouseEnter={() => setContactsHover(true)}
              onMouseLeave={() => setContactsHover(false)}
            >
              Contacts
            </a>
          </Link>
        </span>
        <span>
          <Link href="/lab-07">
            <a
              className="border-0 rounded-3 py-1 px-3"
              style={
                props.link === "lab-07"
                  ? islab07Hover
                    ? navButtonShownHover
                    : navButtonShown
                  : islab07Hover
                  ? navButtonHover
                  : navButton
              }
              onMouseEnter={() => setlab07Hover(true)}
              onMouseLeave={() => setlab07Hover(false)}
            >
              Lab-07
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
}
