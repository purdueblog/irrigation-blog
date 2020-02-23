import React, {useState} from 'react'
import {InputGroup, FormControl, Button, Card, Image, Container, Row, Col} from 'react-bootstrap'

const GetRequiredWater = () => {
    const [water, setWater] = useState(0);
    const [mmWater, setMmWater] = useState(0);
    const [inchWater, setInchWater] = useState(0);

    const setWaterValue = (event) => {
        console.log(event.target.value);
        setWater(parseInt(event.target.value));
    }

    const calculateWaterAmount = () => {
        const newMmWater = -0.000025250 * Math.pow(water, 3) + 0.003195485 * Math.pow(water, 2) + 0.000200062 * water + 1.143255449;
        const newInchWater = -0.00000073854 * Math.pow(water, 3) + 0.00007835096 * Math.pow(water, 2) + 0.00223991013 * water + 0.03404229081;
        setMmWater(Math.round(newMmWater * 100) / 100);
        setInchWater(Math.round(newInchWater * 100) / 100);
    }

    return(
        <Container>
            <Row>
                <Col xs={12} md={12}>
                    <Image src="images/growth.png" fluid className="w-100" />
                </Col>
            </Row>
            <label htmlFor="basic-url" className="mt-3">Water requirements according to growth</label>
            <div className="row">
                <div className="col-6">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3">
                                Age of the plant
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            id="basic-url" 
                            aria-describedby="basic-addon3" 
                            onChange = {setWaterValue}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text>day</InputGroup.Text>
                        </InputGroup.Append>
                        <InputGroup.Append>
                            <Button 
                                variant="outline-secondary"
                                onClick={calculateWaterAmount}
                            >
                                Calculate
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="col">
                    <Card className="mb-3">
                        <Card.Header>Result</Card.Header>
                        <Card.Body>
                            <Card.Title>Amount of water per day</Card.Title>
                            <Card.Text>
                                <div>
                                    <b>{mmWater} mm</b> is required 
                                </div>
                                <div>
                                    <b>{inchWater} inch</b> is required 
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row justify-content-md-center">
            </div>
        </Container>
    )
}

export default GetRequiredWater