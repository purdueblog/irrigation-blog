import React, {useState, useEffect} from 'react';
import weatherAxios from '../apis/weatherAxios';


const RainfallText = ({suppliedWater, setSuppliedWater}) => {
    const [rainfall, setRainfall] = useState(0);

    const fetchRainfall = async() => {
        await weatherAxios.get()
            .then((response) => {
                const newRainfall = response.data.rainfall;
                // imch to mm
                setRainfall(parseInt(newRainfall * 25.4*100)/100);
                const newSuppliedWater = 812 * 2.54 * newRainfall; 
                setSuppliedWater(parseInt(newSuppliedWater*100)/100);
                console.log('rainfall fetch success!!', newRainfall);
            })
            .catch((error)=>{
                console.log(error)
                console.log('rainfall fetch error!!');
            })
    }

    useEffect(()=>{
        fetchRainfall();
    }, [])

    return(
        <div>
            <div>
                <h5>Today rainfall : <b>{rainfall} mm</b></h5>
            </div>
            <div>
                <h5>Water supplied to the farm by rain : <b>{suppliedWater} mm</b></h5>
            </div>
        </div>
    )
}

export default RainfallText;

