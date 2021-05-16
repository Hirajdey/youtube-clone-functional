import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoriesBar from '../components/categories-bar/CategoriesBar';
import Video from '../components/video/Video';
import Style from './HomeScreens.module.scss';

const HomeScreens = () => {
    return (
        <Container>
            <CategoriesBar/>
            
            <Row>
                {[...new Array(20)].map(() =>(
                    <Col lg={3} md={4}>
                        <Video/>
                    </Col>
                ))}
                
            </Row>

        </Container>
    )
}

export default HomeScreens
