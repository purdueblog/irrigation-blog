import React, {useState} from 'react'
import {HorizontalBar} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const SoilMoisture = () => {
    // array of amout about irrigation
    const [soilDatas, setWaterData] = useState([10,20]);
    const [labels, setLabels] = useState(['', '']);

    const state = {
        labels: labels,
   
        datasets: [
            {
                label: 'Amount of irrigation',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: soilDatas
            }
        ]
    }

    return(
        <Container>
            <Row>
                <Col lg={8} md={12}>
                        <HorizontalBar
                            data={state}
                            options={{
                                title:{
                                    display:true,
                                    text:'Total irrigation per day',
                                    fontSize:20
                                },
                                legend:{
                                    display:true,
                                    position:'right'
                                },
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            min: 0,
                                            max: 100,
                                            stepSize: 10
                                        }
                                    }]
                                }
                            }}
                        />
                </Col>
            </Row>
        </Container>
            
    )
}

export default SoilMoisture;