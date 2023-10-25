import { Window ,KeyboardArrowRight, SportsEsports, DirectionsBike, Laptop, MenuBook, Close, ExpandMore} from "@mui/icons-material";
import { Container,MenuItem ,Menu,Button, Typography, Box, useTheme, IconButton, ListItemIcon, ListItemText, SwipeableDrawer, Accordion, AccordionSummary,
    List, ListItem, ListItemButton, useMediaQuery, Stack} from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Links from "./Links";

const Header3 = () => {

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



    const theme = useTheme();



  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



    return (
        <Container sx={{mt:4 ,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<Box>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                // @ts-ignore
                sx={{width:"222px" ,bgcolor:theme.palette.mycolor.main,color:theme.palette.text.secondary}}
            >
                <Window />

                <Typography sx={{ p: 0, textTransform: "capitalize", mx: 1, }}>Categories</Typography>
                <Box flexGrow={1}/>

                <KeyboardArrowRight/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
        // @ts-ignore
        sx={{".MuiPaper-root":{width:"220px",bgcolor:theme.palette.mycolor.main,}}}
      >


                    <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DirectionsBike fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bikes</ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Laptop fontSize="small" />
          </ListItemIcon>
          <ListItemText>Electronics</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBook fontSize="small" />
          </ListItemIcon>
          <ListItemText>Books</ListItemText>
        </MenuItem>

                    <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SportsEsports fontSize="small" />
          </ListItemIcon>
          <ListItemText>Games</ListItemText>
        </MenuItem>

                </Menu>


            </Box>

            {useMediaQuery('(min-width:1200px)') && (
                <Stack gap={4} direction={"row"} alignItems={"center"}>
                 <Links title={"Home"} />
            <Links title={"Mega menu"} />
            <Links title={"full Screen menu"} />
             <Links title={"Pages"}/>
              <Links title={"User account"}/>
               <Links title={"Vendor account"}/>
               </Stack>
            )}




{useMediaQuery('(max-width:1200px)') && (<IconButton  onClick={toggleDrawer("top", true)}>
                <MenuIcon />
            </IconButton>)}


            <SwipeableDrawer
                sx={{".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper":{height:"100%"}}}
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            onOpen={toggleDrawer("top", true)}
          >

                <Box  sx={{width:"444px",mx:"auto",mt:20,position:"relative",pt:10}}>
                <IconButton  onClick={toggleDrawer("top", false)} sx={{position:"absolute",top:0,right:10,":hover":{rotate:"180deg",color:"red",transition:"1s "}}}>
                <Close />
                    </IconButton>

                    {[{ mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "full Screen menu", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "User account", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "Vendor account", subLink: ["Link1", "Link2", "Link3"] }
                    ].map((item) => {
                        return(
                             <Accordion
// @ts-ignore
                             key={item} elevation={3} sx={{bgcolor:"initial"}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
                                    <Typography>{ item.mainLink}</Typography>
        </AccordionSummary>

          <List sx={{p:0,my:0,}}>
         {item.subLink.map((link)=>{
            return(
                 <ListItem key={link} sx={{mx:0,pt:0}}>
            <ListItemButton>
              <ListItemText primary={link} />
            </ListItemButton>
          </ListItem>
            )
         })}

        </List>

      </Accordion>
                        )
                    })}


                </Box>


          </SwipeableDrawer>


        </Container>
    );
}

export default Header3;
