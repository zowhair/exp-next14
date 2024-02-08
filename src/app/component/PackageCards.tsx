'use client';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid } from '@mui/material';
import { useInView } from "react-intersection-observer";
import styles from "/public/styles/custom.module.css";
import { useAnimation, motion } from "framer-motion";
import { IconButtonClasses } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { Card, CardContent, CardCover } from '@mui/joy';
import Image from 'next/image';


const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 }
};



export default function PackageCards() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <Container maxWidth="lg" sx={{ mt: "120px", mb:"100px" }} >
            <Box className={styles.textCenter} sx={{ display:'flex', justifyContent:"center", mb:"50px"  }}>
                <Typography >
                    Our Family Packages
                </Typography>
                </Box>
            <Grid className={styles.cardsContainer} container spacing={{ xs: 5, md: 5 }} columns={{ xs: 1, sm: 8, md: 12 }} direction="row"
                justifyContent="center"
                alignItems="center" >
                <Grid item xs={2} sm={4} md={4}
                    justifyContent="center"
                    alignItems="center"
                >

                    <Card sx={{ minHeight: '280px', width: 320 }}>
                        <CardCover>
                            <Image
                                src="/images/k2.jpg"
                                alt="image"
                                width={500}
                                height={500}
                            />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                                K2
                            </Typography>
                            <Typography
                                // startDecorator={< />}
                                textColor="neutral.300"
                            >
                                K2 Shigar, GB
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>



                <Grid item xs={2} sm={4} md={4}
                    justifyContent="center"
                    alignItems="center"

                >

                    <Card sx={{ minHeight: '280px', width: 320 }}>
                        <CardCover>
                            {/* <Image
                                src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                                srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                                loading="lazy"
                                alt="imaeg"
                                width={500}
                                height={500}
                            /> */}
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                                Gashabrum
                            </Typography>
                            <Typography
                                // startDecorator={<IconButtonClasses />}
                                textColor="neutral.300"
                            >
                                GilgitBaltistan
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>



                <Grid item xs={2} sm={4} md={4}
                    justifyContent="center"
                    alignItems="center"

                >

                    <Card sx={{ minHeight: '280px', width: 320 }}>
                        <CardCover>
                            <video
                                autoPlay
                                loop
                                muted
                                poster="https://assets.codepen.io/6093409/river.jpg"
                            >
                                <source
                                    src="https://assets.codepen.io/6093409/river.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </CardCover>
                        <CardContent>
                            <Typography
                                fontWeight="lg"
                                textColor="#fff"
                                mt={{ xs: 12, sm: 18 }}
                            >
                                Karakoram Peaks
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}