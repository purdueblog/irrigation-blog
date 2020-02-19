import React, {useState} from 'react'
import {InputGroup, FormControl, Button, Card} from 'react-bootstrap'

const GetRequiredWater = () => {
    const [mmWater, setMmWater] = useState(0);
    const [inchWater, setInchWater] = useState(0);
    return(
        <div className="container">
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
                            on
                        />
                        <InputGroup.Append>
                            <InputGroup.Text>day</InputGroup.Text>
                        </InputGroup.Append>
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Calculate</Button>
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
        </div>
    )
}

export default GetRequiredWater