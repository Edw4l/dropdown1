import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { CSSTransition } from 'react-transition-group';

function App() {
  return(
    <Navbar>
      <NavItem icon="😔"/>
      <NavItem icon="😔"/>
      <NavItem icon="😔"/>

      <NavItem icon="😔">
         <DropdownMenu/>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return(
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {

  function DropdownItem(props) {
    return(
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-Right">{props.rightIcon}</span>
      </a>
    );
  }

  return(
    <div ClassName="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem></DropdownItem>
    </div>
  );
}

export default App
