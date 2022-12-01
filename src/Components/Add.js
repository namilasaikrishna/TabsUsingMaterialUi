import React,{useState} from 'react'
import{Grid, TextField, Typography} from "@mui/material"
import './Add.css'

function Add() {

    const[first,setFirst] = useState()
    const[second,setSecond] = useState()
    const[third,setThird] = useState()

    const onFirstHandler = (e) =>{
        setFirst(e.target.value)
    }

    const onSecondHandler = (e) =>{
        setSecond(e.target.value)
    }

    const onThirdHandler = (e) =>{
        setThird(e.target.value)
    }

  return (
    <Grid container>
    <Grid item xs={4}>
    <item><TextField value={first} placeholder='first input' onChange={onFirstHandler}/></item>
    </Grid>
    <Grid item xs={4}>
    <item><TextField value={second} placeholder='second input' onChange={onSecondHandler}/></item>
    </Grid>
    <Grid item xs={4}>
    <item><TextField value={third} placeholder='Third input' onChange={onThirdHandler}/></item>
    </Grid>
    <Typography varient='p' className='add-color'>{parseInt(first)+parseInt(second)+parseInt(third)}</Typography>
    </Grid>
  )
}

export default Add
