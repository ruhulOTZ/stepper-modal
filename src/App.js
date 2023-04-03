import { Box } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddUser from "./components/page/AddUser";
import Home from "./components/page/Home";

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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="*" element={<AddUser />} />
        </Routes>

        <Footer />
      </Router>
    </Box>
  );
}

export default App;
