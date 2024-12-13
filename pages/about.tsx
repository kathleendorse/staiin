import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';



export default function About() {

  const theme = useTheme();

  return (
    <Container 
      maxWidth="xl" 
      sx={{
        my:2,
        backgroundColor:'black'
        // backgroundColor:'red'
      }}
    >
      {/* <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'turquoise',
          // maxHeight: '100vh',
          // height: '80vh'
        }}
      > */}
        <Grid 
          container 
          spacing={2} 
          columns={10} 
          sx={{
            // backgroundColor:'white',  
            flex:1
          }}
        >
          <Grid size={3} >
            <Box sx={{backgroundColor:'gray', height: 300}}>
              <Typography 
                // sx={{backgroundColor:'black'}}
              >
                Box 1
                </Typography>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box 
              sx={{
                // backgroundColor: 'fuchsia', 
                pt: 4, 
                height:400, 
                textAlign:'center'
              }}
            >
              <Box 
                mb={2} 
                // sx={{backgroundColor:'brown'}}
              >
                <Typography variant="h1">ABOUT</Typography>
              </Box>
              <Typography 
                variant="body1" 
                // sx={{backgroundColor:'black'}}
              >
                Staiin Studios emerges as a dynamic force at the intersection of photography and creative directiion with an unwavering commitment to excellence.  We apprach each endavor with meticulous attention to detail and boundless passion.  From fashion editorials to commercial campaigns, Stainn Studios delivers a harmonious blend of creativity and sophistication.
              </Typography>
              <Typography
                  variant="body1" 
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dui nibh. Quisque ut egestas eros. Nam viverra ac diam eu tempor. Morbi vel ultrices felis. Integer gravida ipsum sit amet velit viverra rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida accumsan turpis, ac vehicula felis porta in. Quisque in mi sem. Proin dignissim leo et tincidunt placerat. Nullam venenatis vestibulum tristique.
              </Typography>
            </Box>
          </Grid>
          <Grid size={3}>
            <Box sx={{backgroundColor: 'gray', height:300}}>
              <Typography 
                // sx={{backgroundColor:'black'}}
              >Box 3</Typography>
            </Box>
          </Grid>
        </Grid>
        {/* <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright /> */}
      {/* </Box> */}
    </Container>
  );
}