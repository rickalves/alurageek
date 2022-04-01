interface PropsProduct {
    produto: any
}

export default (props: PropsProduct) => {
    return (
        <div className={`produto__image col-span-12`}>
            <div className={`h-48 overflow-hidden flex items-center`}>
                <img
                    src={require(`../assets/images${props.produto.imageUrl}`)}
                    alt="imagem do produto"
                    className='h-auto w-full'
                />
            </div>
            <div className={`produto__descricao p-4`}>
                <h1 className='text-2xl font-semibold'>{props.produto.titulo}</h1>
                <h2 className="text-lg font-semibold">{props.produto.preco}</h2>
                <p>{props.produto.descricao}</p>
            </div>
        </div>
    )
}