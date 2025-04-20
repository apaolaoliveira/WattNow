import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: white;
  border-bottom: 1px solid black;
`;

export const Logo = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  font-size: 16px;
  color: #303840;
  align-items: center;
`;

export const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #303840;
  cursor: pointer;
`;
