
import styles from './menulateral.module.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function MenuLateral(){
    return(
        <div className={styles.container}>
            <button className={styles.containerBotao}> <HomeOutlinedIcon/></button>
            <button className={styles.containerBotao}><PersonOutlineOutlinedIcon/></button>
            <button className={styles.containerBotao}><ArticleOutlinedIcon/></button>
            <button className={styles.containerBotao}><WorkOutlineOutlinedIcon/></button>
            <button className={styles.containerBotao}><CommentOutlinedIcon/></button>
            <button className={styles.containerBotao}><EmailOutlinedIcon/></button>    
        </div>
    )
   
}

