import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const SecondScreen = (props) => {
    return ( 
        <Container fluid className='second-screen'>
            <Container className='second-row-holder'>
            <Row className='second-title-row'>
                <h2 className='second-title'>We found that</h2>
            </Row>
            <Row className='second-title-row'>
                <h2 className='second-title'>the best care could</h2>
            </Row>
            <Row className='second-title-row'>
                <h2 className='second-title'>also be the most</h2>
            </Row>
            <Row className='second-title-row'>
                <h2 className='second-title'>sustainable</h2>
            </Row>
            </Container>
            <Row className='second-lower-row'>
                <em className='subtle'>
                    We started by using organic bamboo because it grows faster 
                    and requires les water to produce than cotton or rayon fibers. It's also softer and 15% more absorbent.
                </em>
            </Row>
        </Container>
     );
}
 
export default SecondScreen;