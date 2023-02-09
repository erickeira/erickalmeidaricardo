export default function teste({data}){
    return(
        <div>
            {data}
        </div>
    )
}

export async function getServerSideProps(){
    let data ="server side"
    return {
        props : { data }
    }
}