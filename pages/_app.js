import CardPerfil from '@/components/cardPerfil'
import MenuLateral from '@/components/menuLateral'
import ParticlesContainer from '@/components/particles';
import '@/styles/globals.css'
import { Grid } from '@mui/material';



export default function App({ Component, pageProps }) {
  
  return  (
    <>
        <ParticlesContainer/>
        <Grid container p={5} columns={{ xs: 1, sm: 12, md: 12 }}>
          <Grid p={0} xs={1} sm={12} md={3} item={true}>
            <div style={{position: `relative`}}>
              <CardPerfil/>
            </div>
          </Grid>
          <Grid p={0}  xs={1} sm={12} md={8} item={true}>
          <Component {...pageProps} />
          </Grid>
          <Grid style={{display: 'flex',alignItems: 'center', justifyContent: 'center', height: '100vh'}} p={1} xs={1} sm={0} md={1} item={true}>
            <MenuLateral/>
          </Grid>
        </Grid>
    </>
  )

}

