import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Bottom = (props) => {
    return ( 
        <Container fluid className='bottom'>
            <Row className='bottom-title'>
                <h2 className='bottom-title-text'>
                    New to Public Goods?
                </h2>
            </Row>
            <Row className='bottom-bottom-text'>
                <em className='last'>
                We're committed to making healthier, better choices easy and affordable for all.
                Good for you, eco-friendly, and beautifully designed home essentials, all in one place
                and at ultra low prices. 
                </em>
            </Row>
            <Row>
                <Container fluid >
                    <Row className='last-photo'>
                        <h2 className='last'>
                            As seen in
                        </h2>
                    </Row>
                  <img src='https://uca5b9fead53e21ec4e2d8561777.previews.dropboxusercontent.com/p/thumb/AA85g8qql5-_LlC0qKBDdS2F45kdrAAqVtPZAF8N6wUGbC6v82W8IvZ0GRLhl2eDuCar-_qrfrLsXMZ0zAHXdnqBOemerTOU-uhfdnvG-vMaraCt4IwCdi0M4kglLyFoxzhe9qMBSJqkDO67H-CZnl1K9LHxco7y3ZePnQSaR7Qrzp0XiQ3KAnVthd0QbjEpMFAuyY_bhbkXo0JtEBcbwypUGRgfgvaMrUHUTeMzwl9PatEtme93q7j_1SdjBZIB5K29K_9Cf_E0MFxiMviScqsGIowcWlQsLJ2g0OygYV3ts7pHzgmkSqlUz4xpFsabUod3tSkS3qIAC9U8OKbsvAGaoprjlPjpxqrGxYgWwM8vnQ/p.png?fv_content=true&size_mode=5'
                  className='last-img' /> 
                </Container>
            </Row>
        </Container>
     );
}
 
export default Bottom;