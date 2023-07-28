import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 50px;
`;
const NavBackItem = styled.div`
  position: absolute;
  left: 20px;
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavItems>
        {(window.location.href.includes("/posts/new") ||
          window.location.href.includes("/posts")) && (
          <NavBackItem>
            <NavLink href="/">Back</NavLink>
          </NavBackItem>
        )}
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts/new">New Post</NavLink>
        </NavItem>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
