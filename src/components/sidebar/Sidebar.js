import React from 'react';
import {MdExitToApp, MdHistory, MdHome, MdLibraryBooks, MdSentimentDissatisfied, MdSubscriptions, MdThumbUp } from 'react-icons/md';
import Styles from './Sidebar.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { log_out } from '../../redux/actions/auth.action';


const Sidebar = ({sidebar, handleOnclick}) => {

    const dispatch = useDispatch()
    
    const logOutHandler = () =>{
        dispatch(log_out())
    }

    return (
        <nav 
            className={classNames(Styles.main, sidebar && Styles.open)}
            onClick={() => handleOnclick(false)}
        >
            <ul>
                <li>
                    <MdHome size={23}/>
                    <span>Home</span>
                </li>
                <li>
                    <MdSubscriptions size={23}/>
                    <span>Subscriptions</span>
                </li>
                <li>
                    <MdThumbUp size={23}/>
                    <span>Liked Video</span>
                </li>
                <li>
                    <MdHistory size={23}/>
                    <span>History</span>
                </li>

                <li>
                    <MdLibraryBooks size={23}/>
                    <span>Library</span>
                </li>

                <li>
                    <MdSentimentDissatisfied/>
                    <span>I dot't Know</span>
                </li>
            </ul>

            <hr/>

            <ul>
                <li onClick={logOutHandler}>
                    <MdExitToApp/>
                    <span>Logo Out</span>
                </li>
                <li>

                </li>
            </ul>

            <hr/>

        </nav>
    )
}

export default Sidebar
