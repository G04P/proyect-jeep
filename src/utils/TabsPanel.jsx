import React, { useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button, Grid } from "@mui/material";

export const TabsPanel = ({ value, index, model }) => {
  const [selectedColor, setSelectedColor] = useState(model.colors[0]);
  const [hoveredColor, setHoveredColor] = useState(null); 
  const [activeTab, setActiveTab] = useState("FEATURES"); 

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3, display: "flex", justifyContent: "space-around" }}>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Typography variant="h5" component="div" align="center" sx={{ fontWeight: 800 }}>
              {model.subName}
            </Typography>
            <Typography align="center" sx={{ fontWeight: 800 }}>
              $US {model.price}
            </Typography>

            <Box display="flex" justifyContent="center" gap={2}>
              <Button
                variant={activeTab === "FEATURES" ? "contained" : "outlined"}
                onClick={() => handleTabChange("FEATURES")}
                sx={{
                  backgroundColor: activeTab === "FEATURES" ? "black" : "transparent",
                  color: activeTab === "FEATURES" ? "white" : "black",
                  borderColor: "black",
                  "&:hover": {
                    backgroundColor: activeTab === "FEATURES" ? "black" : "rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                DESTACADOS
              </Button>
              <Button
                variant={activeTab === "COLORS" ? "contained" : "outlined"}
                onClick={() => handleTabChange("COLORS")}
                sx={{
                  backgroundColor: activeTab === "COLORS" ? "black" : "transparent",
                  color: activeTab === "COLORS" ? "white" : "black",
                  borderColor: "black",
                  "&:hover": {
                    backgroundColor: activeTab === "COLORS" ? "black" : "rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                COLORES
              </Button>
            </Box>

            <Card
              sx={{
                backgroundColor: "#e5e7eb",
                textAlign: "center",
                mt: 2,
              }}
            >
              <CardContent>
                {activeTab === "FEATURES" && (
                  <>
                    <Typography
                      variant="h6"
                      component="div"
                      align="center"
                      sx={{ fontWeight: 800 }}
                    >
                      DESTACADOS
                    </Typography>
                    <ul
                      style={{
                        paddingLeft: "20px",
                        margin: "1.5rem",
                        width: "18rem",
                        listStyleType: "disc",
                      }}
                    >
                      {model.feature.map((feature, index) => (
                        <li key={index} style={{ marginBottom: "8px" }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: "serif",
                              fontSize: "1rem",
                              fontWeight: 800,
                            }}
                            component="span"
                          >
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {activeTab === "COLORS" && (
                  <Box sx={{ margin: "1.5rem", width: "18rem" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      COLORES DISPONIBLES
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600, mt: 1, mb: 2 }}>
                      {hoveredColor ? hoveredColor.name : selectedColor.name}
                    </Typography>
                    <Grid container justifyContent="center" spacing={4} mt={2}>
                      {model.colors.map((color, index) => (
                        <Grid item key={index}>
                          <Box
                            onMouseEnter={() => setHoveredColor(color)}
                            onMouseLeave={() => setHoveredColor(null)}
                            onClick={() => handleColorChange(color)}
                            sx={{
                              width: 30,
                              height: 30,
                              borderRadius: "50%",
                              backgroundColor: color.hex,
                              cursor: "pointer",
                              border:
                                selectedColor.name === color.name
                                  ? "2px solid black"
                                  : "2px solid transparent",
                              transition: "0.3s",
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Box>

          <Card sx={{ maxWidth: 720, boxShadow: 3, textAlign: "center" }}>
            <CardMedia
              component="img"
              height="300"
              image={selectedColor.img}
              alt={model.subName}
            />
          </Card>
        </Box>
      )}
    </div>
  );
};
