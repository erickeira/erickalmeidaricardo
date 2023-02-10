import React, { useState, useEffect } from 'react';

import { Modal } from 'react-bootstrap';
// import NumberFormat from 'react-number-format';
// import Slider from 'rc-slider';
// import Select from 'react-select';
// import QueryString from 'querystring';

// import Search from '../../img/search.svg';

import { buscaCidades, buscaBairros, buscaValores, existsOrError } from '../../utils';
import Image from 'next/image';


// const Range = Slider.Range;
// const customStyles = {
    
//     menuPortal: provided => ({ ...provided, zIndex: 9999, fontSize: 14 }),
//     menuList: (base) => ({
//         ...base,
    
//         "::-webkit-scrollbar": {
//           width: "4px",
//           height: "0px",
//         },
//         "::-webkit-scrollbar-track": {
//           background: "#f1f1f1"
//         },
//         "::-webkit-scrollbar-thumb": {
//           background: "#888"
//         },
//         "::-webkit-scrollbar-thumb:hover": {
//           background: "#555"
//         }
//       })
    
//   }


export default function ContentHeader(props) {

   
    // const storage = useSelector(state => state.data);

    const [ show, setShow ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ formulario, setFormulario ] = useState({ finalidade:'' , tipo:'', uf:'' , cidade: '', bairro: '', valorde: '', valorate: '' });
    const [ finalidade, setFinalidade ] = useState([ ]);
    const [ tipoImovel, setTipoImovel ] = useState([]);
    const [ uf, setUf ] = useState([]);
    const [ cidade, setCidade ] = useState([]);        
    const [ bairro, setBairro ] = useState([]);
    const [ valores, setValores ] = useState({});
    const [ rangeLimits, setRangeLimits] = useState({min: 0, max: 100});
   // const [ carregouPrimeiraVez, setCarregouPrimeiraVez ] = useState(false);


    
    const formularioSelecionados = {
        finalidade: finalidade?.filter(item => item.value == formulario.finalidade),
        tipoImovel: tipoImovel?.filter(item => item.value == formulario.tipo),
        uf: uf?.filter(item => item.value == formulario.uf),
        cidade: cidade?.filter(item => item.value == formulario.cidade),
        bairro: bairro?.filter(item => item.value == formulario.bairro),
        
    } 


    
    useEffect(() => {
        // if(!carregouPrimeiraVez) {
            // getValores();
            if (props.dadosFiltrados)  setFormulario(props.dadosFiltrados)  ;
           // if (props.dadosFiltrados && props.dadosFiltrados.finalidade) handleOptionChange('finalidade', props.dadosFiltrados.finalidade) 
           // if (props.setfinalidadepagina) handleOptionChange('finalidade', props.setfinalidadepagina)
        //     setCarregouPrimeiraVez(true);
        // }
    },[show]); 
    
    // const refStorage = useRef(true);
    // useEffect(() => {        
    //     if (refStorage.current) { refStorage.current = false;return; }
    //     getValores();
    // },[storage ]);

 
    function handleSlideChange(values) {
        if(rangeLimits.min == rangeLimits.max) return '';  
        setValores({ min: values.min, max: values.max });
        setFormulario({ ...formulario, valorde: values.min, valorate: values.max });
        
    }
//    async function getValores() {
//         setFinalidade(storage.finalidades);
//         setTipoImovel(storage.tipoimoveis);
//         setUf(storage.estados);
        
//         if (existsOrError(storage.valores)) {
//             const response = await buscaValores(formulario.finalidade);
//             setRangeLimits({min: parseInt(response.valor_minimo), max: parseInt(response.valor_maximo)});
//         } 
             
//     }    
   
    // async function handleOptionChange(tipo, valor) {        
       
    //     switch (tipo) {
            
    //         case 'finalidade':
    //             const response = await buscaValores(valor);
                        
    //             setRangeLimits({min: parseInt(response.valor_minimo), max: parseInt(response.valor_maximo)});
                
    //             setFormulario({ ...formulario, finalidade: valor, valorde: parseInt(response.valor_minimo), valorate: parseInt(response.valor_maximo) });
                
    //             break;

    //         case 'tipo':
    //             setFormulario({ ...formulario, tipo: valor });
    //             break;

    //         case 'uf':
    //             setFormulario({ ...formulario, uf: valor });
    //             setCidade([{value: '', label: 'Carregando'}]);
    //             const respUf = await buscaCidades(valor);
    //             setCidade(respUf); 
    //             break;

    //         case 'cidade':
    //             setFormulario({ ...formulario, cidade: valor });
    //             setBairro([{value: '', label: 'Carregando'}]);
    //             const respCidade = await buscaBairros(valor);            
    //             setBairro(respCidade);
    //             break;

    //         case 'bairro':
    //             setFormulario({ ...formulario, bairro: valor }); 
    //             break;

    //         case 'valorde':
    //             setFormulario({ ...formulario, valorde: valor });
    //             break;

    //         case 'valorate':
    //             setFormulario({ ...formulario, valorate: valor }); 
    //             break;
                
    //         default:
                
    //             break;
    //     }
        
    // }

    // const valuesRange = () => {
    //     let values = [0,0]
    
    //     if(formulario.valorde){
    //         if(rangeLimits.min == rangeLimits.max ){
               
    //             values[0] = 0
    //         }else{
                
    //             values[0] = formulario.valorde
    //         }
            
    //     }else{
    //         if(rangeLimits.min == rangeLimits.max){
            
    //             values[0] = 0
    //         }else{
                
    //             values[0] = rangeLimits.min ? rangeLimits.min : 0
    //         }
    //     }
    
    //     if(formulario.valorate){
    //         values[1] = formulario.valorate
    //     }else{
    //         values[1] = rangeLimits.max ? rangeLimits.max : 0
    //     }
        
    //     return values
    // }

    

    async function handleSubmit() {
        // setLoading(true); 
        //     props.busca ?  props.callbackchage(formulario) 
        //         :
        //     props.routes.history.push(`/busca?${QueryString.stringify(formulario)}`);
           
        // setLoading(false);
        // setShow(false);
        console.log("olar mundo")
    }    
    
    const handleClose = () => setShow(false);
    const handleShow  = () => setShow(true);
  
    return (
        <>
        <div className="content-header">        
            <div className="d-flex align-items-center justify-content-between container py-4">
                <h1 className="font-20 font-md-28 text-center text-md-left m-0 text-white">{props.title}</h1> 
                <button onClick={handleShow} className={`p-1 m-0 bg-transparent border-0${' d-block d-md-none' }`}>
                    {/* <Image src={'../../img/search.svg'} width="25" height="25" /> */}
                </button>
            </div>                
        </div>
        <Modal className="modal-style" centered show={show} onHide={handleClose}>          
            <Modal.Body className="p-4">          
                <h2 className="font-24 m-0 pb-3">Encontre no Site</h2>      
                <div className="row py-2">
                                
                    <div className="col-12 pb-2 mb-1">
                        {/* <Select className="select" classNamePrefix="react-select" value={formularioSelecionados.finalidade} onChange={e => handleOptionChange('finalidade',e.value)}  placeholder="FINALIDADE" options={finalidade} menuPortalTarget={document.body}
                            styles={customStyles} /> */}
                    </div>

                    <div className="col-12 pb-2 mb-1">
                        {/* <Select className="select" classNamePrefix="react-select" value={formularioSelecionados.tipoImovel} placeholder="TIPO DO IMÓVEL" onChange={e => handleOptionChange('tipo',e.value)} options={tipoImovel} menuPortalTarget={document.body}
                            styles={customStyles} />  */}
                    </div>

                    <div className="col-12 col-md-4 pb-2 mb-1 pr-3 pr-md-0">
                        {/* <Select className="select" classNamePrefix="react-select" value={formularioSelecionados.uf}  placeholder="UF" onChange={e => handleOptionChange('uf',e.value)} options={uf} menuPortalTarget={document.body}
                            styles={customStyles}  /> */}
                    </div>
               
                    <div className="col-12 col-md-8 pb-2 mb-1 pl-3 pl-md-0 ">
                        {/* <Select className="select" classNamePrefix="react-select" value={formularioSelecionados.cidade}  placeholder="CIDADE" onChange={e => handleOptionChange('cidade',e.value)} options={cidade} menuPortalTarget={document.body}
                            styles={customStyles} noOptionsMessage={() => 'Selecione'} /> */}
                    </div>

                    <div className="col-12 pb-2 mb-2">
                        {/* <Select className="select" classNamePrefix="react-select" value={formularioSelecionados.bairro} placeholder="BAIRRO" onChange={e => handleOptionChange('bairro',e.value)} options={bairro} menuPortalTarget={document.body}
                            styles={customStyles} noOptionsMessage={() => 'Selecione'} />                                         */}
                    </div>

                    <label className="d-block font-12 col-12 pb-2 font-14 select "><div className="imputValorDesejado">VALOR DESEJADO</div></label>
                      
                          
                        <div className="col-12 pb-2 mb-2 rageStyleMobile">
                           {/* {!loading && 
                           <>
                           <Range allowCross={false}  min={valuesRange()[0]==0? 0 : rangeLimits.min} max={rangeLimits.max} value={valuesRange()} onChange={e => handleSlideChange({min: e[0], max: e[1]})} /> 
                            <div className="d-flex justify-content-between font-12 pt-3 pb-1 text-center">
                                <NumberFormat disabled className="bg-transparent w-50 font-12 d-inline-block border-0 p-0 m-0 font-weight-bolder color-active" thousandSeparator="." decimalSeparator="," allowNegative={false} prefix={'R$ '} value={valuesRange()[0]} />
                                <NumberFormat disabled className="bg-transparent w-50 text-right font-12 d-inline-block border-0 p-0 m-0 font-weight-bolder color-active" thousandSeparator="." decimalSeparator="," allowNegative={false} prefix={'R$ '} value={formulario.valorate ? formulario.valorate : rangeLimits.max} />                                            
                            </div>  
                            </>
                           } */}
                            
                        </div>

                </div>
                
                {/* <button type="button" className="btn btn-primary font-weight-bold font-14 w-100 px-4 py-3 shadow" onClick={() => handleSubmit()} disabled={ loading ? true : false }>
                    { loading && <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> }
                    { loading ? 'BUSCANDO' : 'BUSCAR AGORA' }
                </button>    */}
                                                                    
            </Modal.Body>
        </Modal>

        </>
        
    );
    
}