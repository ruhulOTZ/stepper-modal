import { Box, Container } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        height: "100vh",
      }}
    >
      <Router>
        <Header />

        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Routes>
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </Container>

        <Footer />
      </Router>
    </Box>
  );
}

export default App;
