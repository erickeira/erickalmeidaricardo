import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import { NavLink, Link } from 'react-router-dom';

import {  scrollTopDist, headerFixed, urlImgs, loaderImage } from '../../utils';
import { urlFavicon,descriptionDefault,titleSite,urlSite, apiId, apiUrl } from "../../utils";

// import Logo  from  '../../img/logo.png';
// import SemFoto from '../../img/sm-perfil.png';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { verificarCreci } from '../../utils';
import { AuthContext } from '../../context';
import Head from 'next/head';
import { useRouter } from 'next/router';


const customStyles = {
    content: {
      top:  '50%',
      left:  '50%',
      right:  'auto',
      bottom:  'auto',
      maxWidth: 320,
      maxHeight: 600,
      marginRight: '-50%',
      paddingBottom: 50,
      transform: 'translate(-50%, -50%)',
      overlay:{ zIndex: 120},
        
    },
    
  };

export default function Header(props) {
    const { anunciante , finalidades, perfilcorretores } = useContext(AuthContext);
    const { onChange, titulo } = props;
    const router = useRouter()
    let subtitle ="";
    const isOpen = false;
    const [ showHeaderFixed, setShowHeaderFixed ] = useState(false);
    const [ showScrollTop, setShowScrollTop ] = useState(false);
    const [ modalIsOpen, setIsOpen] = useState(false);
    const [ loading, setLoading ] = useState(true);


    function mudarPagina(e){
    
        router.push({
            pathname: `/${e}`,
            query: {  }
          }, 
          undefined, { shallow: true }
        )
      }

    async function openModal() {
        setIsOpen(true);
        setLoading(false);      
     }
 
     function afterOpenModal() {
        subtitle.style.color = '#f00';
     }
 
     function closeModal() {
        setIsOpen(false);
     }
 

     const ListaCorretores = perfilcorretores.map((corretor) =>
                                          
     <div className="corretor" key={corretor.id}>
      <div className ="esquerda imagem-corretor">
        {
            corretor && corretor.foto  ?
             <Image className="imagem-corretor" src= {urlImgs+'/'+corretor.foto} alt="imagem corretor"/>
            :
             <Image  className="imagem-corretor" src= {'../../img/sm-perfil.png'} loader={loaderImage} alt="imagem corretor"/>
        }
      </div>
      <div className ="direita">
          <div className ="nome-corretor">{corretor.nome}</div>
          <div className="texto font-14">Creci: {corretor.creci}</div>
          <div className="texto font-14">{corretor.texto}</div>
      </div>
     </div>

 ); 

 

    useEffect(() => {
        
      
        window.addEventListener('scroll', function() {
            
            if (window.pageYOffset > scrollTopDist) {
                !showScrollTop && setShowScrollTop(true);
                !showHeaderFixed && setShowHeaderFixed(true);
                
            } else {
                setShowScrollTop(false);
                setShowHeaderFixed(false);
                handleOpenMenu('close');
                
            }                
        });
        
    },[]);

  
   
    function handleOpenMenu(close) {
        const show = close ? false : !isOpen;
    }

    return (
        <>
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
                <title>{titulo || ''} | { titleSite }</title>
            </Head>
        <header className={`${isOpen ? 'open ' : ''}d-flex align-items-center header`}>              

            <div className="container d-flex flex-column flex-md-row align-items-center pt-1  pt-md-0 pb-md-0">
            
                <div className="logo pt-4 pb-3 pt-lg-0 pb-lg-0">
                    <Link href="/"><Image loader={loaderImage} src={'../../img/logo.png'} width="100" height="100"alt="Imobiliaria Test" /></Link>
                </div>

                <button onClick={() => handleOpenMenu()} className={`${isOpen ? 'open ': ''}d-block d-md-none btn-menu primary border-0 font-16 m-3`}>MENU<div><span></span></div></button>

                <div className="d-flex justify-content-end flex-grow-1">
                   
                    <div >
                        
                        <nav className="d-none d-md-block menu-topo pt-0 pb-3 pt-md-2 pb-md-2 pt-xl-0 pb-xl-0 text-center text-md-right" style={{display: 'flex'}} >

                            <div onClick={() => mudarPagina("")}>HOME</div>
                            { (finalidades.includes('Aluguel') || finalidades.includes('Aluguel/Temporada') ) && <div  onClick={() => mudarPagina("aluguel")}>ALUGUEL</div> }
                            { finalidades.includes('Venda') && <div onClick={() => mudarPagina("venda") }> VENDA</div> }
                            <div onClick={() => mudarPagina("banco-de-pedidos")}>BANCO DE PEDIDOS</div>
                            <div onClick={() => mudarPagina("fale-conosco")}>FALE CONOSCO</div>
                        </nav>

                        <div className="header-dados d-flex flex-column flex-md-row justify-content-end pt-0 pt-xl-3 font-12 font-xl-14 ">
                            
                            <div className="px-0 px-md-3 px-xl-4 py-1 py-xl-0 text-center text-md-right">
                                <div>
                                    { (Object.keys(anunciante).length > 0 && Object.keys(anunciante).includes('telefones')) && anunciante.telefones.map((tel, index) => (          
                                        <>                              
                                            <a href={tel.app !== '0' ? `https://api.whatsapp.com/send?l=pt-BR&amp;phone=55${tel.ddd}${tel.numero.replace('-','')}&text=Oi,%20vim%20pelo%20seu%20site!` : `tel:0${tel.ddd}${tel.numero.replace('-','')}`} key={index} className={tel.app !== '0' ? 'whats' : ''} rel="noopener noreferrer nofollow" target="_blank">{ `(${tel.ddd}) ${tel.numero}`}</a>
                                            { anunciante.telefones.length !== (index+1) && ' / ' }
                                        </>
                                    ))}
                                </div>
                                <div className="creci">
                                    { (Object.keys(anunciante).length > 0 && Object.keys(anunciante).includes('creci')) && `CRECI: ${anunciante.creci}`}
                                </div>
                            </div>
                            
                            <div className="px-0 px-md-3 px-xl-4 py-1 py-xl-0 text-center text-md-right">
                                { Object.keys(anunciante).length > 0 && `${anunciante.endereco}`}<br />
                                { Object.keys(anunciante).length > 0 && `${anunciante.bairro} - ${anunciante.cidade}/${anunciante.uf}`}
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>            
            
        </header>

        { headerFixed && (
            <>
            <header className={`${ showScrollTop ? 'show ' : '' }header-fixed${isOpen ? ' open' : ''}`}>
                <div className="d-flex justify-content-between container py-2">
                    
                    <div className="d-flex align-items-center logo">
                        <Link href="/"> <Image loader={loaderImage} src={'../../img/infoimoveis.png'} alt="lojatest - Corretora de Imóvies" width="100" height="100"/> </Link>
                    </div>

                    <button onClick={() => handleOpenMenu()} className={`${isOpen ? 'open ': ''}d-block d-md-none btn-menu border-0 font-16`}>MENU<div><span></span></div></button>
                    <nav className="d-none d-md-flex align-items-center justify-content-end menu-topo flex-grow-1">
                        <div onClick={() => onChange("home")}>HOME</div>
                        { (finalidades.includes('Aluguel') || finalidades.includes('Aluguel/Temporada') ) && <div onClick={() => onChange("aluguel")}>ALUGUEL</div> }
                        { finalidades.includes('Venda') && <div onClick={() => onChange("venda") }>VENDA</div> }
                        <div onClick={() => onChange("banco-de-pedidos")}>BANCO DE PEDIDOS</div>
                        <div onClick={() => onChange("fale-conosco")}>FALE CONOSCO</div>
                    </nav>

                </div>
            </header>

            <nav className={`${isOpen ? 'show ' : ''}d-block d-md-none menu-topo-fixed`}>
                <Link onClick={() => handleOpenMenu()} href="/" exact>HOME</Link>
                { (finalidades.includes('Aluguel') || finalidades.includes('Aluguel/Temporada') ) && <Link onClick={() => handleOpenMenu()} href="/aluguel">ALUGUEL</Link> }
                { finalidades.includes('Venda') && <Link onClick={() => handleOpenMenu()} href="/venda">VENDA</Link> }
                {
                ListaCorretores.length > 0 ? 
                    <Link href="/" onClick={openModal} className="menu-topo-fixed-corretor" ref={(_subtitle) => (subtitle = _subtitle)}>{verificarCreci(anunciante.creci).toUpperCase()}</Link>
                     : 
                    ''
                }
                <Link onClick={() => handleOpenMenu()} href="/banco-de-pedidos">BANCO DE PEDIDOS</Link> 
                <Link onClick={() => handleOpenMenu()} href="/fale-conosco">FALE CONOSCO</Link>
            </nav>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal corretores"
                disabled={ loading ? true : false }
                
            >
                                       
                <h2 className="tituloModal font-20 font-md-28" ref={(_subtitle) => (subtitle = _subtitle)}>{verificarCreci(anunciante.creci )}</h2>
                { 
                    loading ? 
                        <div className="estilo-carregado"><span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" /></div>
                        :
                    ListaCorretores
                }
                <Button onClick={closeModal} className="btn-fechar-corretor">Fechar</Button>
                
            </Modal>
            </>
        ) }
        

        <div className={`${ showScrollTop ? 'show ' : '' }btnToTop p-4`}>
            <button className="d-flex justify-content-center align-items-center text-white border-0 font-10" type="button" onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>
                <div>TOPO</div>
            </button>
        </div>

        
        </>
    );
}

