import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import { useCallback } from "react";

export default function TopScroll() {
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, [])
  return (
    <Zoom in={useScrollTrigger({threshold:100})}>
    <Fab onClick={scrollToTop} variant="extended" size="small" sx={{position:"fixed" , bottom:"33px" , right:"33px" ,  }} color="primary" aria-label="add">
  <KeyboardArrowUp />
</Fab>
      
    </Zoom>
  )
}
