'use-client';
import React from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GridItem = ( contents: any, routeName: string ) => {
  const router = useRouter();

    return (
      <Box 
        component="div"
        onClick={()=>{router.push(routeName)}}
        px={1}
        sx={{
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
        {contents}
      </ Box>
    );
  }

  export default GridItem;