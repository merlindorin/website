import React    from "react"
import styled   from "styled-components"
import { Link } from "gatsby"
import Logo     from "./../../svgs/rd-logo.svg"

const Header = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 80px;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

const StyledLogo = styled(Logo)`
  width: 48px;
  fill: #ccd1db;
`
const LogoLink = styled(Link)`
  display: block;
  max-width: 300px;
  max-height: 60px;
`

const Navigation = styled.section`
  position: relative;
  margin-left: auto;
`

const NavigationButton = styled.div`
  width: 41px;
  height: 41px;
  cursor: pointer;
  color: #ccd1db;
`

const NavigationIcon = styled.div`
  position: relative;
  top: 9px;
  left: 5px;
  transition: all 0ms 300ms, background 0.2s ease-out;
  transform: translateY(9px);
  background: ${({ open }) => open ? "rgba(204,209,219,0)" : "#ccd1db"};
  width: 30px;
  height: 2px;
  border-radius: 30px;
  
  
  &::before {
  
    transition: ${({ open }) => open
  ? "bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)"
  : "bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),transform 300ms cubic-bezier(0.23, 1, 0.32, 1),background 0.2s ease-out"
  };
      
    position: absolute;
    left: 0;
    content: '';
    background: #ccd1db;
    will-change: transform;
    width: 30px;
    height: 2px;
    border-radius: 30px;
    
    bottom: ${({ open }) => open ? 0 : 9}px;
    transform: ${({ open }) => open ? "rotate(-45deg)" : "none"};
  }
  
  &::after {
    transition: ${({ open }) => open
  ? "top 300ms cubic-bezier(0.23, 1, 0.32, 1),transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),background 0.2s ease-out"
  : "top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),transform 300ms cubic-bezier(0.23, 1, 0.32, 1),background 0.2s ease-out"
  };
    position: absolute;
    left: 0;
    content: '';
    background: #ccd1db;
    will-change: transform;
    width: 30px;
    height: 2px;
    border-radius: 30px;
    
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

export default class Layout extends React.PureComponent {

  constructor(props, context) {
    super(props, context)

    this.state = {
      menu: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(menu) {
    this.setState({ menu: !menu })
  }

  render() {
    return (
      <Header>
        <LogoLink to="/">
          <StyledLogo />
        </LogoLink>
        <Navigation>
          <NavigationButton onClick={() => this.toggleMenu(this.state.menu)}>
            <NavigationIcon open={this.state.menu}/>
          </NavigationButton>
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
        </Navigation>
      </Header>
    )
  }
}
