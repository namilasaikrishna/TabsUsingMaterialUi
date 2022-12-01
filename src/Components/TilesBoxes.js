import React,{useState} from 'react'
import {Grid,TextField,Typography} from "@mui/material"

function TilesBoxes() {
    
    const[wHall,setWhall] = useState()
    const[hHall,setHall] = useState()
    const[hTiles,setHtiles] = useState()
    const[wTiles,setwtiles] = useState()
    const[tBox,setTbox] = useState()
    const[cBox,setCbox] = useState()
    const[nFloor,setNfloor] = useState()
    const[nBuild,setNbuild] = useState()

    const onWidthHall = (e) =>{
        setWhall(e.target.value)
    }

    const onHeightHall = (e) =>{
        setHall(e.target.value)
    }

    const onHeightTiles = (e) =>{
        setHtiles(e.target.value)
    }

    const onWidthTiles = (e) =>{
        setwtiles(e.target.value)
    }

    const onTilesBox = (e) =>{
        setTbox(e.target.value)
    }

    const onCostBox = (e) =>{
        setCbox(e.target.value)
    }

    const onFloorHandler = (e) =>{
        setNfloor(e.target.value)
    }

    const onBuildingHandler = (e) =>{
        setNbuild(e.target.value)
    }

  return (
    <Grid container spacing={3}>
    <Grid item xs={2}>
    <item><TextField value={wHall} placeholder='Width of Hall' onChange={onWidthHall}/></item>
    </Grid>
    <Grid item xs={2}>
    <item><TextField value={hHall} placeholder='Height of Hall' onChange={onHeightHall}/></item>
    </Grid>
    <Grid item xs={2}>
    <item><TextField value={hTiles} placeholder='Tiles of Height' onChange={onHeightTiles}/></item>
    </Grid>
    <Grid item xs={2}>
    <item><TextField value={wTiles} placeholder='Tiles of Width' onChange={onWidthTiles}/></item>
    </Grid>
    <Grid item xs={2}>
    <item><TextField value={tBox} placeholder='Tiles in Box' onChange={onTilesBox}/></item>
    </Grid>
    <Grid item xs={2}>
    <item><TextField value={cBox} placeholder='cost of Boxes' onChange={onCostBox}/></item>
    </Grid>
    <Grid item xs={2}>
    <item><TextField value={nFloor} placeholder='Number of floors' onChange={onFloorHandler}/></item>
    </Grid>
    <Grid item xs={2}>
    <item><TextField value={nBuild} placeholder='Number of Buildings' onChange={onBuildingHandler}/></item>
    </Grid>
    <Typography varient='p' className='add-color'>{parseInt(hHall)*parseInt(wHall)*parseInt(hTiles)*parseInt(wTiles)*parseInt(tBox)*parseInt(cBox)*parseInt(nFloor)*parseInt(nBuild)}</Typography>
    </Grid>
  )
}

export default TilesBoxes
