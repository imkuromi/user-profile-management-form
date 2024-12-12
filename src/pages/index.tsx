import Header from "./header";
import Form from "./form";

import { Box } from "@mui/material";

export default function Home() {
  return (
    
      <Box sx={{ bgcolor: "#f5f5f5", minHeighth: "100vh", minWidth: "400px" }}>
        <Header />
        <Form />
      </Box>
    
  );
}
