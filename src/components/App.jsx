import { AppRoutes } from "../routes";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
const theme = {};
import "../styles/globals.css";
// import theme from "../utils/theme";
 
export function App() {
  return (
    <BrowserRouter>
       <ThemeProvider theme={theme}> 
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider> 
    </BrowserRouter>
  );
}
