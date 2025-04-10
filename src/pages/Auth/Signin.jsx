// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import TextField from "@mui/material/TextField";
// import { Link as NavLink, useNavigate } from "react-router-dom";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { Box, Container } from "@mui/material";
// import Layout from "./Layout";
// import React, { useState } from 'react';
// import axios from 'axios';


// export default function SignInPage() {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');

//   const navigate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
    
//     try {
//       const response = await axios.post('http://localhost:5000/login', { email: formData.get('email'),
//       password: formData.get('password')});
      
//       // alert('User signed in successfully, token: ' + response.data.access_token);
//   } catch (error) {
//       console.error('Error signing in user', error);
//   }
//     // const data = new FormData(event.currentTarget);
//     // console.log({
//     //   email: data.get("email"),
//     //   password: data.get("password"),
//     // });

//     navigate("/");
//   };

//   return (
//     <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//       <Box
//         sx={{
          
//           flex: 1,
//           backgroundImage: 'url(./src/images/cover.png)', // Replace with the path to your image
//           backgroundSize: 'cover',
//           backgroundPosition: 'left',

//         }}
//       />
//       <Box
//         sx={{
//           flex: 1,
//           backgroundColor: 'white',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//           <Layout label={<span style={{ fontWeight: 'bold' }}>Login</span>} 
//             onSubmit={handleSubmit}
//             sx={{ width: '100%', alignItems: 'flex-start' }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               sx={{ '& .MuiOutlinedInput-root': { borderRadius: '13px' } }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               sx={{ '& .MuiOutlinedInput-root': { borderRadius: '13px' } }}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, borderRadius: '13px',transition: 'background-color 0.3s, transform 0.3s',
//                 '&:hover': {
//                   backgroundColor: 'primary.dark',
//                   transform: 'scale(1.05)',
//                 },  }}>
//               Submit
//             </Button>
//             <Grid container sx={{ justifyContent: 'flex-end' }}>
//               <Grid item xs>
//                 <Link component={NavLink} to="/forgot-password" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link component={NavLink} to="/signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Layout>
//         </Container>
//       </Box>
//     </Box>
//   );
// };




import * as React from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Link as NavLink, useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Container } from "@mui/material";
import axios from "axios";
import Layout from "./Layout";

export default function SignInPage() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.status === "success") {
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/");
      } else {
        console.error("Login failed: ", response.data.message);
      }
    } catch (error) {
      console.error("An error occurred during login: ", error);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url(./src/images/cover.png)', // Replace with the path to your image
          backgroundSize: 'cover',
          backgroundPosition: 'left',
        }}
      />
      <Box
        sx={{
          flex: 1,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Layout label={<span style={{ fontWeight: 'bold' }}>Login</span>} 
            onSubmit={handleSubmit}
            sx={{ width: '100%', alignItems: 'flex-start' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '13px' } }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '13px' } }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, borderRadius: '13px',transition: 'background-color 0.3s, transform 0.3s',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  transform: 'scale(1.05)',
                },  }}>
              Submit
            </Button>
            <Grid container sx={{ justifyContent: 'flex-end' }}>
              <Grid item xs>
                <Link component={NavLink} to="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={NavLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Layout>
        </Container>
      </Box>
    </Box>
  );
}
