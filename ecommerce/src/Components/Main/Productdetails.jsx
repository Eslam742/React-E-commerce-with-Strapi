
import { AddShoppingCartOutlined } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"


const Productdetails=()=> {
  return (
      <Box sx={{display:"flex",alignItems:"center",gap:3, flexDirection:{xs:"column",sm:"row"}}}>
          <Box sx={{display:"flex"}}>
              <img width={300} src="src\images\1.JPG"/>
          </Box>

          <Box sx={{textAlign:{xs:"center",sm:"left"}}}>

              <Typography gutterBottom variant="h5" >
          Woman Fashion
        </Typography>
        <Typography variant="subtitle1" color={"crimson"} fontSize={22} my={.4}>
         $12.99
                          </Typography>


<Typography variant="body1" >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
              </Typography>
              <Stack direction={"row"} gap={1} my={2} sx={{justifyContent:{xs:"center",sm:"left"}}}>
                  {["src/images/1.JPG", "src/images/2.jpg"].map((item) => {
                      return (
                           <img key={item} style={{borderRadius:3}} height={90} width={90} src={item}/>
                      )
                  })}
              </Stack>
 <Button size="large" sx={{mb:{xs:1,sm:0}, textTransform: "capitalize" }} variant="contained"> <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize={"small"} />
                                  buy now</Button>
          </Box>

    </Box>
  );
                }

export default Productdetails
