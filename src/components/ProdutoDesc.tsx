
interface Produto {
    id: number
    titulo: string
    preco: string
    imageUrl: string
    categoria: string
    descricao: string
}
interface PropsProduct {
    produto:Produto 
}

export default (props: PropsProduct) => {
    if(props.produto){
        return (
              <>
                <div className={`h-72 md:h-44 lg:h-96 overflow-hidden flex items-center col-span-full md:col-span-4 lg:col-span-6`}>
                    <img
                        src={require(`../assets/images${props.produto.imageUrl}`)}
                        alt="imagem do produto"
                        className='h-auto w-full'
                    />
                </div>
                <div className={`produto__descricao p-4 md:p-0 col-span-full md:col-span-8 xl:col-span-6 xl:justify-center xl:flex xl:flex-col`}>
                    <h1 className='text-2xl xl:text-6xl font-semibold'>{props.produto.titulo}</h1>
                    <h2 className="text-lg font-semibold xl:text-2xl">{props.produto.preco}</h2>
                    <p>{props.produto.descricao}</p>
                </div>
            </>
        )
    }else return <></>
    
}