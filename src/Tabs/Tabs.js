import React,{useState} from 'react'
import {Box,Tab,Typography} from "@mui/material"
import { TabPanel,TabContext,TabList } from '@mui/lab';
import Add from '../Components/Add';
import Multiply from '../Components/Multiply';
import TilesBoxes from '../Components/TilesBoxes';
import Boggie from '../Components/Boggie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tabs.css'


function Tabs() {

    const[value,setValue] = useState('1')

    const handleChange = (event:React.SyntheticEvent,newValue:string) =>{
        setValue(newValue)
    }

  return (
    <Box className='bg-color'>
    <Typography varient="h1">Home</Typography>
    <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList aria-label='Tab examples' onChange={handleChange}>
    <Tab label="ADD" value="1"/>
    <Tab label="MULTIPLY" value="2"/>
    <Tab label="TILES BOXES" value="3"/>
    <Tab label="BOGGIE" value="4"/>
    </TabList>
  </Box>
  <TabPanel value="1">
    <Add/>
  </TabPanel>
  <TabPanel value="2" >
    <Multiply/>
  </TabPanel>
  <TabPanel value="3">
  <TilesBoxes/>
  </TabPanel>
  <TabPanel value="4">
  <Boggie/>
</TabPanel>
    </TabContext>
    </Box>
    
  
      
  )
}

export default Tabs
