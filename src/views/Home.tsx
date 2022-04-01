import CardsProdutos from "../components/CardsProdutos"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Layout from "../components/layout/Layout"
import Main from "../components/layout/Main"
import Section from "../components/layout/Section"
import produtos from "../api/Produtos.json"

export default () => {
    const produtosBase = Array.from(produtos)
    return (
        <Layout>
            <Header />
            <Main>
                <Section titulo="Star Wars">
                    <CardsProdutos categoria="starwars" produtos={produtosBase} />
                </Section>
                <Section titulo="Consoles">
                    <CardsProdutos categoria="consoles" produtos={produtosBase} />
                </Section>
                <Section titulo="Diversos">
                    <CardsProdutos categoria="diversos" produtos={produtosBase} />
                </Section>
            </Main>
            <Footer />
        </Layout>
    )
}
