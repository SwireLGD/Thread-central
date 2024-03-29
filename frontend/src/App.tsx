import { Container, Typography } from "@mui/material";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import { Route, Routes } from "react-router-dom";
import Threads from "./features/threads/Threads";

const App = () => {

  return (
    <>
      <header>
        <AppToolbar />
      </header>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Threads />} />
            <Route path="*" element={<Typography variant="h2">Not Found</Typography>} />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;