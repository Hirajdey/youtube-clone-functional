import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import Styles from './Video.module.scss';

const Video = ({ video }) => {
    return (
        <div className={Styles.video}>
            <div className={Styles.top}>
                <img src={video.snippet.thumbnails.default.url} alt=""/>
                <span>05:43</span>
            </div>
            <div className={Styles.title}>
                <h3>{video.snippet.title}</h3>
            </div>
            <div className={Styles.details}>
                <span>
                    <AiFillEye/> 5m Views
                </span>
                <span>5 days ago</span>
            </div>
            <div className={Styles.channel}>
                <img src="https://yt3.ggpht.com/ytc/AAUvwnjjR7_infBDRDWyo6XnUmxwLquLSukX8hoE2NtI9w=s68-c-k-c0x00ffffff-no-rj" alt=""/>
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video
