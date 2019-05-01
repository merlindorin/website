import React    from "react"
import styled   from "styled-components"
import { Link } from "gatsby"

const NavigationButton = styled.div`
  position: relative;
  cursor: pointer;
  color: #ccd1db;
  height: 48px;
  width: 48px;
`

const NavigationIcon = styled.div`
  background: ${({ open }) => open ? "rgba(204,209,219,0)" : "#ccd1db"};
  position: relative;
  width: 28px;
  height: 2px;
  
  top: calc(50% - 1px);
  left: calc(50% - 15px);
  
  transition: all 0ms 300ms, background 0.2s ease-out;
  
  &::before {
    ${({ open }) => open
  ? "transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)"
  : "transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),transform 300ms cubic-bezier(0.23, 1, 0.32, 1),background 0.2s ease-out"
  };
    
    position: absolute;
    content: '';
    background: #ccd1db;
    width: 100%;
    height: 2px;
    
    bottom: ${({ open }) => open ? 0 : 9}px;
    transform: ${({ open }) => open ? "rotate(-45deg)" : "none"};
  }
  
  &::after {
    ${({ open }) => open
  ? "transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),background 0.2s ease-out"
  : "transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),transform 300ms cubic-bezier(0.23, 1, 0.32, 1),background 0.2s ease-out"
  };
    position: absolute;
    content: '';
    background: #ccd1db;
    width: 100%;
    height: 2px;
    
    top: ${({ open }) => open ? 0 : 9}px;
    transform: ${({ open }) => open ? "rotate(45deg)" : "none"};
  }
`

const NavBox = styled.nav`
  position: absolute;
  z-index: 500;
  top: 70px;
  right: 11px;
  min-width: 270px;
  padding: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  text-align: right;
  border: 1px solid #e7eaf3;
  border-radius: 3px;
  background-color: #fff;
  will-change: transform;
  
  transform: ${({ open }) => open ? "translate3d(0, 0, 0)" : "none"};
  pointer-events: ${({ open }) => open ? "initial" : "none"};
  opacity: ${({ open }) => open ? 1 : 0};
`

const NavList = styled.ul`
  font-size: 16px;
  font-weight: 600;
  list-style: none;
  color: #292a2f;
`

const NavItem = styled.li`
  position: relative;
  margin-bottom: 5px;
  
  &::after {
    position: absolute;
    top: calc(50% - 6px);
    right: 17px;
    width: 4px;
    height: 4px;
    content: '';
    transition: background 0.2s ease-out, border 0.2s ease-out;
    border-width: 3px;
    border-style: solid;
    border-radius: 20px;
    
    border-color: ${({ active }) => active ? "#daeaff" : "#f8fbfd"};
    background-color: ${({ active }) => active ? "#004eaf" : "#d2dbe5"};
  }
`

const NavLink = styled(Link)`
  position: relative;
  display: block;
  padding: 12px 0;
  padding-right: 55px;
  white-space: nowrap;
  text-decoration: none;
`

class NavigationBox extends React.PureComponent {

  constructor(props, context) {
    super(props, context)

    this.state = {
      menu: false,
    }
  }

  render() {
    return (
      <NavigationButton onClick={() => this.setState({ menu: !this.state.menu })}>
        <NavigationIcon open={this.state.menu}/>
        <NavBox open={this.state.menu}>
          <NavList>
            <NavItem active>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/authors/romain-dary">Who Am I</NavLink>
            </NavItem>
          </NavList>
        </NavBox>
      </NavigationButton>
    )
  }
}

export default NavigationBox
