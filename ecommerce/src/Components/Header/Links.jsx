import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"


// eslint-disable-next-line react/prop-types
const Links =({title})=> {
  return (
    <Box  sx={{display:"flex",alignItems:"center",zIndex:2,position:"relative",cursor:"pointer",":hover .show-when-hover":{display:"block"}}}>
          <Typography variant="body1" >{ title}</Typography>
          <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

    <Box className=" show-when-hover " sx={{ position: "absolute", minWidth: "150px", top: "100%", transform: "translateX(-50%)", left: "50%", display:"none" }}>

               <Paper sx={{mt:3}}>
             <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                                  <ListItemText primary="Dashboard" sx={{ ".MuiTypography-root": { fontSize: "15px",fontWeight:300 } }} />
                              </ListItemButton>


                          </ListItem>

                           <ListItem disablePadding sx={{"&:hover .sub-link":{display:"block"},position:"relative"}}>
            <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                                  <ListItemText primary="Products" sx={{ ".MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} />
                                  <Box flexGrow={1}/>
                                  <KeyboardArrowRight fontSize="small"/>
                              </ListItemButton>
   <Box className="sub-link" sx={{position:"absolute",top:0,left:"100%",display:"none"}} >
     <Paper sx={{ml:1,minWidth:140}}>
        <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                                  <ListItemText primary="Add Products" sx={{ ".MuiTypography-root": { fontSize: "15px",fontWeight:300 } }} />
                              </ListItemButton>


                          </ListItem>

                                              <ListItem disablePadding>
            <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                                  <ListItemText primary="Edit Products" sx={{ ".MuiTypography-root": { fontSize: "15px",fontWeight:300 } }} />
                              </ListItemButton>


                          </ListItem>
        </List>
      </nav>
    </Paper>
   </Box>

                          </ListItem>

                          <ListItem disablePadding sx={{"&:hover .subLink":{display:"block"}}}>
            <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                                  <ListItemText primary="Orders" sx={{ ".MuiTypography-root": { fontSize: "15px",fontWeight:300 } }} />
                              </ListItemButton>


                          </ListItem>

                          <ListItem disablePadding sx={{"&:hover .subLink":{display:"block"}}}>
            <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                                  <ListItemText primary="Profile" sx={{ ".MuiTypography-root": { fontSize: "15px",fontWeight:300 } }} />
                              </ListItemButton>


                          </ListItem>



        </List>
      </nav>
              </Paper>

         </Box>


           </Box>
  )
}

export default Links