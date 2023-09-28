import React from 'react';
import NavBar from '../Components/NavBar';
import contactimg from '../Media/contactimg.png';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#2196F3"
    },
    secondary: {
      main: "#F50057"
    }
  }
});

function Contact() {
  const [post, setPost] = useState({
    name: "",
    email: "",
    Phone_Number: "",
    prof_type: "", 
    sess_type: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const sendData = () => {
    // TODO: Send the form data to your server
  };

  return (
    <div>
      <NavBar/>
      <section className='contact-img'>
        <img src={contactimg} alt='contact-page-img' className='contactimg' />
        <div className="form" style={{ marginRight: "200px", marginTop: "-50px" }}>
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" className="theme">
              <CssBaseline />
              <Box sx={{ marginTop: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
                <Typography component="h1" variant="h5" sx={{ color: "black", fontSize: 24, marginBottom: 3 }}>
                  BOOK YOUR SESSION
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Name"
                    label="Your Name"
                    name="name"
                    autoComplete="Name"
                    autoFocus
                    value={post.name}
                    onChange={handleInput}
                    sx={{ backgroundColor: "white", borderRadius: "10px", fontSize: 16, marginBottom: 2 }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={post.email}
                    onChange={handleInput}
                    sx={{ backgroundColor: "white", borderRadius: "10px", fontSize: 16, marginBottom: 2 }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Phone_Number"
                    label="Phone Number"
                    type="tel"
                    id="mobile"
                    autoComplete="current-mobile"
                    value={post.Phone_Number}
                    onChange={handleInput}
                    sx={{ backgroundColor: "white", borderRadius: "10px", fontSize: 16, marginBottom: 2 }}
                  />
                  <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel htmlFor="prof_type">Type of Professional</InputLabel>
                    <Select
                      id="prof_type"
                      name="prof_type"
                      value={post.prof_type}
                      label="Type of Professional"
                      onChange={handleInput}
                    >
                      <MenuItem value="Doctor">COUNCELLOR</MenuItem>
                      <MenuItem value="Engineer">HYPNOTHERAPIST</MenuItem>
                      <MenuItem value="Teacher">LIFE COACH</MenuItem>
                      
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel htmlFor="prof_type">Session Type</InputLabel>
                    <Select
                      id="sess_type"
                      name="sess_type"
                      value={post.prof_type}
                      label="Session Type"
                      onChange={handleInput}
                    >
                      <MenuItem value="Doctor">ONLINE</MenuItem>
                      <MenuItem value="Engineer">OFFLINE</MenuItem>
                      
                      
                    </Select>
                  </FormControl>
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={sendData}
                  >
                    SUBMIT
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </section>
    </div>
  );
}

export default Contact;
