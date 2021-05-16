import React from 'react';
import Styles from './Header.module.scss';

//icons
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";



const Header = ({handleOnclick}) => {
  
    return (
        <header className={Styles.main}>
            <FaBars onClick={handleOnclick} className={Styles.humbergar} size={26}/>
            <img 
                src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" 
                alt="" 
                className={Styles.logo}
            />

            <form>
                <input type="text" placeholder="Search"/>
                <button type="submit">
                    <AiOutlineSearch size={22}/>
                </button>
            </form>

            <div className={Styles.icons}>
                <MdNotifications size={28}/>
                <MdApps siz={28}/>
                <img src="https://smallimg.pngkey.com/png/small/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                alt="" 
                className={Styles.avatar}/>
            </div>
            
        </header>
    )
}

export default Header
