import React from 'react'
import {Grid,Typography,Button} from '@mui/material'
import Slide from './Images/Slide.png'
import Image from 'mui-image'
import Slide2 from './Images/Slide2.png'
const Workshop = () => {
  return (
    <>
   <Grid container  justifyContent="center" lg={12} sx={{backgroundColor:'#ECE1C7'}}>
<Grid container lg={11} sx={{margin:'auto',backgroundImage:`url(${Slide})`,backgroundSize: 'cover',borderBottomRightRadius: '26px',borderTopRightRadius: '26px',marginTop:'56px',width:'1280px',height:'454px' }}>
  <Grid container lg={10.5} sx={{margin:'auto'}}>
<Typography  sx={{ color: '#ffffff',  fontSize:'56px',fontWeight:'700',lineHeight:'84px',fontFmaily:'Poppins' ,marginTop:'56px',}}>
Welcome to the Groovy Grove of Foster Reads!
          </Typography>
          <Grid item lg={8}>
          <Typography  sx={{ color: '#ffffff',fontFmaily:'Poppins',FontWeight:400 ,FontSize:'20px',lineHeight:'30px' }}>
          Hey there bookworms and wordsmiths! We’re thrilled to invite you to embark on a literary adventure like no other! The Foster Reads Workshop Extravaganza!
          </Typography>
          </Grid>
          <Grid item lg={12}>
          <Button  sx={{backgroundColor:'#E9BF5E',width:'120px',color:'#000',borderRadius:'56px',textTransform:'none',marginTop:'36px',marginBottom:'64px'}}>Join us</Button>
          </Grid>
          </Grid>

          <Grid container lg={12} sx={{backgroundColor:'#179886',marginTop:'100px',borderRadius:'26px'}}>
<Grid container lg={7} sx={{margin:'auto'}}>
<Grid item lg={12} sx={{margin:'auto'}}>
<Typography sx={{fontFamily:'Poppins',FontWeight:'600',Fontsize:'32px',marginTop:'36px',color:'#fff'}}>Dive into the Joy of Reading and Writing!</Typography>
</Grid>
<Grid item lg={12} sx={{margin:'auto'}}>
<Typography sx={{fontFamily:'Poppins',FontWeight:'600',Fontsize:'32px',color:'#fff'}}>Imagine a place where the pages of your favourite books come to life, where words dance off the page and into your imagination. That's the kind of enchantment we're brewing at Foster Reads! Whether you're a seasoned book lover or a budding wordsmith, there's something for everyone.</Typography>
</Grid>
</Grid>
<Grid container lg={5} sx={{margin:'auto',}}>
<Image src={(Slide2)} style={{marginTop:'36px',marginBottom:'36px'}}></Image>
</Grid>
          </Grid>
          
</Grid>
   </Grid>
    </>
  )
}

export default Workshop