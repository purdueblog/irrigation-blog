import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';

const SoilText = ({soilMoisture, mad}) => {

    return (
        <div>
            <div className="container">
            <div class="row"> 
                <Card className="text-center mt-5 shadow w-100">
                    <Card.Body>
                        <Card.Title>Currnet Soil Moisture</Card.Title>
                        <Card.Text>
                            <b>{soilMoisture} %</b> 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="row">
                <Card className="text-center mt-5 shadow w-100">
                    <Card.Body>
                        <Card.Title>Current MAD</Card.Title>
                        <Card.Text>
                            <b>{mad} %</b> 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div>
    )
}

export default SoilText;