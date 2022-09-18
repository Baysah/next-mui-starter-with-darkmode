import Header from './Header';
import Footer from './Footer';
import {Container, Box} from '@mui/material'

function Layout({ children }) {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ minHeight: 'calc(100vh - 64px - 64px)', marginTop: '80px' }}>
        {children}
      </Box>
      <Footer />
    </Container>
  );
}

export default Layout;
