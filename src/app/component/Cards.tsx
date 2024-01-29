import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid } from '@mui/material';
import { useInView } from "react-intersection-observer";
import styles from "../styles/custom.module.css";
import { useAnimation, motion } from "framer-motion";

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import { IconButton } from '@mui/joy';
import Typography from '@mui/joy/Typography';


const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 }
};



export default function MediaCard() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const cardsData = [
        {
            title: "Skardu",
            description: "This is skardu , GB",
            src : "/images/spring.jpg",
            price: "$3000",
            id: "21"
        },
        {
            title: "Hunza",
            description: "This is hunza",
            src: "/images/Rakaposhi.jpg",
            price:"$2400",
            id:"23"
        },
        {
            title: "K2",
            description: "K2 Basecamp trekking",
            src: "/images/DSC_3495.JPG",
            price: "$4500",
            id: "34"
        }
    ]

   

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: "80px" }} >
                <Box className={styles.textCenter} sx={{ display:'flex', justifyContent:"center", mb:"50px"  }}>
                    <h1 variant='h1' >Our Popular Packages</h1>
                </Box>

                <Grid className={styles.cardsContainer} container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, sm: 8, md: 12 }} direction="row"
                    justifyContent="center"
                    alignItems="center" >

                        {cardsData.map((data) => (
                            <Grid item xs={2} sm={4} md={4}
                                justifyContent="center"
                                alignItems="center"
                                key={data.id}
                            >

                                <Card variant="outlined" sx={{ width: 320 }} key={data.id} >
                                    <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                                       {data.title}
                                    </Typography>
                                    <Typography level="body2">{data.description}</Typography>
                                    <IconButton
                                        aria-label="bookmark Bahamas Islands"
                                        variant="plain"
                                        color="neutral"
                                        size="sm"
                                        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                                    >
                                    </IconButton>
                                    <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                                        <img
                                            src={data.src}
                                            srcSet={data.src}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <Box sx={{ display: 'flex' }}>
                                        <div>
                                            <Typography level="body3">Total price:</Typography>
                                            <Typography fontSize="lg" fontWeight="lg">
                                                {data.price}
                                            </Typography>
                                        </div>
                                        <Button
                                            variant="solid"
                                            size="sm"
                                            color="primary"
                                            aria-label="Explore Bahamas Islands"
                                            sx={{ ml: 'auto', fontWeight: 600 }}
                                        >
                                            Explore
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>

                        ))}


                </Grid>
            </Container>
        
        </>
    );
}