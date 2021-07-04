import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper} from '@material-ui/core'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { generateHighchartsData } from './helper'

const FoodConsumption = () => {
  const [dailyData, setdailyData] = useState([])
  
  useEffect(() => {
    fetch('/api/food-consumption.json')
      .then((res) => res.json())
      .then((res) => {
        setdailyData(res.data.foodConsumption.daily)
      })
  }, [])
  dailyData.sort(function(a,b){
    return a.day - b.day;
  });
  
  dailyData.sort((a, b) => a.animal.localeCompare(b.animal))

  
  
  return (
    <Grid spacing={3} container>
      
      <Grid xs={8} item>
        <Box component={Paper} height="100%">
          <Box p={3}>
            
            <HighchartsReact
              highcharts={Highcharts}
              options={generateHighchartsData(dailyData)}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FoodConsumption
