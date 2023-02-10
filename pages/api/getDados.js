import {apiUrl,apiId} from '../../utils';
export default async  function requisicoes (reqFinalidade,reqResultados) {

    reqFinalidade = "1,3";
    reqResultados = 12;

    const corpo = JSON.stringify( {
    acoes: [  
        
        { 
            metodo: "busca", 
            params: [ 
                {                             
                    finalidade: reqFinalidade,                            
                    resultados: reqResultados
                }]
        }
    ], id: apiId
    });

    const response =  await fetch(
        apiUrl,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: corpo
        }

    );

    const list = await response.json()

return new Response (JSON.stringify(list))
} 