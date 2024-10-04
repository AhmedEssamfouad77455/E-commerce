import { Box, Container, ListItem, Stack, Typography, useTheme } from "@mui/material"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { DarkModeOutlined, ExpandMore } from "@mui/icons-material";
import { LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from "react";
export default function Header1({toggleTheme}) {

    const theme = useTheme()
    // start  Function menu Select
    const options = [
       "AR" ,
        "EN",
       
      ];
      
        const [anchorEl, setAnchorEl] = useState(null);
        const [selectedIndex, setSelectedIndex] = useState(1);
        const open = Boolean(anchorEl);
        const handleClickListItem = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleMenuItemClick = (event, index) => {
          setSelectedIndex(index);
          setAnchorEl(null);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };
    // end Function menu Select

    
  return (
    <Box
    sx={{
        bgcolor:"#2B3445",
        color:"#fff",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:" 10px 20px"

    }}
    >

    
    <Stack direction={"row"} alignItems={"center"}>

    <Typography variant="body2" sx={{
        mr:2 , 
        bgcolor:"#D23f57",
        fontSize:"10px" , 
        color:"#fff",
        fontWeight:"bold",
        borderRadius:"20px",
        padding:"10px 20px "

    }}>
    Hot

    </Typography>
    <Typography variant="body2" sx={{
        color:"#fff",
        fontWeight:"333",
        fontSize:"12px",


    }}>Free Express Shipping </Typography>
    </Stack>
    <Stack direction={"row"} gap={3} >

     
    { theme.palette.mode =="light" ? <LightModeOutlined  fontSize="small" onClick={toggleTheme}/> : <DarkModeOutlined  fontSize="small" onClick={toggleTheme} /> } 
   
   {/* start  Menu Select */}
   <List
  component="nav"
  aria-label="Device settings"
  sx={{ py: 0, margin: "0px" , p:0 }}  
>
  <ListItem
    id="lock-button"
    aria-haspopup="listbox"
    aria-controls="lock-menu"
    sx={{ padding: "0px"  ,"&:hover":{cursor:"pointer"}}}  
    aria-expanded={open ? "true" : undefined}
    onClick={handleClickListItem}
  >
    <ListItemText
      sx={{ padding: "0px", margin: "0px", ".MuiTypography-root": { fontSize: "13px", color: "inherit" } }}  // padding للـ ListItemText
      secondary={options[selectedIndex]}
    />
    <ExpandMore  fontSize="small"/>
  </ListItem>
</List>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
      sx={{
        padding:"3px 10px" ,
        fontSize:"13px" , 
       
      }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
   {/* End Menu Select */}
    <TwitterIcon fontSize="small"/>
    <FacebookIcon fontSize="small"/>
    <InstagramIcon fontSize="small"/>

    </Stack>
      
    </Box>
  )
}
