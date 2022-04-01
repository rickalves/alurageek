import CardsProdutos from "../components/CardsProdutos"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Layout from "../components/layout/Layout"
import Main from "../components/layout/Main"
import Section from "../components/layout/Section"
import produtos from "../api/Produtos.json"

export default () => {

    function renderizarProdutos(categoria: string) {
        const produtosBase = Array.from(produtos)
        const produtosCategoria = produtosBase.filter(produto => produto.categoria === categoria)
        return produtosCategoria.map((produto, id) => {
            if(id > 3){
               return <CardsProdutos key={produto.id}  produto={produto} className="hidden xl:flex"/>
            }else{
               return <CardsProdutos key={produto.id} produto={produto} />
            }
        })
    }

    return (
        <Layout>
            <Header />
            <Main>
                <Section titulo="Star Wars">
                    {renderizarProdutos("starwars")}
                </Section>
                <Section titulo="Consoles">
                    {renderizarProdutos("consoles")}
                </Section>
                <Section titulo="Diversos">
                    {renderizarProdutos("diversos")}
                </Section>
            </Main>
            <Footer />
        </Layout>
    )
}
