---
title: "M.A.D Algorithm"
date: "2020-01-24"
tags: ["irrigation", "react", "js", "javascript","arduino","lora","smart","farm","purdue","indiana"]
image: './images/algor.png'
---

This week, We found **the MAD algorithm**.

 

M.A.D means <u>how much percentage soil can dry</u> while growing crops as Management Allowed Depletion. If the crop can grown at 70% of soil moisture, then MAD is 30%.



Using M.A.D, we can get irrigation set time depending on Flow rates of sprinkler(gph), Net irrigation (%), Gross Application(%).



<u>Net irrigation</u> means how much percent soil can intake water depending soil texture like clay, sand, loam...etc.

<u>Gross Application</u> means how much percent soil can intake water given by application.

We can get Gross Application(inches) : Net irrigation(inches) / Application efficiency(%, no unit) , where application efficiency means how much percent the application can make the soil wet,for example, furrow is 70~85% and drip or micro sprayer is 80~90%.

Therefore we use **micro sprayer** for application efficiency.



Then, We can get <u>Irrigation Set Time</u> (hr)

T=(GA x A)/(1.6 x Q)

where : T = Set Time, hours 

GA= Gross Application, inches

A = Area, square feet (plant spacing x row spacing)

Q = Flow Rate per plant, gallons per hour (Multiply emitter flow rate by number of emitters per plant) 

1.6 – Conversion Factor



