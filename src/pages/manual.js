import React, { useState, useEffect } from 'react'

import PageBase from '../components/layout'
import Button from '../components/button'
import {InputGroup, FormControl} from 'react-bootstrap';
import NavBar from '../components/navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import IrrigationLine from '../components/Manual/irrigationLine';
import TotalIrrigation from '../components/Manual/totalIrrigation';
import GetRequiredWater from '../components/Manual/getRequiredWater';
import SoilMoisture from '../components/Manual/soilMoisture';

const Manual = () => {
  const [todayWater, setTodayWater] = useState(0);
  const [monthWater, setMonthWater] = useState(0);

  const content = (
    <div>
      <h1 id="buttons"></h1>
      <Button>Default</Button>
    </div>
  )

  return (
    <PageBase>
      <NavBar dark children={content.props.children} />
      <div className="container">
        <div class="row justify-content-md-center shadow">
          <div className="col-9">
            <IrrigationLine
              setTodayWater = {setTodayWater}
              setMonthWater = {setMonthWater}
            />
          </div>
          <div className="col">
            <TotalIrrigation
              todayWater = {todayWater}
              monthWater = {monthWater}
            />
          </div>
        </div>
       
        <div className="row shadow mt-5">
          <SoilMoisture/>
        </div>

        <div className="row mt-5 shadow ">
            <GetRequiredWater/>
        </div>
       
      </div>
    </PageBase>
  )
}

export default Manual
