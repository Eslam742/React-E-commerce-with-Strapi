import { KeyboardArrowUp } from "@mui/icons-material"
import { Fab, Zoom,useScrollTrigger } from "@mui/material"


const Scrolltotop = () => {
  return (

          <Zoom in={useScrollTrigger({threshold:100})}>
          <Fab variant="extended" size="small" sx={{ position: "fixed", bottom: 30, right: 33 }} color="primary" aria-label="add"
              onClick={() => {
                  window.scrollTo(0, 0);
              }}>
         <KeyboardArrowUp fontSize="medium" />
      </Fab>
 </Zoom>

  )
}

export default Scrolltotop
