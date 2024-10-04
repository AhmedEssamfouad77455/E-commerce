// @ts-nocheck
import {
  Close,
  ElectricBikeOutlined,
  KeyboardArrowRight,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";
export default function Header3() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container>
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
      >
        <Button
          direction={"row"}
          alignItems={"center"}
          gap={3}
          // bgcolor={theme.palette.mycolor.main}

          sx={{
            background: theme.palette.mycolor.main,
            width: "250px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <Window />
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              
                  
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper 
                  >
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <ElectricBikeOutlined />
                            </ListItemIcon>

                            <ListItemText>Bikes</ListItemText>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <LaptopChromebookOutlined />
                            </ListItemIcon>

                            <ListItemText>Electronices</ListItemText>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <MenuBookOutlined />
                            </ListItemIcon>
                            <ListItemText>Book</ListItemText>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <SportsEsportsOutlined />
                            </ListItemIcon>
                            <ListItemText>Games</ListItemText>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
            <Typography
              variant="body2"
              fontSize={"20px"}
              textTransform={"capitalize"}
            >
              Categories
            </Typography>
          </div>
          <KeyboardArrowRight />
        </Button>
        {useMediaQuery("(min-width:1200px)") && (
          <Stack alignItems={"center"} direction={"row"} gap={4} px={2} >
            <Links text={"Home"} />
            <Links text={"Mega Menu"} />
            <Links text={"Pages"} />
            <Links text={"User Account "} />
            <Links text={"Vendor Account "} />
          </Stack>
        )}
        {useMediaQuery("(max-width:1200px)") && (
          <IconButton onClick={toggleDrawer("top", true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            ".MuiPaper-root.css-12cfoy0-MuiPaper-root-MuiDrawer-paper": {
              height: "100vh",
            },
          }}
        >
          <Box
            sx={{
              width: 444,
              mx: "auto",
              mt: 6,

              position: "relative",
              pt: 10,
            }}
          >
            <IconButton
              onClick={toggleDrawer("top", false)}
              sx={{
                "&:hover": {
                  rotate: "180deg",
                  transition: ".3s",
                  color: "red",
                },
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <Close />
            </IconButton>
            {[
              "Home",
              "Mega menu",
              "full screen menu ",
              "pages",
              "user account",
              "Vender acount",
            ].map((item) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Accordion key={item} elevation={2} sx={{ bgcolor: "initial" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    {item}
                  </AccordionSummary>

                  <List sx={{ py: 0, my: 0 }}>
                    <ListItem sx={{ py: 0, my: 0 }}>
                      <ListItemButton>
                        <ListItemText primary="link1" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <ListItemText primary="link2" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Stack>
    </Container>
  );
}
