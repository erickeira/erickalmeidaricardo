import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Aluguel from '../../paginas/aluguel'
import Venda from '../../paginas/venda'
import Busca from '../../paginas/busca'
import Pedidos from '../../paginas/banco-de-pedidos'
import Contato from '../../paginas/fale-conosco'
import Home from '../../paginas/home'
import { useRouter } from 'next/router'
import { apiId, apiUrl } from '../../utils'

export default function Rota({rota, list}) { 
    const [pageSelecionada, setPageSelecionada] = useState(rota || '')
    const router = useRouter()
    const paginas = [
      {
        rota: "home",
        componente: <Home data={list}/>,
        titulo : ''
      },
      {
        rota: "aluguel",
        componente: <Aluguel rota={rota}/>,
        titulo : 'Aluguel'
      },
      {
        rota: "venda",
        componente: <Venda rota={rota}/>,
        titulo : 'Venda'
      },
      {
        rota: "busca",
        componente: <Busca />,
        titulo : 'Busca'
      },
      {
        rota: "banco-de-pedidos",
        componente:  <Pedidos rota={rota}/>,
        titulo : 'Banco de Pedidos'
      },
      {
        rota: "fale-conosco",
        componente: <Contato rota={rota}/>,
        titulo : 'Fale Conosco'
      },
    ]

    useEffect(() => {
      setPageSelecionada(rota)
    },[rota])

    function mudarPagina(e){
      setPageSelecionada(e)
      router.push({
          pathname: `/${e}`,
          query: {  }
        }, 
        undefined, { shallow: true }
      )
    }
    const tituloPage = paginas.find(item => item.rota == pageSelecionada)?.titulo
    const componentePage = paginas.find(item => item.rota == pageSelecionada)?.componente
    return (
      <>
        <Header onChange={e => mudarPagina(e)} titulo={tituloPage}/>
        {componentePage || <Home/>}
      </>
    )
     
  }


export async function getServerSideProps({req, res}){
  let rotas = req.url.split('?')[0].split('/')
  let rota = rotas[1]
  // let id = rotas[2]
 
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
  let data = {}
  data['rota'] = rota
  data['list'] = list 

  return {
    props: data, 
  }
} 