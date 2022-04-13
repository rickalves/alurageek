interface PropsMain{
    children?:any
    className?: string
}
export default function Main(props:PropsMain){
    return (
        <main className={`col-span-12 ${props.className}`}>
            {props.children}
        </main>
    )
}