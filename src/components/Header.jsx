import React from "react";
import './Header.css';
import { BsFillCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";

const Header = (props) => {
  const {theme,setTheme} = props;
  function toggleTheme(){
    if(theme === "light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }
  return (
    <>
      <header>
        <div className="logo">
            <span>Task Management</span>
        </div>

        <div className="theme-container">
            <span>{theme} mode</span>
            <span className="icon" onClick={toggleTheme}>
              {theme === "light" ? <BsFillCloudSunFill /> : <BsFillCloudMoonFill />}
            </span>
        </div>
      </header>
    </>
  );
};

export default Header;
