interface PropsMain{
    children?:any
}
export default function Main(props:PropsMain){
    return (
        <main>
            {props.children}
        </main>
    )
}