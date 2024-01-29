import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid } from '@mui/material';
import { useInView } from "react-intersection-observer";
import styles from "../styles/custom.module.css";
import { useAnimation, motion } from "framer-motion";

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import iconButtonClasses from '@mui/material';
import Typography from '@mui/joy/Typography';
import { Card, CardContent, CardCover } from '@mui/joy';





export default function Packages() {
    const title = "Popular Treks"
    const description="At Expedition Asia Trek & Tours  you'll find the treks that will make your life unforgettable. Find local trekking companies, enjoy local prices but pay securely and conveniently and get the lowest price guarantee. Need help? Ask our trekking experts."
    const packagesData = [
        {
            title:"K2",
            src: "/images/k2/DSC_3828.JPG",
            badge: "Best Seller",
            id:"1",
        },
        {
            title:"Trekking",
            badge:"Best Seller",
            src: "/images/k2/DSC_3563.JPG",
            id:"2"
        },
        {
            title:"Helicopter",
            badge: "Most Popular",
            src: "/images/heli/5.JPG",
            id:"3",
        }
        , {
            title:"Spring",
            badge: "Most Popular",
            src: "/images/spring.jpg",
            id:"5",
        },
        {
            title:"Summer",
            badge: "Special",
            src: "/images/summer.png",
            id:"6",
        }
    ]

    return (
        <Container maxWidth="lg" sx={{ mt: "120px", mb: "100px" }} >
            <Box className={styles.textCenter} sx={{ display: 'flex', justifyContent: "center", mb: "50px" }}>
                <h1 variant='h1' >Our Popular Packages</h1>
            </Box>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={3}>
                    <Box>
                        <div className={styles.leftSidePackageContainer}>
                            <Box className={styles.leftTitle}>
                                <Typography sx={{fontSize: "22px", fontWeight: "900"}}>
                                    {title}
                                </Typography>
                            </Box>
                            <Box className={styles.description}>
                                <Typography sx={{ color: "gray"}}>
                                    {description}
                                </Typography>
                            </Box>
                        </div>
                    </Box>

                        
                </Grid>
                <Grid xs={1} ></Grid>
                <Grid xs={8}>
                    <div>
                        <Grid container spacing={0} sx={{ flexGrow: 1 }} columns={{ xs: 1, sm: 8, md: 12 }} direction="row"
                justifyContent="center"
                alignItems="center" >
                    {
                        packagesData.map((data) => (
<Grid item xs={2} sm={3} md={3}>
                                <Box className={styles.rightImagesDiv} sx={{ position: "relative"}}>
                                    <Box >
                                        <img className="rightImagesImage" src={data.src} width="180px" height="130px"
                                        />

                                    </Box>
                                    <Box sx={{ position: "absolute", bottom :"20px", left: "-4px", backgroundColor: "#282e6a", color:"white", padding: "4px 15px", borderRadius: "5px"}}>
                                        <span className={styles.imageTag}  >{data.badge}</span>
                                    </Box>
                                    <Box sx={{ position: "absolute", bottom:"-40px"}} >
                                        <Typography>
                                            {data.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                        ))
                    }

                        </Grid>

                        

                    </div>
                    
                </Grid>
                
            </Grid>
        </Container>
    );
}