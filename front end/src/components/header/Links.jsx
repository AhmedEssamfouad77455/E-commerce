import {
  ExpandCircleDown,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Links({text}) {
  return (
    <>
      <Box
        sx={{
          "&:hover .show-List": {
            display: "block",
          },
          display: "flex",
          alignContent: "center",
          position: "relative",
        }}
      >
        <Typography variant="body1">{text}</Typography>
        <ExpandCircleDown />
        <Box
          className="show-List"
          sx={{
            display: "none",
            position: "absolute",
            top: "100%",
            minWidth: "170px",
            left: "50%",
            transform: "translate(-50%)",
            zIndex: 11111,
          }}
        >
          <Paper sx={{ mt: 2 }}>
            <nav
              aria-label="secondary mailbox folders"
              //  style={{position:"absolute"}}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton component="a" >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "300",
                        },
                      }}
                      primary="Dashboard"
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{ ":hover .sublinks":{display:"block"}, ":hover":{ cursor:"pointer"}, position:"relative"}} disablePadding >
                  <ListItemButton component="a">
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "300",
                        
                    
                        },
                      }}
                      primary="Products"
                    />
                    <Box flexGrow={1} />
                    <KeyboardArrowRightOutlined />
                  </ListItemButton>
                  <Box
                   
                   className="sublinks"
                   sx={{

                    position: "absolute",
                    display:"none",
                    top:"0%",
               

                    right: "100%",
                    width: "200px",
                    zIndex: 1,
                  }}>

                  <Paper
                  sx={{
                    ml: 1,
                    minWidth:"150px"
                    
                  
                  }}
                 >
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Add Prodect" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" >
                            <ListItemText primary="Edit Product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                  </Box>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton component="a" >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "300",
                        },
                      }}
                      primary="Order"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "300",
                       
                          
                        },
                      }}
                      primary="Profile"
                    />
                  </ListItemButton>
               
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
