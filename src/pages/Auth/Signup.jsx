// import Link from "@mui/material/Link";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import TextField from "@mui/material/TextField";
// import { Link as NavLink } from "react-router-dom";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { Box, Container } from "@mui/material";
// import Layout from "./Layout";
// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';


// export default function SignUpPage() {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/register', {
//           email: formData.get('email'),
//           password: formData.get('password'),
//       });
//       console.log('User registered:', response.data);
//       navigate("/signin");
//   } catch (error) {
//       console.error('Error registering user', error);
//   }
//   };

//   return (
//     <Box sx={{ display: 'flex', minHeight: '100vh' }}>
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
//           <Layout label={<span style={{ fontWeight: 'bold' }}>Sign Up</span>}
//             onSubmit={handleSubmit}
//             sx={{ width: '100%', alignItems: 'flex-start' }} // Ensure Layout content is left-aligned
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Name"
//               name="name"
//               autoComplete="name"
//               autoFocus
//               sx={{ '& .MuiOutlinedInput-root': { borderRadius: '13px' } }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
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
//                 }, }}>
//               Submit
//             </Button>
//             <Link display="flex" justifyContent="center" component={NavLink} to="/signin" variant="body2">
//               {"Already have an account? Sign In"}
//             </Link>
//           </Layout>
//         </Container>
//       </Box>
//       <Box
//         sx={{
//           flex: 1,
//           backgroundImage: 'url(./src/images/cover.png)', // Replace with the path to your image
//           backgroundSize: 'cover',
//           backgroundPosition: 'left',
//         }}
//       />
//     </Box>
//   );
// };




import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Link as NavLink } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Container } from "@mui/material";
import Layout from "./Layout";
import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function SignUpPage() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log("Submitting form with data:", Object.fromEntries(formData.entries()));
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', {
        email: formData.get('email'),
        password: formData.get('password'),
        firstname: formData.get('name'),
        lastname: ''
      });
      console.log('User registered:', response.data);
      navigate("/signin");
    } catch (error) {
      console.error('Error registering user:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
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
          <Layout label={<span style={{ fontWeight: 'bold' }}>Sign Up</span>} sx={{ width: '100%', alignItems: 'flex-start' }}>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '13px' } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, borderRadius: '13px', transition: 'background-color 0.3s, transform 0.3s',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  transform: 'scale(1.05)',
                }, }}>
                Submit
              </Button>
              <Link display="flex" justifyContent="center" component={NavLink} to="/signin" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </form>
          </Layout>
        </Container>
      </Box>
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url(./src/images/cover.png)', // Replace with the path to your image
          backgroundSize: 'cover',
          backgroundPosition: 'left',
        }}
      />
    </Box>
  );
};
