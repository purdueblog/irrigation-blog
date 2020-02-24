import React, { useState, useEffect } from 'react'

import PageBase from '../components/layout'
import Button from '../components/button'
import {InputGroup, FormControl, Container, Row, Col} from 'react-bootstrap';
import NavBar from '../components/navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import IrrigationLine from '../components/Manual/irrigationLine';
import TotalIrrigation from '../components/Manual/totalIrrigation';
import GetRequiredWater from '../components/Manual/getRequiredWater';
import SoilSection from '../components/Manual/soilSection';

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
      <Container>
        <Row className="justify-content-md-center shadow">
          <Col lg={8} md={12}>
            <IrrigationLine
              setTodayWater = {setTodayWater}
              setMonthWater = {setMonthWater}
            />
          </Col>
          <Col lg={4} md={12}>
            <TotalIrrigation
              todayWater = {todayWater}
              monthWater = {monthWater}
            />
          </Col>
        </Row>
       
        <div className="row shadow mt-5">
          <SoilSection/>
        </div>

        <div className="row mt-5 shadow ">
            <GetRequiredWater/>
        </div>
       
      </Container>
    </PageBase>
  )
}

export default Manual
