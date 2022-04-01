interface PropsProduct {
    produto: Array<any>
}

export default (props: PropsProduct) => {
    return (
        <div className={`produto__image grid grid-cols-12 col-span-12`}>
            <div className={`h-72 overflow-hidden flex items-center col-span-full md:col-span-4 xl:col-span-6 md:h-44 xl:h-96`}>
                <img
                    src={require(`../assets/images${props.produto.at(0).imageUrl}`)}
                    alt="imagem do produto"
                    className='h-auto w-full'
                />
            </div>
            <div className={`produto__descricao p-4 md:py-0 col-span-full md:col-span-8 xl:col-span-6 xl:justify-center xl:flex xl:flex-col`}>
                <h1 className='text-2xl xl:text-6xl font-semibold'>{props.produto.at(0).titulo}</h1>
                <h2 className="text-lg font-semibold xl:text-2xl">{props.produto.at(0).preco}</h2>
                <p>{props.produto.at(0).descricao}</p>
            </div>
        </div>
    )
}