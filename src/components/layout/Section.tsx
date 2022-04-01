import { ArrowRight } from "../Icons"

interface PropsSection{
    children:any
    titulo?: string
    hiddenLink?: boolean
    className?: string
    hiddenTitulo?:boolean
    fullTitulo?:boolean
}


export default function Section(props:PropsSection){
    return (
        <section className={`grid grid-cols-12 p-4 gap-4 xl:px-36 xl:first-of-type:pt-12 xl:last-of-type:pb-12 ${props.className}`}>
          <h1 className={`text-2xl font-bold ${props.fullTitulo ? 'col-span-full' : 'col-span-8'} ${props.hiddenTitulo ? 'hidden' : ''}`}>{props.titulo}</h1>
          <a href="#" className={`flex justify-end gap-2 items-center text-md font-bold 
          col-span-4 text-blue-500 ${props.hiddenLink ? 'hidden' : ''}`}>
              Ver tudo {ArrowRight}
          </a>
          {props.children}
        </section>
    )
}