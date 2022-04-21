import { Box } from "@mui/system";
import { commerce } from "./lib/commerce";
import { Navbar, Products } from "./components";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box>
      <Navbar />
      <Container
        sx={{
          margin: "0 auto",
        }}
      >
        <Products products={products} />
      </Container>
    </Box>
  );
}

export default App;
