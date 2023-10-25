import { CreditScoreOutlined, ElectricBolt, WorkspacePremiumOutlined,AccessAlarmOutlined } from "@mui/icons-material"
import { Container,Stack,Box, Typography,useTheme,Divider,useMediaQuery } from "@mui/material"


const Iconsection=()=> {
    const theme = useTheme();
  return (
      <Container sx={{bgcolor: theme.palette.mode=== "dark"? "#000" : "#fff"}}>
          <Stack direction={"row"} alignItems={"center"} mt={2} sx={{ flexWrap: "wrap" }}
              divider={useMediaQuery('(min-width:600px)')? <Divider orientation="vertical" flexItem /> : null}
              >

   <MyBox icon={<ElectricBolt />} title={"Fast Delivery"} subtitle={"Start From $10"}/>
   <MyBox icon={<WorkspacePremiumOutlined/>} title={"Money Guarantee"} subtitle={"7 Days Back"}/>
   <MyBox icon={<AccessAlarmOutlined />} title={"365 Days"} subtitle={"For Free Return"}/>
   <MyBox icon={<CreditScoreOutlined/>} title={"Payment"} subtitle={"Secure System"}/>





          </Stack>

    </Container>
  )
}

export default Iconsection






// eslint-disable-next-line react/prop-types
const MyBox=({icon,title,subtitle})=> {
const theme=useTheme();
  return (
    <Box sx={{width:250,display:"flex",flexGrow:1,alignItems:"center",gap:3,justifyContent:useMediaQuery('(min-width:600px)')? "center" : "left",py:1}}>
          {icon}
          <Box>
              <Typography variant="body1" >{title}</Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontWeight: 300 }}>{subtitle}</Typography>
          </Box>
            </Box>
  )
}
