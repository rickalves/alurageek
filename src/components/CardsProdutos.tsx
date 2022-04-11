import { Link, useLocation, useNavigate } from "react-router-dom"
interface Produto {
    id: number
    titulo: string
    preco: string
    imageUrl: string
    categoria: string
    descricao: string
}
interface CardsProps {
    produto: Produto
    className?: string
}
export default function CardsProdutos(props: CardsProps) {
    
            return (
                <div key={props.produto.id} className={`flex flex-col gap-1 col-span-6 md:col-span-3 xl:col-span-2 
                 ${props.className}`}>
                    <img
                        src={require(`../assets/images${props.produto.imageUrl}`)}
                        alt="imagem do produto"
                        className='h-44 w-100'
                    />
                    <h3 className='text-sm'>{props.produto.titulo}</h3>
                    <h3 className="font-bold">{props.produto.preco}</h3>
                    <Link to={'/produtos/'+props.produto.id}>
                         <span className="text-sm font-bold text-blue-500">Ver produto</span>
                    </Link>
                </div>
            )     
}