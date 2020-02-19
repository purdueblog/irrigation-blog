import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const totalIrrigation = ({todayWater, monthWater}) => {
    return(
        <div className="container">
            <div class="row"> 
                <Card className="text-center mt-5 shadow">
                    <Card.Body>
                        <Card.Title>Today</Card.Title>
                        <Card.Text>
                            You used <b>{todayWater} mm</b> of water today. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="row">
                <Card className="text-center mt-5 shadow">
                    <Card.Body>
                        <Card.Title>Month</Card.Title>
                        <Card.Text>
                            You used <b>{monthWater} L</b> of water month. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
        
    )
}

export default totalIrrigation