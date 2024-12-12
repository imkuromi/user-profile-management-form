import Header from "./header";
import Form from "./form";

import { Box } from "@mui/material";

export default function Home() {
  return (
    
      <Box sx={{ bgcolor: "#f5f5f5",   width: '100vw',
        minHeight: '100vh'}}>
        <Header />
        <Form />
      </Box>
    
  );
}
