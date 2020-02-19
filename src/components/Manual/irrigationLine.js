import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import dates from '../apis/dates';
import irrigations from '../apis/irrigations';


const IrrigationLine = ({setTodayWater, setMonthWater}) => {
    
    // array of amout about irrigation
    const [waterData, setWaterData] = useState([0,0,0,0,0]);
    const [todayDate, setTodayDate] = useState({year : 1990, month: 1, day: 1});
    const [labels, setLabels] = useState(['', '', '', '', '']);

    // fetch date data
    const fectchDate = async () => {
        const response = await dates.get();
        console.log(response.data.datetime);
        const todayDates = response.data.datetime;

        const simpleDatas = todayDates.slice(0, 10).split('-');

        console.log(simpleDatas);


        const year_index = 0;
        const month_index = 1;
        const day_index = 2;

        // get today date
        const year = parseInt(simpleDatas[year_index]);
        const month = parseInt(simpleDatas[month_index]);
        const day = parseInt(simpleDatas[day_index]);
        setTodayDate({year, month, day});  
    }

    // fetch usage of water data
    const fetchIrrigation = async () => {
      console.log(...labels)
      await irrigations.get('', {
        params : {
          ...labels,
          year : todayDate.year 
        }
      }).then((response) => {
        // handle success
        console.log("response success")
        console.log(response.data.waters);

        // set amout of water today
        const todayIndex = 4;
        const todayWater = parseInt(response.data.waters[todayIndex]);
        setTodayWater(todayWater)

        // set total water week
        setWaterData(response.data.waters)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        console.log("try request")
      });
    }

    const getPrevMonthEndDay = () => {
        const now = new Date(todayDate.year, todayDate.month-1, 1);
        const prev = new Date(now-1);
        console.log(prev.getDate());
        return prev.getDate();
    }

    // update data
    const getUpdatedLable = (newLabels) => {
        const endDate = getPrevMonthEndDay();
        const count = 4;
        return (newLabels.map((None, index) => {
            const tempDate = todayDate.day - count + index;
            if(tempDate < 0){
                return newLabels[index] = (todayDate.month-1).toString() + '/' + (tempDate + endDate).toString();
            }else{
                return newLabels[index] = todayDate.month.toString() + '/' + tempDate.toString();
            }
        }))
    }

    useEffect(() => {
        fectchDate();
        setLabels(getUpdatedLable(labels));
        fetchIrrigation();
    }, [todayDate.year])

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
                data: waterData
            }
        ]
    }

    return (
      <div>
        <Line
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
            }
          }}
        />
      </div>
    );
}

export default IrrigationLine;