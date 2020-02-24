import React, {useState, useEffect} from 'react';
import weatherAxios from '../apis/weatherAxios';


const RainfallText = () => {
    const [rainfall, setRainfall] = useState(0);

    const fetchRainfall = async() => {
        await weatherAxios.get()
            .then((response) => {
                const newRainfall = response.data.rainfall;
                setRainfall(newRainfall);
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
            Today rainfall is <b>{rainfall} in</b>
        </div>
    )
}

export default RainfallText;

