import React,{useState} from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

  const handleClick=(index)=>{
    setSelectedMenu(index);
  }

  const handleProfileClick=(index)=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const menuClass="menu";
  const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleClick(0)} to="/">
            <p className={selectedMenu===0? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleClick(1)} to="/orders">
            <p className={selectedMenu===1? activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleClick(2)} to="/holdings">
            <p className={selectedMenu===2? activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleClick(3)} to="/positions">
            <p className={selectedMenu===3? activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleClick(4)} to="/funds">
            <p className={selectedMenu===4? activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleClick(5)} to="/apps">
            <p className={selectedMenu===5? activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
