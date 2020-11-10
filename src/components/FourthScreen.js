import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const FourthScreen = (props) => {
    return ( 
        <Container fluid className='fourth-screen'>
            <Row className='fourth-top'>
                <h2 className='fourth-title'>
                    Designed 
                </h2>
            </Row>
            <Row className='fourth-med'>
                <h2 className='fourth-title'>
                    for your body
                </h2>
            </Row>
            <Container className='one-liner-row'>
                <Row className='one-liner'>
                    <h4 className='one-liner-text'>
                        Feather light and ultra thin.
                    </h4>
                </Row>
                <Row className='one-liner'>
                    <h4 className='one-liner-text'>
                        Super soft for sensitive skin.
                    </h4>
                </Row>
                <Row className='one-liner'>
                    <h4 className='one-liner-text'>
                        Antimicrobial and hypoallergenic.
                    </h4>
                </Row>
                <Row className='one-liner'>
                    <h4 className='one-liner-text'>
                        No synthetic fibers or elemental chlorine.
                    </h4>
                </Row>
            </Container>
        </Container>
     );
}
 
export default FourthScreen;