
import ListImoveis from '../../components/listImoveis';
import Head from "next/head";
import { urlFavicon,descriptionDefault,titleSite,urlSite, apiId, apiUrl } from "../../utils";
import { useRouter } from "next/router";
import ContentHeader from '../../components/ContentHeader';
export default function aluguel(props) {
    const router = useRouter();
    
    return (
        <>
            <ContentHeader title="Resultado da Busca" noSearch={true} routes={props} />
            <ListImoveis finalidadePagina={props.rota} />
        </>
    )
}

