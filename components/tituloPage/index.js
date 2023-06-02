import Image from 'react-bootstrap/Image';
import styles from './titulopage.module.scss'
import { Stack } from '@mui/material';

export default function TituloPage({titulo, icone}){
    const RenderIcone = icone
    return(
        <h5 className={styles.container}>
            {icone && <RenderIcone/>}
            {titulo}
        </h5>
    )
   
}

