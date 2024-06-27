'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Facebook, Instagram, LinkedIn, WhatsApp, YouTube } from '@mui/icons-material';
import { FloatingWhatsApp } from "react-floating-whatsapp";

function Copyright() {
  return (
    <Typography  color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https//:expeditionasiaa.com" prefetch={true}>
        expeditionasiaa.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  const title= "Expedition Asia Trek and Tours";
  const description = ""

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography  align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <div className='footer-copyright'>
          <div className='copyright__note'>
            <Copyright />
            <Link href="/privacypolicy" className='privacy-policy' prefetch={true}>
              Privacy Policy
            </Link>
          </div>
          <div className='social__icons'>
            <Link href="https://www.facebook.com/expeditionasiapk/" prefetch={true}>
              <Facebook />
            </Link>
            <Link href="https://wa.me/+923004708813" prefetch={true}>
              <WhatsApp />
            </Link>
            <Link href="https://www.instagram.com/expeditionasiatrek" prefetch={true}>
              <Instagram />
            </Link>
            <Link href="https://www.linkedin.com/company/expeditionasia/" prefetch={true}>
              <LinkedIn />
            </Link>
          </div>
        </div>
<FloatingWhatsApp phoneNumber="+923004708813" accountName="Expedition Asia" chatMessage="Hello there Welcome To Expedition Asia! 🤝 \nHow can we help?" />
      </Container>
    </Box>
  );
}


export default Footer;