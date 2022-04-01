import CardsProdutos from "../components/CardsProdutos";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import Section from "../components/layout/Section";
import ProdutoDesc from "../components/ProdutoDesc";
import produtos from "../api/Produtos.json"

export default function Produto(props: any){
    const produtosBase = Array.from(produtos)
   
    return (
        <Layout>
            <Header hiddenBanner={true} />
            <Main>
                <ProdutoDesc produto={produtosBase.at(0)} />
                <Section hiddenLink={true}>
                    {/* <CardsProdutos categoria="starwars" produtos={produtosBase} /> */}
                </Section>
            </Main>
            <Footer />
        </Layout>
    )
}