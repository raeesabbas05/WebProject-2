import { Box, Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Header } from "../../components/Header";
import { MaxWidth } from "../../components/MaxWidth";
import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";


export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MaxWidth>
        <Wrapper>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                defaultValue="Raees Abbas"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue="raeesabbas@gmail.com"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => navigate("/")}
              >
                Save Profile
              </Button>
            </Box>
          </Container>
        </Wrapper>
      </MaxWidth>
    </>
  );
};


