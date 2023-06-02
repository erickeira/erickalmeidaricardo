import Image from 'react-bootstrap/Image';
import styles from './botao.module.scss'
import { Stack } from '@mui/material';

export default function Botao({titulo, icone}){
    const RenderIcone = icone
    return(
        <button className={styles.container} >
            {icone && <RenderIcone/>}
            {titulo}
        </button>
    )
   
}

