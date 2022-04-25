import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from '../components/Button';
import Layout from '../components/Layout';
import RecipeList from '../components/RecipeList/RecipeList';
import homeImage from '../images/dish.png';
import leafImage from '../images/leaf.png';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Layout >
                <Row>
                    <Col lg={3} xl={3} md={3} className="left-rail">
                        <div className="typography">
                            <h1 className="typography-bold">
                                You deserve better
                            </h1>
                            <span className="typography-light">
                                Consider this a taste intervention.
                            </span>
                            <Button className="learn-more" name="LEARN MORE" />
                        </div>

                    </Col>
                    <Col lg={9} xl={9} md={9} className="right-rail px-0" >
                        <img src={homeImage} alt="home" className="w-100 home-image" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xl={6} md={6} className="left-rail">
                        <img src={leafImage} alt="leaf" className="w-100 leaf-image" />
                    </Col>
                    <Col lg={6} xl={6} md={6} className="right-rail-second">
                        <div className='description'>
                            <h2>We make it easy for you to cook delicious dinners</h2>
                            <span>Simply choose your recipes from a weekly menu and we’ll deliver freshly picked vegetables, pre-portioned ingredients and step-by-step recipes direct to your door ready for you to cook.</span>
                            <br></br>
                            <Button className="learn-more" name="SHOP NOW"></Button>

                        </div>

                    </Col>
                </Row>
                <RecipeList />
            </Layout>
        </div>
    )
}
export default Home;
