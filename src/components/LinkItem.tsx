export default function LinkItem({children, source}:{children:React.ReactNode ,source:string}){
    return(
        <>
            <li className="flex w-full">
                <a className="
                bg-[#e3c097]
                text-red-900 
                border-2
                border-[#e3c097]
                hover:bg-red-900 
                hover:text-[#e3c097] 
                hover:border-[#e3c097]
                p-4  
                w-full 
                flex 
                justify-center 
                text-xl" href={source}>{children}</a>
            </li>
        </>
    )
}
