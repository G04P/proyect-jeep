import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { Gallery } from "../Gallery/Gallery";
import { VehicleModal } from "../Modals/VehicleModal";
import { getProducts } from "../../productMock";

export const Compass = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsModalOpen(false);

    const allProducts = getProducts();
    setProducts(allProducts);
  }, []); 
  return (
    <>
      <main>
        <Box 
          component="section"
          sx={{
            backgroundColor: "#2D2D2D",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid 
                item 
                xs={12} 
                md={6} 
                sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 3 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(255, 255, 255, 0.25)",
                  }}
                >
                  COMPASS
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "#E0E0E0",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum debitis
                  veritatis qui non suscipit dolores ex asperiores ea optios quas.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "999px",
                    borderColor: "#FFD700",
                    color: "#FFD700",
                    textTransform: "none",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    ":hover": {
                      backgroundColor: "#2D2D2D",
                      color: "#FFF",
                      borderColor: "#FFD700",
                    },
                  }}
                  onClick={() => setIsModalOpen(true)} 
                >
                  Know More
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="https://carcuts.s3.amazonaws.com/2022/jeep/compass/limited.png"
                  alt="Jeep Compass"
                  sx={{ width: "100%", borderRadius: 1 }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Gallery />
      </main>
      {isModalOpen && (
        <VehicleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          products={products}
        />
      )}
    </>
  );
};
