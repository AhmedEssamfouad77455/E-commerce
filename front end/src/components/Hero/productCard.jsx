import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import Cards from "./Cards";
export default function ProductCard() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Box>
          <Typography variant="h5">Selected Products</Typography>
          <Typography variant="subtitle1" color="#777">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          sx={{
            gap: "20px",
            
            // إزالة الحدود
          }}
        >
          <Button
            onClick={() => handleCategoryChange("all")}
            sx={{
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "capitalize",
              border: "2px solid",
              borderColor: selectedCategory === "all" ? "#432724" : "#ccc", // تغيير لون الحدود حسب الحالة
              backgroundColor:
                selectedCategory === "all" && "#432724" ,
              color: selectedCategory === "all" && "red" ,
             
            }}
          >
            All Products
          </Button>

          <Button
            onClick={() => handleCategoryChange("men")}
            sx={{
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "capitalize",
              border: "2px solid",
              borderColor: selectedCategory === "men" && "#432724" , // تغيير لون الحدود حسب الحالة
              backgroundColor:
                selectedCategory === "men" && "#432724",
              color: selectedCategory === "men" && "red" ,
            
            }}
          >
            Men Category
          </Button>

          <Button
            onClick={() => handleCategoryChange("woman")}
            sx={{
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "capitalize",
              border: "2px solid",
              borderColor: selectedCategory === "woman" && "#432724" , // تغيير لون الحدود حسب الحالة
              backgroundColor:
                selectedCategory === "woman" && "#432724" ,
              color: selectedCategory === "woman" && "red" ,
             
            }}
          >
            Woman Category
          </Button>
        </Stack>
      </Stack>
      <Cards categoryData={selectedCategory} />
    </>
  );
}
