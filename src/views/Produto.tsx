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

    function renderizarProdutosSimilares(categoria: string){
        let produtosSimilares = []
        produtosBase.filter(produto => {
            if(produto.categoria === categoria && produto.id !==  Number(params.productId))
                produtosSimilares.push(produto)
        })

        produtosSimilares.push(produtosBase.filter(
            produto => produto.categoria !== categoria && produto.id !==  Number(params.productId)
        ).pop())
        
        console.log(produtosSimilares)
     
        return produtosSimilares.map((produto, id) => {
            if(id > 3){
               return <CardsProdutos key={produto?.id}  produto={produto} className="hidden xl:flex"/>
            }else{
               return <CardsProdutos key={produto?.id} produto={produto} />
            }
        })
    }
    
    
    return (
        
        <Layout>
            <Header hiddenBanner={true} />
            <Main>
                <Section hiddenLink={true} hiddenTitulo={true} className="p-0 md:p-6 bg-stone-100">
                    <ProdutoDesc produto={produtoId} />
                </Section>
                <Section titulo="Produtos Similares" hiddenLink={true} fullTitulo={true} className="p-0 md:p-6 bg-stone-100">
                    {renderizarProdutosSimilares("starwars")}
                </Section>
            </Main>
            <Footer />
        </Layout>
    )
}