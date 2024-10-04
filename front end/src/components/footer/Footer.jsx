import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
    <Box sx={{ 
        bgcolor:"#2b3445" , 
        py:1.3, 
         borderTopLeftRadius:8 , 
         borderTopRightRadius:8 , 

     }}>
      <Typography variant="h5"
      display={"flex"}
      justifyContent={"center"}
      sx={{fontSize:18}}

      
       color={"HighlightText"}>
        
        Desinged and  developed by 
        <Typography
        sx={{
            mx:0.5 , 
            fontSize:'18px' , 
            fontWeight:'bold' , 
            cursor:'pointer' ,
            background:"transparent",
            color:"#D23f57",
            "&:hover":{color:"#fff"} ,
            textDecoration:'underline' ,
            textDecorationColor:"#fff" ,
            textDecorationLine:"none"

        }}>
         Ahmed Essam

        </Typography>
        @2024
      </Typography>
    </Box>
      
    </>
  )
}
