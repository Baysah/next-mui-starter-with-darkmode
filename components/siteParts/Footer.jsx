import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box>
      <Typography variant="body2" color="text" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href="/">
          Your Website
        </MuiLink>{' '}
        2000 - {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};

export default Footer;
