interface PropsSection{
    children?:any
    titulo: string
}
export default function Section(props:PropsSection){
    return (
        <section>
          <h1>{props.titulo}</h1>
          <a href="#">Ver Tudo</a>
          {props.children}
        </section>
    )
}