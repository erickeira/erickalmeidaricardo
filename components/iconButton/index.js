import Image from 'react-bootstrap/Image';
import styles from './iconbutton.module.scss'
import { Stack } from '@mui/material';

export default function IconButton({children, onClick}){
    return(
        <button className={styles.container} onClick={() => onClick()}>
            {children}
        </button>
    )
   
}

