import { Box, Paper, Typography } from "@mui/material";

import BoltIcon from '@mui/icons-material/Bolt';
import { AccessAlarmOutlined, CreditScoreOutlined, Description, WorkspacePremiumOutlined } from "@mui/icons-material";
export default function IconsSection() {
    const Boxpaper=[
{icon:  <BoltIcon fontSize="large" /> , title:"  Fast Delivery" , description:"Start From $10"  },
{icon:  <WorkspacePremiumOutlined fontSize="large"/> , title:"       Money Guarantee" , description:" 7 Days Back"  },
{icon:  <AccessAlarmOutlined fontSize="large" />, title:"     356 Days" , description:"    For Free return"  },
{icon:  <CreditScoreOutlined fontSize="large"/>, title:"Payment" , description:"   Secure system"  },

    ]
  return (
    <Box
    sx={{ my:5 ,  display:"grid" , gridTemplateColumns:{ md:"repeat(4 , minmax(24% ,auto))" , sm:"repeat(2 , minmax(45% ,auto))" }, columnGap:"2px"}}
    >

    {
        Boxpaper.map((item , index)=>{

            return(
                <Paper key={index} sx={{ 
        display:"flex",
        gap:"20px",
        alignItems:{xs:"start" , md:"center"},
        justifyContent:{xs:"start" , md:"center"} , 
        py:1

    }}>
    {item.icon}
   
    <Box>
        <Typography variant="body1" fontWeight={"600"}>
        {item.title}

        </Typography>
        <Typography variant="body2" color="#777" >
     {item.description}
        </Typography>
    </Box>
        
    </Paper>
            )
        })


    }
 

      
    </Box>
  )
}
