import { Container, Typography, Box } from '@material-ui/core';
import './App.css';
import HomePage from './components/HomePage';

const styles = {
  padding: "1em",
  textAlign: "center"
}

function App() {
  return (
    <Container component="main" maxWidth="sm" style={{height: '100vh'}}>
    <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      style={{height: '100%'}}
    >
      <Typography 
        component="h1" 
        variant="h3"
        style={styles}
        >
        Welcome to the Pokemon Playground
      </Typography>
      <HomePage />
    </Box>
      
    </Container>
  );
}

export default App;
