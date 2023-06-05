import { Grid } from "@mui/material";
import styles from './skills.module.scss'
import { Image } from "react-bootstrap";

export default function Skills(){

    const Skill = ({ img , porcentagem,  width,  height }) => {
        return(
            <div className={styles.containerSkill} >
                <Image src={img} width={width || 60} height={height || 60}/>
                <span>
                    {porcentagem} %
                </span>
            </div>
        )
    }
    
    return (
        <div className={styles.container} wrap="flex-wrap">
            <Skill
                img="/js.png"
                porcentagem={80}
            />
            <Skill
                img="/rn.png"
                width={140} height={85}
                porcentagem={90}
            />
            <Skill
                img="/next.png"
                width={170} height={80}
                porcentagem={20}
            />
            <Skill
                img="/figma.png"
                width={40} height={55}
                porcentagem={65}
            />
            <Skill
                img="/php.png"
                width={90} height={55}
                porcentagem={85}
            />
        </div>
    )
}