export default function LinkItem({children, source}:{children:React.ReactNode ,source:string}){
    return(
        <>
            <li className="flex w-full">
                <a className="bg-gray-50 hover:bg-blue-500 hover:text-white hover:text-2xl p-4 rounded-3xl w-full flex justify-center text-xl" href={source}>{children}</a>
            </li>
        </>
    )
}