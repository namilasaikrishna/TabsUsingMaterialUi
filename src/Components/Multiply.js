import React,{useState} from 'react'
import {TextField,Grid} from "@mui/material"

function Multiply() {

    const[fmul,setFmul] = useState()
    const[smul,setSmul] = useState()


    const onFirstMultiply = (e) =>{
        setFmul(e.target.value)
    }

    const onSecondMultiply = (e) =>{
        setSmul(e.target.value)
    }

  return (
    <Grid container>
    <Grid item xs={3}>
    <item><TextField value={fmul} placeholder='first input' onChange={onFirstMultiply}/></item>
    </Grid>
    <Grid item xs={2}>
    <item>X</item>
    </Grid>
    <Grid item xs={3}>
    <item><TextField value={smul} placeholder='second input' onChange={onSecondMultiply}/></item>
    </Grid>
    <Grid item xs={2}>
    <item>=</item>
    </Grid>
    <Grid item xs={2}>
    <item>{parseInt(fmul)*parseInt(smul)}</item>
    </Grid>
    </Grid>
  )
}

export default Multiply
