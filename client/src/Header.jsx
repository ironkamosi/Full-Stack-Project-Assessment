import React from "react";
import { Navbar} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="nav-title">Video Recommendations</Navbar.Brand>
    
    </Navbar>
  );
};

export default Header;
