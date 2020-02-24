import React, {useState} from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import setTimeAxios from '../apis/setTimeAxios';

const SetWaterTime = () => {
    const [time, setTime] = useState(0);

    const setTimeValue = (event) => {
        console.log(event.target.value.length);
        const newTime = event.target.value;
        if(newTime.length > 0){
            setTime(event.target.value);
        }
    }

    const setIrrigation = async () => {
        console.log(time);
        await setTimeAxios.post('', {time})
            .then((response) => {
                    alert(response.data.message)
            })
            .catch(()=>[
                console.log("error set time")
            ])
    }


    return(
        <div className="w-100">
            <label htmlFor="basic-url" className="mt-3">How much do you want to set time?</label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon3">
                            Irrigation time 
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        id="basic-url" 
                        aria-describedby="basic-addon3" 
                        onChange = {setTimeValue}
                    />
                    <InputGroup.Append>
                        <InputGroup.Text>second</InputGroup.Text>
                    </InputGroup.Append>
                    <InputGroup.Append>
                        <Button 
                            variant="outline-secondary"
                            onClick={setIrrigation}
                        >
                            Set
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
        </div>
    )
}

export default SetWaterTime;