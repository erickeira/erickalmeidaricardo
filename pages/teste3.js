import { useRouter } from 'next/router'

export default function Home({ runtime,data }){
    const router = useRouter()
    console.log(data)
    return(
        <div onClick={() => 
            router.push({
                pathname: `/teste4`,
                query: {  }
              }
            )
        }>
            {data.destaques[0].id}
        </div>
    )
}

export const getServerSideProps = async () => {
    const apiId = "992";
    const apiUrl = "https://dev.infoimoveis.com.br/webservice/hotsites.php";
    const corpo = await JSON.stringify( {
        acoes: [                        
            { metodo: "destaques", params: [ { resultados: "4" }] },
            { metodo: "ultimasnoticias", params: [ { resultados: "4" }] },
        ], id: apiId
    });

    return {
      props: {
        runtime: process.env.NEXT_RUNTIME,
        data: await fetch(
            apiUrl,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: corpo
            }
        ).then((response) =>
          response.json()
        ),
      },
    };

};

