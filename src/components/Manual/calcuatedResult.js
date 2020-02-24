import React, {useState, useEffect} from 'react';


const CalculatedResult = ({soilMoisture, mad, suppliedWater}) => {
    const [requiredTime, setRequiredTime] = useState(0);

    useEffect(() => {
        console.log("soilMoisture : ", soilMoisture)
        setTimeUsingSoilMoisture();
    }, [soilMoisture])

    const roundValue = (value) => {
        return parseInt(value*100)/100
    }

    const setTimeUsingSoilMoisture = () =>{
        const slope = 0.149732;
        const goalSoilMoisture = 34;
        console.log("moisture when calaute : ", goalSoilMoisture, soilMoisture)
        const differSoilMoisture = goalSoilMoisture - soilMoisture;
        const result =  ( differSoilMoisture ) / slope ;
        console.log("set time : ", result)
        setRequiredTime(result);
        return roundValue(result);
    }

    const getAmountUsingTime = () => {
        const result = requiredTime * 1.1;
        const numberOfSpray = 4; 
        return roundValue(result*numberOfSpray)     
    }

    const getRequiredState = () => {
        const limitMad = 50;
        if(mad > limitMad){
            return(
                <div>
                    <h3 className="text-danger">Irrigation Required</h3>
                </div>
            )
        }else{
            return(
                <div>
                    <h3 className="text-success">Irrigation Not Required</h3>
                </div>
            )
        }
        
    }

    return(
        <div>
            <div>
                <h5>Required irrigation time : <b>{roundValue(requiredTime)} sec</b></h5> 
            </div>
            <div>
                <h5>Required amount of water : <b>{getAmountUsingTime()} mm</b></h5> 
            </div>
            <div className="mt-3">
                {getRequiredState()}
            </div>
        </div>
    )
}

export default CalculatedResult;