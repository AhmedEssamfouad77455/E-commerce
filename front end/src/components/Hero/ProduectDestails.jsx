import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function ProduectDestails({
  key,
  price,
  image,
  description,
  title,
}) {
  // console.log(import.meta.env.VITE_BASE_URL)
  // console.log(image[0].attributes.url)
 
  const [selectImage, setselectImage] = useState(0);
  const [alignment, setAlignment] = React.useState(0);
  const [devices, setDevices] = React.useState(() => ["0"]);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevices = (event, newDevices) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <Stack
      sx={{ flexDirection: { md: "row", xs: "column" }, overflow: "auto" }}
      alignItems={"center"}
      gap={2.5}
      key={key}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={"300px"}
          sx={{ display: "flex" }}
          src={`${import.meta.env.VITE_BASE_URL}${
            image[selectImage].attributes.url
          }`}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "start" },
          alignItems: { xs: "center", md: "start" },
          padding: { xs: "20px", md: "5px" },
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          ${title}
        </Typography>
        <Typography variant="h5" fontSize={"22px"} color="crimson" my={"0.4"}>
          ${price}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>

        <Stack direction="row" spacing={4} my={2}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
           sx={{
            ".Mui-selected":{
              opacity:"1" , 

            }
           }}
          >
            {image.map((img, index) => {
              return (
                <ToggleButton key={index} value={index} sx={{
                  width:"110px",
                  height:"110px",
                  mx:1 , 
                  p:"0" , 
                  opacity:"0.5"

                }}>
                  <img
                    onClick={() => setselectImage(index)}
                    width={"100%"}
                    height={"100%"}
                    style={{
                      
                      borderRadius: "5px",
                    }}
                    src={`http://localhost:1337${img.attributes.url}`}
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>

        <Button variant="contained">
          <AddShoppingCartOutlined sx={{ mr: 1 }} />

          <Typography sx={{ textTransform: "capitalize" }}>Buy Now</Typography>
        </Button>
      </Box>
    </Stack>
  );
}
