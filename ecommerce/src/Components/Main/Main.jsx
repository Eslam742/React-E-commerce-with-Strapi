
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import {
    Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog
    , IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme
} from "@mui/material"
import { useState } from "react";
import Productdetails from "./Productdetails";
import { useGetproductByNameQuery } from "../../redux/Product";




const Main=()=> {



  const handleAlignment = (event, newvalue) => {

    setmyData(newvalue);
  };

    const theme = useTheme();


     const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };





  const allproductapi = 'products?populate=*'
  const menproductapi = "products?populate=*&filters[productCategories][$eq]=men"
   const womenproductapi="products?populate=*&filters[productCategories][$eq]=women"

  const [myData,setmyData] = useState(allproductapi);

   const { data, error, isLoading } = useGetproductByNameQuery(myData)


  if (data) {
    console.log(data.data)
  }
  if(isLoading){
    return (
       <Typography variant="h6" >Loading......</Typography>
    );
  }

  if(error){
    return (
       <Typography variant="h6" >{error.
// @ts-ignore
       message}</Typography>
    );
  }

  if(data){
    return (
    <Container sx={{ py: 9 }} >

      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
        <Box>
          <Typography variant="h6" >Selected Products</Typography>
          <Typography variant="body1" sx={{ fontWeight: "300" }} >All our new arrivals in a axclusive brand selection  </Typography>
        </Box>


        <ToggleButtonGroup
          color="info"

          value={myData}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{ ".Mui-selected": { border: "1px solid #89CFF3 !important", } }}
        >
          <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={allproductapi} aria-label="left aligned">
            All Products
          </ToggleButton>
          <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={menproductapi} aria-label="centered">
            Men Category
          </ToggleButton>
          <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={womenproductapi} aria-label="right aligned">
            Women Category
          </ToggleButton>

        </ToggleButtonGroup>

      </Stack>




      <Stack mt={5} alignItems={"center"} justifyContent={"space-between"} direction={"row"} flexWrap={"wrap"}  >

        {data.data.map((item) => {

          return (
            <Card key={item} sx={{ maxWidth: 345, "&:hover .MuiCardMedia-root": { scale: "1.1", transition: ".3s", rotate: "1deg" } }}>
              <CardMedia
                sx={{ height: 277 }}
                // @ts-ignore
                image={`${item.attributes.productImg.data[0].attributes.url}`}
                title="green iguana"
              />
              <CardContent>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.attributes.productTitle}
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    ${item.attributes.productPrice}
                  </Typography>

                </Stack>
                <Typography variant="body2" color="text.secondary">
                 {item.attributes.productDescription}
                </Typography>

              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Button size="large" sx={{ textTransform: "capitalize" }} onClick={handleClickOpen}> <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize={"small"} />
                  add to card</Button>
                <Rating name="read-only" value={item.attributes.productRating} precision={.5} readOnly />
              </CardActions>
            </Card>
          );

        })}


      </Stack>



      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: "800px" } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton onClick={handleClose} sx={{ position: "absolute", top: 0, right: 10, ":hover": { rotate: "180deg", color: "red", transition: "1s " } }}>
          <Close />

        </IconButton>
        <Productdetails />
      </Dialog>

    </Container>
  );
  }
}

export default Main
