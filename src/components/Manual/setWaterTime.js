import React from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';

const SetWaterTime = () => {
    return(
        <div>
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
            </div>
        </div>
    )
}

export default SetWaterTime;