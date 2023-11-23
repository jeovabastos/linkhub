export default function StackItem({source}:{source:string}){
    return(
        <>
            <img className='block w-12 h-12' src={source}/>
        </>
    )
}