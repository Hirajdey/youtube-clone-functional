import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoriesBar from '../components/categories-bar/CategoriesBar';
import Video from '../components/video/Video';
import Style from './HomeScreens.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from '../redux/actions/videos.action';


const HomeScreens = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        
        dispatch(getPopularVideos())
        
    }, [dispatch])

    const { videos } = useSelector(state=>state.homeVideos);

    return (
        <Container>
            <CategoriesBar/>
            
            <Row>
                {
                videos.map(video => (
                    <Col lg={3} md={4} key={video.id}>
                        <Video video={video}/>
                    </Col>
                ))}
                
            </Row>

        </Container>
    )
}

export default HomeScreens
