import { Link } from "react-router-dom"

interface CardsProps {
    produtos: any
    categoria: string
}
export default function CardsProdutos(props: CardsProps) {
    const produtosCategoria = props.produtos.filter((produto: any) => produto.categoria === props.categoria)
    return (
        produtosCategoria.map((produto: any, id:number) => {
            return (
                <div key={produto.id} className={`flex flex-col gap-1 col-span-6 md:col-span-3 xl:col-span-2 
                            ${id > 3 ? ' hidden xl:flex' : ''}`}>
                    <img
                        src={require(`../assets/images${produto.imageUrl}`)}
                        alt="imagem do produto"
                        className='h-44 w-100'
                    />
                    <h3 className='text-sm'>{produto.titulo}</h3>
                    <h3 className="font-bold">{produto.preco}</h3>
                    <Link to={`produto/${produto.id}`}>
                         <span className="text-sm font-bold text-blue-500">Ver produto</span>
                    </Link>
                </div>
            )
        })
    )
}