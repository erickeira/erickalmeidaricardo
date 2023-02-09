import React,{ useEffect, useState} from 'react';
import Head from 'next/head';
import Image from 'next/image'

import { apiUrl, apiId, urlImgs, moneyFormatter,loaderImage, cloudflareLoader, titleSite, urlFavicon, descriptionDefault, urlSite } from '../../utils';
import Link from 'next/link';
import Place from '../../public/img/place.svg';
import ContentHeader from '../../components/ContentHeaderMain';
import { useRouter } from 'next/router';
export default function Home(props) {

    const router = useRouter();
    const { destaques , ultimasnoticias } = props.data
    const { onClick } = props
    // const [destaques, setDestaques ] = useState([]);
    // const [ultimasnoticias, setUltimasnoticias ] = useState([]);

    const [loading , setLoading] = useState(true)
    const isOpen = false
    const Rotahome = router.route +"api/home"

    useEffect(() => {
        setLoading(false)
         getDados();
    },[])


   async function getDados(){

    // const corpo = JSON.stringify( {
    //     acoes: [                        
    //     { metodo: "destaques", params: [ { resultados: "4" }] },
    //     { metodo: "ultimasnoticias", params: [ { resultados: "4" }] },
    //     ], id: apiId
    // });

    const response = await fetch(
        Rotahome,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
           
        }
    )
    const list = await response.json()
    setDestaques(list.destaques)
    setUltimasnoticias(list.ultimasnoticias)
    
    return list

 }

  return (
    <>
      {
        !loading ?  
        <div className={`${isOpen ? 'open ': ''}main`}>
                        
            <ContentHeader/>
            <Head>                   
                <link rel="apple-touch-icon" sizes="57x57" href={ `${urlFavicon}apple-icon-57x57.png`} />
                <link rel="apple-touch-icon" sizes="60x60" href={ `${urlFavicon}apple-icon-60x60.png` } />
                <link rel="apple-touch-icon" sizes="72x72" href={ `${urlFavicon}apple-icon-72x72.png` } />
                <link rel="apple-touch-icon" sizes="76x76" href={ `${urlFavicon}apple-icon-76x76.png` } />
                <link rel="apple-touch-icon" sizes="114x114" href={ `${urlFavicon}apple-icon-114x114.png` } />
                <link rel="apple-touch-icon" sizes="120x120" href={ `${urlFavicon}apple-icon-120x120.png` } />
                <link rel="apple-touch-icon" sizes="144x144" href={ `${urlFavicon}apple-icon-144x144.png` } />
                <link rel="apple-touch-icon" sizes="152x152" href={ `${urlFavicon}apple-icon-152x152.png` } />
                <link rel="apple-touch-icon" sizes="180x180" href={ `${urlFavicon}apple-icon-180x180.png` } />
                <link rel="icon" type="image/png" sizes="192x192"  href={ `${urlFavicon}android-icon-192x192.png` } />
                <link rel="icon" type="image/png" sizes="32x32" href={ `${urlFavicon}favicon-32x32.png` } />
                <link rel="icon" type="image/png" sizes="96x96" href={ `${urlFavicon}favicon-96x96.png` } />
                <link rel="icon" type="image/png" sizes="16x16" href={ `${urlFavicon}favicon-16x16.png` } />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content={ `${urlFavicon}ms-icon-144x144.png` } />
                <meta name="theme-color" content="#ffffff" />
                <meta name="description" content={descriptionDefault} />
                <meta name="og:site_name" property="og:site_name" content={titleSite} />
                <meta name="og:title" property="og:title" content={`Resultado da Busca | ${titleSite}`} />
                <meta name="og:url" property="og:url" content={`${urlSite}/busca${router.query}`} /> 
                <meta name="og:description" property="og:description" content={descriptionDefault} />                             
                <meta name="og:image" property="og:image" content={`${urlFavicon}padrao.png`} />
                <meta name="og:image:width" property="og:image:width" content="300" />
                <meta name="og:image:height" property="og:image:height" content="300" />
                <title> { titleSite }</title>
            </Head>

            <div className="container py-4 px-4 px-sm-0">
            <div  className="d-none d-md-block  ">
                {/* <Image src={logo} alt="logo" /> */}
                </div>
                <div className="pb-3 pb-md-5">
                    <h2 className="color-primary font-28 m-0 pb-2">Imóveis em Destaque</h2>
                    <p className="font-14 w-50 pr-0 pr-md-5">Confira em nossos principais imóveis aquele que mais se adeque as suas necessidades</p>
                </div>
                {/* <div className={`${ pageSkeleton ? '' : 'd-none '}row`}> */}
            

                <div className="row">
                    
                    
                    
                    { destaques?.map(dest => (
                        
                        <div key={dest.id} className="col-12 col-md-6 col-xl-3 py-3 py-xl-0">
                            <div onClick={() => onClick(`imovel/${ dest.id}`)} /* href={`/imovel/${dest.id}`} */className="d-flex flex-column shadow h-100 item-grid" >                                
                                <div className="foto position-relative"><Image src={dest.imagem} loader={cloudflareLoader} width={300} height={50}  alt={dest.tipo} /></div>
                                <div className="d-flex flex-grow-1 flex-column px-3 py-3">
                                    
                                    <div className="flex-grow-2">
                                        <div className="font-12 font-md-11 line-height-100">{dest.finalidade}{dest.tipo && <small className="ml-1 font-italic opacity-50">({dest.tipo})</small>}</div>
                                        <div className="font-20 color-primary">
                                            { dest.valor ? (
                                                <b>R$ {moneyFormatter(dest.valor)}</b>
                                            ) :
                                            (
                                                <b>SEM VALOR</b>
                                            ) }                                                    
                                        </div>
                                        { dest.valor_condominio && <div className="font-12 font-md-11 line-height-100 color-secondary">Condomínio: R$ {moneyFormatter(dest.valor_condominio)}</div> }
                                    </div>

                                    <div className="d-flex infos flex-grow-1 align-items-center py-3">
                                        <div className="d-flex">
                                            { dest.dormitorios != 0 && <div className="info info-dormitorios font-12 font-md-11 line-height-100 pr-3"><div>{dest.dormitorios}</div></div> }
                                            { dest.banheiros != 0 && <div className="info info-banheiros font-12 font-md-11 line-height-100 pr-3"><div>{dest.banheiros}</div></div> }
                                            { dest.area != 0 && <div className="info info-area font-12 font-md-11 line-height-100 pr-3"><div>{dest.area} m<sup>2</sup></div></div> }
                                        </div>
                                    </div>
                                    
                                    <div className="endereco font-12 line-height-130">
                                        <Image src={Place} loader={loaderImage}  unoptimized width={72} height={16} alt=""  />
                                        {`${dest.bairro} | ${dest.cidade}/${dest.uf}`}
                                    </div>
                                    
                                </div>                                
                            </div>
                        </div>

                    )) }

                </div>
            </div>

            <div className="container py-5 px-4 px-sm-0">
                <div className="pb-3 pb-md-5">
                    <h2 className="color-primary font-28 m-0 pb-2">Notícias Imobiliárias</h2>
                    <p className="font-14 w-50 pr-0 pr-md-5">Fique por dentro das últimas notícias do setor imobiliário.</p>
                </div>
                
            
                <div className="row">

                    { ultimasnoticias?.map(noti => (
                        <div key={noti.id} className="col-12 col-md-6 col-xl-3 py-3 py-xl-0">

                            <Link href={`/noticia/${noti.id}`} className="d-flex flex-column shadow h-100 item-grid-noticia">                                
                                <div className="foto"><Image src={noti.imagem} loader={cloudflareLoader}  width={300} height={50} alt={noti.titulo} /></div>
                                <div className="d-flex flex-grow-1 flex-column px-3 py-3">                                            
                                    <div className="flex-grow-1"><h2 className="font-14 line-height-130 color-secondary m-0">{noti.titulo}</h2></div>
                                    <div className="py-3"><p className="m-0 font-14 line-height-130">{noti.resumo}</p></div>
                                    <div className="ler-mais color-primary"><span className="line-height-100 font-14">LER MATÉRIA COMPLETA</span></div>
                                </div>                                
                            </Link>

                        </div>
                    )) }

                </div>
            </div> 

        </div>
        : null
    }
    </>
  )
}



