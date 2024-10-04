import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import IconsSection from "./IconsSection";
import ProductCard from "./productCard";
export default function Hero() {
  const theme = useTheme();
  console.log(theme)
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };


  return (
    <Container sx={{ background:theme.palette.bg.main ,  mt: 2, padding:"20px" ,    display: "felx", alignItems: "center"  , overflow:"hidden" }}>
      <Grid container spacing={2} alignItems={"center"} overflow={"hidden"}>
        <Grid item xs={12} md={9}>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
          >
           <SwiperSlide >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="public\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-15.jpg"
      
                  width={"100%"}
                  height={"100%"}
                />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                    },
                    [theme.breakpoints.down("sm")]: {
                      py:5
                      
                    },
                      color: "black",
                  }}
                >
                  <Typography variant="h5" mt={1}>
                    LIFESTYLE COLLETION
                  </Typography>
                  <Typography variant="h3" mt={1}>
                    MEN
                  </Typography>
                  <Typography variant="h5" mt={1}>
                    SALE UP TO
                    <span style={{ color: "red", marginLeft: "12px" }}>
                      30% OFF
                    </span>
                  </Typography>
                  <Typography variant="h6" color="#777" mt={1}>
                    Get Free Shipping on Orders Over $99.00
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      color: "white",
                      fontWeight: "600",
                      padding: " 10px 25px",
                      mt: 1,
                    }}
                  >
                    ShOP NOW
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
           
            <SwiperSlide>
            <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
              <img
                width={"100%"}
                  height={"100%"}
                   src="public\t-shirts-react-ecomerce-dev-ali-youtube-channel\DALL·E 2024-09-16 08.24.22 - A minimalistic design with an empty space on the left side, similar to the previous image. The right side s.jpg"
              />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                    },
                    [theme.breakpoints.down("sm")]: {
                      py:5
                      
                    },
                      color: "black",
                  }}
                >
                  <Typography variant="h5" mt={1}>
                    LIFESTYLE COLLETION
                  </Typography>
                  <Typography variant="h3" mt={1}>
                    WOMEN
                  </Typography>
                  <Typography variant="h5" mt={1}>
                    SALE UP TO
                    <span style={{ color: "red", marginLeft: "12px" }}>
                      30% OFF
                    </span>
                  </Typography>
                  <Typography variant="h6" color="#fff" mt={1}>
                    Get Free Shipping on Orders Over $99.00
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      color: "white",
                      fontWeight: "600",
                      padding: " 10px 25px",
                      mt: 1,
                    }}
                  >
                    ShOP NOW
                  </Button>
                </Box>

              </Box>

            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item xs={3} sx={{  width: "100%",
              height: "100%", display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              width={"100%"}
              src="public\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-17.jpg"
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY( -50%)",
                padding: "10px",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2b3445",
                  fontSize: "18px",
                }}
              >
                New ARRIVALS{" "}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                }}
              >
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2b3445",
                  display: "flex",
                  alignItems: "center",

                  gap: 2,
                  transition: ".2s",
                  "&:hover": {
                    color: "#D23f57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop Now
                <ArrowForward />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img
              width={"100%"}
src="public\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-16.jpg"
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY( -50%)",
                padding: "10px",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2b3445",
                  fontSize: "18px",
                }}
              >
                GAMING 4k
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                }}
              >
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#2b3445",
                  display: "flex",
                  alignItems: "center",

                  gap: 2,
                  transition: ".2s",
                  "&:hover": {
                    color: "#D23f57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop Now
                <ArrowForward />
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <IconsSection/>
      <ProductCard/>

    </Container>
  );
}
