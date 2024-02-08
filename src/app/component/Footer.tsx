import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography  color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https:expeditionasia.com.pk">
        expeditionasia.com.pk
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
        <Copyright />
      </Container>
    </Box>
  );
}

// Footer.propTypes = {
//   description: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Footer;