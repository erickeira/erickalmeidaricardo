import { useRouter } from 'next/router'

export default function Home({list}){
    const router = useRouter()
    return(
        <div onClick={() => 
            router.push({
                pathname: `/teste2`,
                query: {  }
              }, 
              undefined, { shallow: true }
            )
        }>
            {list.destaques[0].id}
        </div>
    )
}

export async function getServerSideProps(){
    const apiId = "992";
    const apiUrl = "https://dev.infoimoveis.com.br/webservice/hotsites.php";

    const corpo = await JSON.stringify( {
        acoes: [                        
            { metodo: "destaques", params: [ { resultados: "4" }] },
            { metodo: "ultimasnoticias", params: [ { resultados: "4" }] },
        ], id: apiId
    });
    const resposta = await fetch(
        apiUrl,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: corpo
        }
    )

    const list = await resposta.json()
    return{
        props : { list }
    }
}