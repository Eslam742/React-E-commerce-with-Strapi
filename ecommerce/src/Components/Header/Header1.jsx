import   { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, useTheme,Box, Typography, Stack ,List,ListItem,ListItemText,MenuItem,Menu, Container, Link} from "@mui/material";
import { DarkModeOutlined, ExpandMore, Facebook, GitHub, Instagram, LightModeOutlined  } from "@mui/icons-material";


const options = [
    'AR',
    'EN'

];


const Header1 = () => {

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

     const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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


  return (
      <Box sx={{ bgcolor: "#283445" ,py:"4px",borderBottomRightRadius:"8px",borderBottomLeftRadius:"8px"}}>

          <Container
          //sx={{maxWidth:"1500px !important"}}
          >
            <Stack direction={"row"} alignItems={"center"}>

          <Typography variant="body2" sx={{
              mr: 2, p: "3px 10px", bgcolor: "#D23f57"
              , borderRadius: "12px", fontSize: "10px", fontWeight: "bold", color: "white"
          }}> HOT</Typography>

          <Typography variant="body2" sx={{fontSize: "12px", fontWeight: 300, color: "white"
          }}> Free Express Shopping</Typography>


              <Box flexGrow={ 1} />

 <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          sx={{color:"white"}}
        >
                          <LightModeOutlined sx={{fontSize:"16px"}}  />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          sx={{color:"orange"}}
        >
          <DarkModeOutlined sx={{fontSize:"16px"}} />
        </IconButton>
      )}
    </div>


               <List
        component="nav"
        aria-label="Device settings"
        sx={{ p:0,m:0 }}
      >
        <ListItem
          sx={{"&:hover":{cursor:"pointer"},px:1}}
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="EN"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            sx={{".MuiTypography-root":{fontSize:"12px" ,color:"white"} }}
            secondary={options[selectedIndex]}
                      />
                      <ExpandMore sx={{fontSize:"16px",color:"white"}} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
            <MenuItem
                sx={{fontSize:"11px",p:"3px 10px",minHeight:"10px"}}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
            <Link href="https://www.facebook.com/profile.php?id=100038870297474&mibextid=ZbWKwL" target="_blank">  <Facebook  sx={{color:"white",m:"3px"}}/></Link>
              <Link href="https://instagram.com/eslamreda68?igshid=NGVhN2U2NjQ0Yg==" target="_blank">  <Instagram  sx={{color:"white",m:"3px"}}/></Link>
             <Link href="https://github.com/Eslam742" target="_blank">  <GitHub  sx={{color:"white",m:"3px"}}/></Link>



    </Stack>
          </Container>
    </Box>
  )
}

export default Header1
