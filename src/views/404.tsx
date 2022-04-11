interface PageProps {
    type: string
}

export default function NotFound(props: PageProps) {

    if (props.type === "pages") {
        return (
            <div>
                <p>Página não encontrado!</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>Produto não encontrado!</p>
            </div>
        )
    }
}