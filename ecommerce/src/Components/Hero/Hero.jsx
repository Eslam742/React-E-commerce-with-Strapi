
import { ArrowForward } from "@mui/icons-material";
import { Container, Box, Typography, Stack, Link, Button, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import { Autoplay,  Navigation } from 'swiper/modules';
import Iconsection from "./Iconsection";


const myslider=[{text:"MEN",link:"src/images/banner-15.jpg"},
{text:"WOMEN",link:"src/images/banner-25.jpg"},
]

const Hero = () => {
    const theme = useTheme();
  return (
      <Container >
<Box  sx={{pt:2, mt: 3,display:"flex",alignItems:"center" ,gap:2}}>

<Swiper
 autoplay={{
          delay: 2500000000000,
          disableOnInteraction: false,
        }}
          pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

loop={true}


        className="mySwiper"

          >
              {myslider.map((item) => {
                 return(
                      <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} />
              <Box

                 sx={{[theme.breakpoints.up('sm')]: {
    position: "absolute" ,left:"10%",textAlign:"left"
    },
    [theme.breakpoints.down('sm')]: {
    pt:4,pb:4
    },
     }}>
                  <Typography variant="h6" sx={{ color: "#222"}}>LIFESTYLE COLLECTION</Typography>
                      <Typography variant="h4" sx={{ color: "#222", fontWeight: 400, my: 1 }}>{item.text}</Typography>

                      <Stack sx={{ justifyContent: {xs:"center",sm:"left"} }} direction={"row"} alignItems={"center"}>
                          <Typography variant="h5" sx={{ color: "#333",mr:1}}>SALE UP TO</Typography>
                      <Typography variant="h5" sx={{ color: "#D23F57" }}>30% OFF</Typography>

                      </Stack>
                      <Typography variant="body1" sx={{ color: "#000", fontWeight: 300, my: 1 }}>Get Free Shopping On Orders Over $99.00</Typography>
                      <Button sx={{px:5,py:1,mt:2,bgcolor:"#222",boxShadow:"0px 4px 16px rgba(43,52,69,.1)",color:"#fff",borderRadius:"5px",
                    "&:hover":{bgcolor:"#151515",boxShadow:"0px 4px 16px rgba(43,52,69,.1)"}
                    }} variant="contained">
                     Shop Now
                      </Button>
            </Box>
            </SwiperSlide>
                 )

              })}


      </Swiper>




          <Box sx={{display:{xs:"none",md:"block",minWidth:"26.7%"}}}>

          <Box sx={{position:"relative"}}>
                  <img width={"100%"} src="src\images\banner-17.jpg" alt="" />

                  <Stack sx={{position:"absolute", top:"50%", transform:"translateY(-50%)",left:30}}>
                      <Typography variant="caption" sx={{ color: "#283445", fontSize: "18px" }}>NEW ARRIVALS</Typography>

                      <Typography variant="h6" sx={{ color: "#283445", lineHeight: "16px", mt: 1 }}>SuMMER</Typography>
                      <Typography variant="h6" sx={{ color: "#283445", }}>SALE 20% OFF</Typography>
                      <Link
                       sx={{ color: "#283445",display:"flex",alignItems:"center" ,gap:"5px",transition:"1s","&:hover":{color:"#D23F57"}}}
                       href="#" underline="none"
                      >
                        Shop Now
                        <ArrowForward sx={{fontSize:"13px"}}/>

                      </Link>


                  </Stack>


              </Box>


          <Box sx={{position:"relative"}}>
<img width={"100%"} src="src\images\banner-16.jpg" alt="" />
<Stack sx={{position:"absolute", top:"50%", transform:"translateY(-50%)",left:30}}>
                      <Typography variant="caption" sx={{ color: "#283445", fontSize: "18px" }}>GAMING 4K</Typography>

                      <Typography variant="h6" sx={{ color: "#283445", lineHeight: "16px", mt: 1 }}>DESKTOPS &</Typography>
                      <Typography variant="h6" sx={{ color: "#283445", }}>LAPTOPS</Typography>
                      <Link
                       sx={{ color: "#283445",display:"flex",alignItems:"center" ,gap:"5px",transition:"1s","&:hover":{color:"#D23F57"}}}
                       href="#" underline="none"
                      >
                        Shop Now
                        <ArrowForward sx={{fontSize:"13px"}}/>

                      </Link>


                  </Stack>

          </Box>
          </Box>

</Box>

          <Iconsection/>

    </Container>
  )
}

export default Hero
