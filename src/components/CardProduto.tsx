import image from '../assets/images/produtos__starwars/unsplash_6FDXGY9J6y4.jpg'
interface CardProps {
    children?: any
    titulo: string
    imageUrl: string
    preco: string
    className?: string
}
export default function CardProduto(props: CardProps) {
    return (
        <div className={`flex flex-col gap-1 col-span-6 md:col-span-3 xl:col-span-2 ${props.className}`}>
            <img
                src={require(`../assets/images${props.imageUrl}`)}
                alt="imagem do produto"
                className='h-44 w-100'
            />
            <h3 className='text-sm'>{props.titulo}</h3>
            <h3 className="font-bold">{props.preco}</h3>
            <a href="#" className="text-sm font-bold text-blue-500">Ver produto</a>
        </div>
    )
}