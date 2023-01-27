import { loaderImage } from "@/utlis";
import Image from "next/image";
import styles from './sobre.module.scss'

export default function Sobre(){
    return(
        <div className={`${styles.container} containerTela`}>
            <div className={styles.containerImagem}>
                <Image
                    src={'fotoperfil.png'}
                    loader={loaderImage}
                    fill
                />
            </div>

        </div>
    )
}