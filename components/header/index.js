import Link from "next/link";
import styles from './header.module.css'


export default function Header(){
    return(
        <div className={`${styles.container}`}>
            <nav>
                <ul className={`${styles.listLinks}`}>
                    <Link className={`${styles.link}`} href={'/'}>
                        INÍCIO
                    </Link>
                    <Link className={`${styles.link}`} href={'/'}>
                        SOBRE
                    </Link>
                    <Link className={`${styles.link}`} href={'/'}>
                        PROJETO
                    </Link>
                    <Link className={`${styles.link}`} href={'/'}>
                        CONTATO
                    </Link>
                </ul>
            </nav>
        </div>
    )
}