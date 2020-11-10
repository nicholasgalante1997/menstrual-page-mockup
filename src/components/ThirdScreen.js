import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const ThirdScreen = (props) => {
    return ( 
        <Container fluid className='third-screen'>
            <Col md={8} className='left'>
                <Row className='third-title-row'>
                    <h2 className='third-title'>
                        No plastics
                    </h2>
                </Row>
                <Row className='third-title-under'>
                <h2 className='third-title'>
                        or synthetics
                    </h2>
                </Row>
                <Row className='third-lower-text-row'>
                    <h4 className='third-lower-text-tag'>
                        We got rid of plastic and
                        synthetic components 
                        that can sit in landfills 
                        for up to 800 years. Even
                        our wrapper is 100% 
                        biodegradable.
                    </h4>
                </Row>
            </Col>
            <Col md={4} className='right'>
                
            </Col>
        </Container>
     );
}
 
export default ThirdScreen;