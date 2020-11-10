import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Hero = (props) => {
    return ( 
        <Container className='hero' fluid>
          <Row className='title-text'>
            <h2>INTRODUCING</h2>
          </Row>
          <Row className='title-text-lower'>
            <h2 className='header-lower-text'>The First 100%</h2>
          </Row>
          <Row className='title-text-lower'>
            <h2 className='header-lower-text'>Biodegradable</h2>
          </Row>
          <Row className='title-text-lower'>
            <h2 className='header-lower-text'>Bamboo MaxiPad</h2>
          </Row>
          <Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </Row>
          <Row className='tag-holder'>
            <h4 className='tag-line'><em>
              The most eco friendly menstrual care in the world is here.
            </em></h4>
          </Row>
          <Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </Row>
          <Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </Row>
          <Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </Row>
          <Row className='tag-holder'>
            <Button color='danger' className='hero-button'>
              SHOP NOW
            </Button>
          </Row>
          <Row>
            <br/>
            <br/>
            <br/>
          </Row>
      </Container>
     );
}
 
export default Hero;