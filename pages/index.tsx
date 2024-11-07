import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";
import Grid from '@mui/material/Grid2';
import routes from '../data/routes.json';
// import GridItem from '../components/GridItem';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const upper = (t: string) => t.toUpperCase();
  const validRoutes = routes.pages.slice(1);
  // return (
  //   <Container maxWidth="lg">
  //     <Box
  //       sx={{
  //         my: 4,
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
  //         Material UI - Next.js example in TypeScript
  //       </Typography>
  //       <Link href="/about" color="secondary">
  //         Go to the about page
  //       </Link>
  //       <ProTip />
  //       <Copyright />
  //     </Box>
  //   </Container>
  // );
  return (
    <>
      <Container maxWidth="lg" >
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={2}>
            {validRoutes.map((vr, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={`grid-item-${index}-${vr.name}`}
              >
                <Box
                  onClick={() => {
                    router.push(vr.route);
                  }}
                  px={1}
                  sx={{
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    flex: 1,
                    aspectRatio: '1/1',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      flexDirection: 'row',
                      flex: 1,
                      alignSelf: 'center',
                      height: '100%',
                      alignContent: 'center',
                    }}
                  >
                    <Typography
                      style={{
                        color: 'black',
                        alignSelf: 'center',
                        textWrap: 'wrap',
                      }}
                      variant="h4"
                    >
                      {upper(vr.name)}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

// // import Head from "next/head";
// // import Image from "next/image";
// // import localFont from "next/font/local";
// // import styles from "@/styles/Home.module.css";
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid2';
// import routes from '../data/routes.json';
// // import GridItem from '../components/GridItem';
// import Typography from '@mui/material/Typography';
// import { useRouter } from 'next/router'
// ;

// // const geistSans = localFont({
// //   src: "./fonts/GeistVF.woff",
// //   variable: "--font-geist-sans",
// //   weight: "100 900",
// // });
// // const geistMono = localFont({
// //   src: "./fonts/GeistMonoVF.woff",
// //   variable: "--font-geist-mono",
// //   weight: "100 900",
// // });

// export default function Home() {

//   const router = useRouter();
//   const upper = (t: string)=> t.toUpperCase();
//   const validRoutes = routes.pages.slice(1);

//   return (
//     <>
//       <Container maxWidth="lg">
//         <Box
//           sx={{
//             my: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Grid container spacing={2}>
//           {validRoutes.map((vr, index)=>(
//               <Grid size={{xs:12, sm:6, md:4}} key={`grid-item-${index}-${vr.name}`}>
//                 <Box
//                   onClick={()=>{router.push(vr.route)}}
//                   px={1}
//                   sx={{
//                     backgroundColor: '#fff',
//                     textAlign: 'center',
//                     flex: 1,
//                     aspectRatio: '1/1',
//                     justifyContent:'center',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <Box sx={{
//                     flexDirection:'row',
//                     flex:1,
//                     alignSelf: 'center',
//                     height: '100%',
//                     alignContent:'center'
//                   }}>
//                     <Typography style={{color:'black', alignSelf:'center', textWrap:'wrap'}} variant="h4" >{upper(vr.name)}</Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Container>
//       </>
//   )
// }
//       {/* <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div
//         className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
//       >
//         <main className={styles.main}>
//           <Image
//             className={styles.logo}
//             src="https://nextjs.org/icons/next.svg"
//             alt="Next.js logo"
//             width={180}
//             height={38}
//             priority
//           />
//           <ol>
//             <li>
//               Get started by editing <code>src/pages/index.tsx</code>.
//             </li>
//             <li>Save and see your changes instantly.</li>
//           </ol>

//           <div className={styles.ctas}>
//             <a
//               className={styles.primary}
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 className={styles.logo}
//                 src="https://nextjs.org/icons/vercel.svg"
//                 alt="Vercel logomark"
//                 width={20}
//                 height={20}
//               />
//               Deploy now
//             </a>
//             <a
//               href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.secondary}
//             >
//               Read our docs
//             </a>
//           </div>
//         </main>
//         <footer className={styles.footer}>
//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="https://nextjs.org/icons/file.svg"
//               alt="File icon"
//               width={16}
//               height={16}
//             />
//             Learn
//           </a>
//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="https://nextjs.org/icons/window.svg"
//               alt="Window icon"
//               width={16}
//               height={16}
//             />
//             Examples
//           </a>
//           <a
//             href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="https://nextjs.org/icons/globe.svg"
//               alt="Globe icon"
//               width={16}
//               height={16}
//             />
//             Go to nextjs.org →
//           </a>
//         </footer>
//       </div> */}
