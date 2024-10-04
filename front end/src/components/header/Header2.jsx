import {
  Badge,
  Box,
  Container,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  BorderColor,
  ExpandMore,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";

export default function Header2() {
  const theme = useTheme();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
    marginLeft: 0,
    width: "100%",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px ",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
      width: "100%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  // start  Function menu Select
  const options = ["All Categories", "CAR", "Clothes", "Electronic"];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
  console.log(theme);
  return (
    <div>
      <Container sx={{ my: 3 }}>
        <Stack
          direction={"row"}
          gap={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <ShoppingCartOutlined fontSize="medium" />
            <Typography variant="body2" fontWeight={"900"}>
              E-commerce
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "450px",
              display:{xs:"none" , md:"flex"},
              flexDirection: "row",
              alignItems: "center",
              border: "2px solid #ccc ",
              borderRadius: "20px",

            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="submit" aria-label="search"></IconButton>
            </Search>
            {/* start  Menu Select */}
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ py: 0, margin: "0px", Width: "300px" }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                sx={{
                  padding: "10px 30px",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  "&:hover": { cursor: "pointer" },
                  background: theme.palette.mycolor.main,
                }}
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    margin: "0px",
                    ".MuiTypography-root": {
                      fontSize: "13px",
                      color: "inherit",
                      textWrap: "nowrap",
                    },
                  }} // padding للـ ListItemText
                  secondary={options[selectedIndex]}
                />
                <ExpandMore fontSize="small" />
              </ListItem>
            </List>

            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{
                    padding: "3px 10px",
                    fontSize: "13px",
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
          </Box>
          <Box>
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton aria-label="user">
              <PersonOutline fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
