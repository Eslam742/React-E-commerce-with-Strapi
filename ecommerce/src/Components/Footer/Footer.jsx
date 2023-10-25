import { Box, Button, Link, Typography } from "@mui/material"



const Footer=()=> {
  return (
    <Box sx={{bgcolor:"#2b3445", py:"1.3",borderTopLeftRadius:8,borderTopRightRadius:8, }}>
<Typography justifyContent={"center"} display={"flex"} alignItems={"center"} color={"HighlightText"}sx={{fontSize:18}} variant="h6" >
              Designed & Developed by
              <Button sx={{ mx: .5, fontSize: 18, textTransform: "capitalize", color: "#ff7790" }}>
                  <Link underline="none" color="#ff7790" href="https://www.facebook.com/profile.php?id=100038870297474&mibextid=ZbWKwL" target="_blank" >eslam reda</Link></Button>
              ©2023
      </Typography>
    </Box>
  );
  }

export default Footer
