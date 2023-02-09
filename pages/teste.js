import { useRouter } from 'next/router'
export default function teste({data}){
    const router = useRouter()
    return(
        <div onClick={() => router.push('home')}>
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