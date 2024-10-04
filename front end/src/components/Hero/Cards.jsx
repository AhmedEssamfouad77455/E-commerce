import { Box, CircularProgress, IconButton, Rating, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  AddShoppingCartOutlined,
  Close,
  StarHalfOutlined,
} from "@mui/icons-material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ProduectDestails from "./ProduectDestails";
import { useGetproductByNameQuery } from "../../redux/Product";
import { motion } from "framer-motion"
export default function Cards({categoryData}) {
  console.log(categoryData)
  const AllProduct = "/products?populate=*" ; 
  const MenCatergary = "/products?populate=*&filters[productCategory][$eq]=men";
  const WomanCatergary = "/products?populate=* &filters[productCategory][$eq]=women";
const [myData , setMyData ] =React.useState()
React.useEffect(() => {
  if (categoryData === "men") {
    setMyData(MenCatergary);
  } else if (categoryData === "woman") {
    setMyData(WomanCatergary);
  } else {
    setMyData(AllProduct);
  }
}, [categoryData]); 

  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  console.log(data);
  const detailsDate = data?.data || [];

  console.log(detailsDate);
  const [open, setOpen] = React.useState(null);

  const handleClickOpen = (product) => {
    setOpen(product);
  };

  const handleClose = () => {
    setOpen(null);
  };
  if (data) {
    return (
      <>
        <Stack
          sx={{
            my: 5,
            display: "flex",
            justifyContent: {   md:"space-between" , xs:"center" },
            flexDirection: "row",
            gap: 2,
            flexWrap: "wrap",
            padding: 2,
          }}
        >
          {detailsDate.map((item) => {
            const imageUrl =
              item.attributes.productimage.data?.[0]?.attributes?.url ||
              "path/to/default/image.jpg";
            const image = item.attributes.productimage.data;
            const title = item.attributes.productTitle;
            const price = item.attributes.price;
            const rating = item.attributes.productRating;
            const description = item.attributes.description;
            const id = item.id;

            return (
              <Card
                key={id}
                component={motion.section}
                layout 
                 initial={{transform:"scale(0)"}}
                 animate={{transform:"scale(1)"}}
                 transition={{duration:1.6 ,
                 type:"spring" ,
                 stiffness:50

                 }}
                sx={{
                  maxWidth:{md: 333 , xs:280},

                  ":hover  .MuiCardMedia-root": {
                    rotate: "1deg",
                    scale: "1.2",
                    transition: "all .9s",
                  },
                  my:2
                }}
              >
                <CardMedia
                  component="img"
                  alt={title}
                  height="277"
                  // @ts-ignore
                  image={`${import.meta.env.VITE_BASE_URL}${imageUrl}`}
                  onClick={() => handleClickOpen(item)}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                    onClick={() => {
                      handleClickOpen(item);
                    }}
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} color="primary" />
                    <Typography variant="body2" color="primary">
                      Add to Cart
                    </Typography>
                  </Box>
                  <Rating
                    name="half-rating"
                    defaultValue={rating}
                    precision={0.5}
                  />
                </CardActions>
                {open && (
                  <Dialog
                    sx={{
                      ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
                      ".MuiBackdrop-root":{background:"transparent"},
                    }}
                    open={Boolean(open)}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  
                  
                  >
                    <IconButton
                      onClick={handleClose}
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
                    <ProduectDestails
                      title={open.attributes.productTitle}
                      price={open.attributes.price}
                      image={open.attributes.productimage.data}
                      description={open.attributes.description}
                    />
                  </Dialog>
                )}
              </Card>
            );
          })}
        </Stack>
      </>
    );
  }
  if (isLoading) {
    return  <Box sx={{width:"100%" ,  display: 'flex' , alignItems:"center" , justifyContent:"center" , height:"200px"   }}>
    <CircularProgress />
  </Box>;
  }

  if (error) {
    // @ts-ignore
    return  <Box sx={{width:"100%" ,  display: 'flex' , alignItems:"center" , justifyContent:"center" , height:"200px"   }}>
    <CircularProgress />
  </Box>;
  }
}
