import React, {useState, useEffect} from 'react'
import {HorizontalBar} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import SoilText from './soilText';
import soilMoistureAxios from '../apis/soilMoistureAxios'
import SetWaterTime from './setWaterTime';

const soilGraph = () => {
    // array of amout about irrigation
    const [soilDatas, setWaterData] = useState([10,20]);
    const [labels, setLabels] = useState(['Soil Moisture', 'Mad']);
    const [mad, setMad] = useState(0);
    const [soilMoisture, setSoilMoisture] = useState(0);

    const fetchSoilMoisture = async () => {
        await soilMoistureAxios.get()
        .then((response) => {
            const getSoilMoisture = response.data.feeds[0].field3;
            setSoilMoisture(getSoilMoisture)
        })
    }

    const getMadBySoilMoisture = () => {
        if(soilMoisture > 16){
            const result = ((34-16) - soilMoisture) / 34 * 100;
            const roundedResult  = parseInt(result*100)/100
            return roundedResult;
        }
        return 100;
    }

    useEffect(() => {
        setMad(getMadBySoilMoisture());
    }, [soilMoisture])


    useEffect(() => {
        fetchSoilMoisture();
    }, [])

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
                <Col lg={4} md={12}>
                    <SoilText
                        mad={mad}
                        soilMoisture={soilMoisture}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12}>
                    <SetWaterTime/>
                </Col>
            </Row>
        </Container>
            
    )
}

export default soilGraph;