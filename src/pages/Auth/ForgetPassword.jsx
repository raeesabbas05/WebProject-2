import * as React from "react";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link as NavLink } from "react-router-dom";

import Layout from "./Layout";

export default function ForgetPasswordPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Layout label="Forget Password" onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Forget Password
      </Button>
      <Link display="flex" justifyContent="center" component={NavLink} to="/signin" variant="body2">
        {"Back to Sign In"}
      </Link>
    </Layout>
  );
}
