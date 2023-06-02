import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Container, Grid } from '@mui/material'
import CardPerfil from '@/components/cardPerfil'
import TituloPage from '@/components/tituloPage'
import Experiencia from '@/components/experiencia'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>EricK Almeida Ricardo</title>
        <meta name="description" content="FullStack Developer | ReactJS | ReactNative | Javascript | PHP | SQL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Container className={`${styles.containerIntroducao}`}>
          <TituloPage titulo={`Introdução`}/>
          <h4 className={`${styles.apresentacao}`}>Olá, sou Erick Desenvolvedor FullStack</h4>
        </Container>
        <Container className={`${styles.containerSobre}`}>
          <TituloPage titulo={`Sobre`}/>
          <span className={`${styles.texto}`}>
            Olá! Sou um programador Full Stack apaixonado por criar soluções inovadoras e funcionais. Com experiência em uma variedade de tecnologias, incluindo PHP, Javascript, Next.js, React.js e React Native , estou sempre em busca de desafios que me permitam expandir meus conhecimentos e entregar produtos de alta qualidade.
          </span>
          <span className={`${styles.texto}`}>
            Minha jornada no desenvolvimento web começou com PHP, uma linguagem versátil que me proporcionou a base sólida necessária para construir sistemas robustos e escaláveis. Com o passar do tempo, mergulhei no mundo do Javascript, explorando frameworks populares como Next.js, React.js e React Native. Essas ferramentas me permitiram criar experiências de usuário incríveis tanto para aplicativos web quanto para dispositivos móveis.
          </span>
          <span className={`${styles.texto}`}>
            Ao longo dos anos, tive o prazer de trabalhar em projetos desafiadores, desde a criação de sites corporativos personalizados até o desenvolvimento de aplicativos móveis interativos. Acredito firmemente em adotar as melhores práticas de desenvolvimento e em permanecer atualizado com as tendências mais recentes da indústria. Isso me permite oferecer soluções eficientes e modernas aos meus clientes.
          </span>
          <span className={`${styles.texto}`}>
            Além das habilidades técnicas, sou um comunicador eficaz e um colaborador ágil. Acredito na importância da colaboração em equipe e em trabalhar em estreita colaboração com os clientes para entender suas necessidades e transformar suas ideias em realidade. Tenho orgulho de entregar projetos no prazo e dentro do orçamento, mantendo sempre um alto padrão de qualidade.
          </span>
          <span className={`${styles.texto}`}>
            Estou constantemente aprendendo e me desafiando a crescer profissionalmente. Se você está procurando um programador Full Stack que possa trazer suas ideias à vida com criatividade e habilidade técnica, estou pronto para ajudar. Vamos colaborar para criar soluções incríveis juntos!
          </span>
        </Container>
        <Container className={`${styles.containerExperiencias}`}>
          <TituloPage titulo={`Educação e Experiencias`}/>
          <Experiencia/>
        </Container>
      </main>
    </>
  )
}
