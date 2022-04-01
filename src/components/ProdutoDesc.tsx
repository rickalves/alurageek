interface PropsProduct {
    produto: Array<any>
}

export default (props: PropsProduct) => {
    return (
        <div className={`produto__image col-span-12`}>
            <div className={`h-72 overflow-hidden flex items-center`}>
                <img
                    src={require(`../assets/images${props.produto.at(0).imageUrl}`)}
                    alt="imagem do produto"
                    className='h-auto w-full'
                />
            </div>
            <div className={`produto__descricao p-4`}>
                <h1 className='text-2xl font-semibold'>{props.produto.at(0).titulo}</h1>
                <h2 className="text-lg font-semibold">{props.produto.at(0).preco}</h2>
                <p>{props.produto.at(0).descricao}</p>
            </div>
        </div>
    )
}