import React from 'react'
import './Header.css'
import { IoIosSearch } from "react-icons/io";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';



function Header() {
  return (
    <div className="header">
        <img 
            className="header__icon"
            src="https://www.edigitalagency.com.au/wp-content/uploads/airbnb-logo-png-transparent-background.png"
            alt="airbnb logo"
        />

        <div className="header__center">
            <input type="text" placeholder="Start your search" />
            <IoIosSearch />
        </div>

        <div className="header__right">
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
       </div>
    </div>
  )
}

export default Header
