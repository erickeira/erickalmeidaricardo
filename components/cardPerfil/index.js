import Image from 'react-bootstrap/Image';
import styles from './cardperfil.module.scss'
import { Stack } from '@mui/material';
import Botao from '../botao';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '../iconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function CardPerfil(){
    return(
        <div className={styles.container}>
            {/* <Stack direction={`row`} alignItems={`center`} justifyContent="space-between" sx={{ width: '100%', mb: 5}}>
                <h1>Erick Almeida</h1>
                <h4>Desenvolvedor FullStack</h4>
            </Stack> */}
            <h1 style={{marginBottom: 30}}>Erick Almeida</h1>
            <Image src="/erick.jpeg" width={'90%'} className={styles.containerImagem}/>

            <span style={{fontSize: 14,marginBottom: 10 }}>contato@erickeira.com.br</span>
            <span  style={{fontSize: 15,marginBottom: 50 }}>Campo Grande, MS</span>

            <Stack direction={`row`} alignItems={`center`} justifyContent={`center`} spacing={2} sx={{ width: '100%', mb: 5}}>
                <IconButton>
                    <LinkedInIcon/>
                </IconButton>
                <IconButton>
                    <GitHubIcon/>
                </IconButton>
                <IconButton>
                    <InstagramIcon/>
                </IconButton>
            </Stack>

            <Botao
                icone={MailOutlineIcon}
                titulo={`Entre em contato`}
            />
        </div>
    )
   
}

