import React,{useState} from 'react'
import {Grid,TextField,Typography} from "@mui/material"
import Button from '@mui/material/Button';

function Boggie() {

  const[iden,setIden] = useState('')
  const[status,setStatus] = useState(false)

  const onChangeHandler = (e) =>{
    setIden(e.target.value)
  }

  const onClickHandler = () =>{
    setStatus(true)
    setIden(iden)
  }

  const onRemoveHandler = () =>{
    setStatus(false)
  }

  return (
    <Grid container>
    <Grid item xs={4}>
    <item><TextField placeholder='Passenger Name' value={iden} onChange={onChangeHandler}/></item>
    </Grid>
    <Grid item xs={4}>
    <item><Button varient="contained" onClick={onClickHandler}>ON BOARDING</Button></item>
    </Grid>
    <Grid item xs={4}>
    <Button varient="outlined" onClick={onRemoveHandler}>OFF BOARDING</Button>
    </Grid>
    <Grid item xs={12}>
    <Typography varient='h1' style={{marginLeft:"100px", marginTop:"20px"}}>My Boggie</Typography>
    </Grid>
    {status ? <Grid item xs={12}>
    <Typography varient='h1' style={{marginLeft:"100px", marginTop:"20px"}}>{iden}</Typography>
    </Grid> : null}
    
    </Grid>
  )
}

export default Boggie
