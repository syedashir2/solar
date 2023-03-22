import { Grid, Typography } from "@mui/material";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";
import { Box } from "@mui/system";
import React from "react";
import './index.css'


const navBarItems = ["Start", "Panels", "Racking", "Microinverters", "Finish", "quote"]

const QuoteTools = () => {
    return (
        <>
            <Grid item container xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Grid item container xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '20px' }}>
                    <Typography xs={8} className='solar_design'>
                        <b> Solar Design & Quote Tool</b>
                    </Typography>
                    <Typography xs={8} className='solar_estimate' >
                        Get a fast solar estimate
                    </Typography>
                </Grid>
                <Grid item container xs={8} className="navbar" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '20px' }}>

                    {navBarItems.map((item, index) => {
                        return (
                            <>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
                                        <Box className='navbarCircle'>{index + 1}</Box>
                                        <span>
                                            {item}
                                        </span>
                                    </div>
                                    {index != 5 ?
                                        < div >
                                            <hr className="upline" />
                                            <hr className="downline" />
                                        </div>
                                        :
                                        null
                                    }
                                </Box>
                            </>
                        )
                    })}

                    {/* <Box xs={2}>panels</Box>
                    <Box xs={2}>racking</Box>
                    <Box xs={2}>microinverters</Box>
                    <Box xs={2}>finish</Box>
                    <Box xs={2}>quote</Box> */}
                </Grid>

            </Grid>
        </>
    )
}


export default QuoteTools;