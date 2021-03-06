import React, {useEffect, useState} from 'react';
import { AiFillEye } from 'react-icons/ai';
import request from '../../api';
import Styles from './Video.module.scss';

import moment from 'moment';
import numeral from 'numeral';

const Video = ({video}) => {

    const { id,
            snippet:{
                channelId,
                channelTitle, 
                title, 
                publishedAt, 
                thumbnails:{ medium },
            }, 
        } =  video

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);
    
    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format("mm:ss")
    
    
    useEffect(() => {

        const get_video_details = async() => {
            const {data:{items}} = await request('/videos',{
                params:{
                    part:'contentDetails,statistics',
                    id: id
                }
            })

            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }

        get_video_details();

    }, [id])

    useEffect(() => {
        
        const get_channel_icon = async() => {
            const {data:{items}} = await request('/channels',{
                params:{
                    part:'snippet',
                    id: channelId
                }
            })
        
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        
        get_channel_icon();

    }, [channelId])

    return (
        <div className={Styles.video}>
            <div className={Styles.top}>
                <img src={medium.url} alt=""/>
                <span>{_duration}</span>
            </div>
            <div className={Styles.title}>
                <h3>{title}</h3>
            </div>
            <div className={Styles.details}>
                <span>
                    <AiFillEye/> {numeral(views).format("0,a")} Views
                </span>
                <span>{moment(publishedAt).fromNow()}</span>
            </div>
            <div className={Styles.channel}>
                <img src={channelIcon?.url} alt=""/>
                <p>{channelTitle}</p>
            </div>
        </div>
    )
}

export default Video
