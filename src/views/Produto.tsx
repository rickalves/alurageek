import CardsProdutos from "../components/CardsProdutos";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import Section from "../components/layout/Section";
import ProdutoDesc from "../components/ProdutoDesc";
import produtos from "../api/Produtos.json"
import { useParams } from "react-router-dom"

export default function Produto(props: any){
    const produtosBase = Array.from(produtos)
    let params = useParams()
    const produtoId = produtosBase.filter(produto => produto.id === Number(params.productId))
    // console.log(produtoId)
    return (
        <Layout>
            <Header hiddenBanner={true} />
            <Main>
                <Section hiddenLink={true} className="p-0">
                    <ProdutoDesc produto={produtoId} />
                </Section>
            </Main>
            <Footer />
        </Layout>
    )
}