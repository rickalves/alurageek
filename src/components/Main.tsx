interface PropsMain{
    children?:any
}
export default function Main(props:PropsMain){
    return (
        <main className="col-span-12">
            {props.children}
        </main>
    )
}