interface PropsSection{
    children?:any
    titulo: string
}
export default function Section(props:PropsSection){
    return (
        <section className="">
          <h1 className="text-2xl font-bold">{props.titulo}</h1>
          <a href="#" className="text-sm">Ver Tudo</a>
          {props.children}
        </section>
    )
}