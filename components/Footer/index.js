import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Map from '../Map';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

import { existsOrError, urlFacebook, urlInstagram, urlImgs,scrollTopDist } from '../../utils';
import { verificarCreci,loaderImage,cloudflareLoader } from '../../utils';
import { AuthContext } from '../../context';

const customStyles = {
    content: {
      top:  '50%',
      left:  '50%',
      right:  'auto',
      bottom:  'auto',
      maxWidth: 600,
      maxHeight: 600,
      marginRight: '-50%',
      paddingBottom: 50,
      transform: 'translate(-50%, -50%)',
      overlay:{ zIndex: 120},
    
    },
    
  };

export default function Footer(props) {
    const { anunciante , finalidades, perfilcorretores } = useContext(AuthContext);
     let subtitle ="";
    
    const isOpen = false;

    const [ latitude, setLatitude ] = useState(0);
    const [ longitude, setLongitude ] = useState(0);
   
    const [ showHeaderFixed, setShowHeaderFixed ] = useState(false);
    const [ showScrollTop, setShowScrollTop ] = useState(false);
    const [ modalIsOpen, setIsOpen] = useState(false);
    
    const [ loading, setLoading ] = useState(true); 

    const [ tituloCorretores, setTituloCorretores] = useState('');


    async function openModal() {
        setIsOpen(true);
        // let axcorretores = await buscarPerfilCorretores();
        // setCorretores(axcorretores);
        setLoading(false);
          
     }
 
     function afterOpenModal() {
         // references are now sync'd and can be accessed.
         subtitle.style.color = '#f00';
     }
 
     function closeModal() {
         setIsOpen(false);
     }

// useEffect(() => {
//      buscarPerfilCorretores().then(result => setCorretores(result));
        
// },[]);

const ListaCorretores = perfilcorretores.map((corretor) =>
                                           
<div className="corretor" key={corretor.id}>
 <div className ="esquerda">
 {
            corretor && corretor.foto  ?
             <Image className="imagem-corretor" src= {urlImgs+'/'+corretor.foto} loader={cloudflareLoader}  width={300} height={50} alt="imagem corretor"/>
            :
             <Image  className="imagem-corretor" src= {'../../img/sm-perfil.png'} loader={loaderImage}  width={300} height={50} alt="imagem corretor"/>
        }
 </div>
 <div className ="direita">
     <div className ="nome-corretor">{corretor.nome}</div>
     <div className="texto font-14">Creci: {corretor.creci}</div>
     <div className="texto font-14">{corretor.texto}</div>
 </div>
</div>

); 

    const currentYear = new Date();

    useEffect(() => {
        if (Object.keys(anunciante).length > 0) {
            
            (Object.keys(anunciante).includes('anunciante') && anunciante.latitude) && setLatitude(anunciante.latitude);
            (Object.keys(anunciante).includes('anunciante') && anunciante.longitude) && setLongitude(anunciante.longitude);
            // setFinalidades(finalidades.map(item => item.label));

        }

    },[]);




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
        <footer >            
                
                <Map latitude={latitude} longitude={longitude} />                
                
                <div className="container footer-container d-flex flex-column">                    
                    
                    <div className="topo d-flex flex-grow-1 align-items-center pt-0 pt-xl-4">
                        
                        { (existsOrError(urlFacebook) || existsOrError(urlInstagram)) ? (

                            <div className="d-flex flex-column flex-xl-row align-items-center w-100">
                                                        
                                <div className="logo-rodape pr-0 pr-xl-5">
                                <Link href="/"><Image loader={loaderImage} src={'../../img/infoimoveis.png'}  unoptimized width="100" height="100"alt="Imobiliaria Test" /></Link>
                                </div>
                                <button onClick={() => handleOpenMenu()} className={`${isOpen ? 'open ': ''}d-block d-md-none btn-menu primary border-0 font-16 m-3`}>MENU<div><span></span></div></button>

                                <div className="d-flex align-items-center justify-content-between flex-grow-1">
                                    <div className="d-none d-xl-block">
                                        <nav className="text-right">
                                            <Link href="/" exact>Home</Link>      
                                            { (finalidades.includes('Aluguel') || finalidades.includes('Aluguel/Temporada')) && <Link href="/aluguel">Aluguel</Link> }
                                            { finalidades.includes('Venda') && <Link href="/venda">Venda</Link> }                                        
                                            <Link href="/banco-de-pedidos">Banco de Pedidos</Link>
                                            <Link href="/fale-conosco">Fale Conosco</Link>
                                        </nav>
                                    </div>
                                    
                                    <div className="redes-sociais font-13 font-md-14 pt-3 pt-xl-0">
                                        <span className="mr-2">SIGA-NOS NAS REDES SOCIAIS:</span>
                                        { existsOrError(urlInstagram) && <a href={ urlInstagram } className="instagram mx-0" target="_blank" rel="noopener noreferrer nofollow">Instagram</a> }
                                        { existsOrError(urlFacebook) && <a href={ urlFacebook } className="facebook mx-0" target="_blank" rel="noopener noreferrer nofollow">Facebook</a> }                              
                                    </div>                                
                                    
                                </div>

                            </div>

                        ) : (
                            
                            <div className="d-flex flex-column flex-xl-row align-items-center justify-content-center w-100">
                                                        
                                <div className="logo-rodape pr-0 pr-xl-5">
                                    <Link href="/"><Image src={'../../img/infoimoveis.png'}  loader={loaderImage} width={300} height={50} alt="Imobiliaria Teste" /></Link>
                                </div>

                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-none d-xl-block">
                                        <nav className="text-right">

                                        <Modal
                                                isOpen={modalIsOpen}
                                                onAfterOpen={afterOpenModal}
                                                onRequestClose={closeModal}
                                                style={customStyles}
                                                contentLabel="Modal corretores"
                                                disabled={ loading ? true : false }
                                            >
                                                        
                                                <h2 className="tituloModal font-20 font-md-28" ref={(_subtitle) => (subtitle = _subtitle)}>{verificarCreci(tituloCorretores)}</h2>
                                            
                                                { 
                                                    loading ? 
                                                        <div className="estilo-carregado"><span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" /></div>
                                                        :
                                                        ListaCorretores
                                                }
                                                                                                                                                                         
                                                <Button onClick={closeModal} className="btn-fechar-corretor">Fechar</Button>
                                            
                                            </Modal>
                                            <Link href="/" exact>Home</Link>
                                            { (finalidades.includes('Aluguel') || finalidades.includes('Aluguel/Temporada')) && <Link href="/aluguel">Aluguel</Link> }
                                            { finalidades.includes('Venda') && <Link href="/venda">Venda</Link> }
                                            {ListaCorretores.length > 0 ? 
                                            <Link href="/" onClick={openModal} ref={(_subtitle) => (subtitle = _subtitle)}>{verificarCreci(tituloCorretores)}</Link>
                                                : 
                                                ''
                                            }
                                                                                   
                                            <Link href="/banco-de-pedidos">Banco de Pedidos</Link>
                                            <Link href="/fale-conosco">Fale Conosco</Link>
                                        </nav>
                                    </div>
                                </div>

                            </div>

                        ) }                        

                    </div>
                    
                    <div className="rodape font-11 font-xl-14 d-flex justify-content-center align-items-center text-center">
                        <b>© { currentYear.getFullYear() } INFOIMÓVEIS - Sua Referência em Imóveis - Todos os direitos reservados</b>                        
                    </div>

                </div>            
            
        </footer>

        </>
    )
}