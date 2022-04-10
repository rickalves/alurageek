import CardsProdutos from "../components/CardsProdutos";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import Section from "../components/layout/Section";
import ProdutoDesc from "../components/ProdutoDesc";
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react";

interface Produtos {
  id: number
  titulo: string
  preco: string
  imageUrl: string
  categoria: string
  descricao: string
}

export default function Produto(props: any) {
  const url = "http://localhost:3004/produtos"
  const [produtos, setProdutos] = useState<Produtos[]>([])
  const params = useParams()
  const produtoId = getProdutoId(Number(params.productId))
  const produtosSimilares = getProdutosSimilares(produtoId)

  useEffect(() => {
    async function getProdutos(url: string) {
      const resp = await axios.get(url)
      setProdutos(resp.data)
    }
    getProdutos(url)
  }, [])


  function getProdutoId(id: number): Produtos {
    const produtosBase = Array.from(produtos) as Produtos[]
    return produtosBase.find(produto => produto.id === id) as Produtos
  }

  function getProdutosSimilares(produtoId: Produtos): Array<Produtos> {
    let produtosSimilares = produtos.filter(
      produto => produto.categoria === produtoId.categoria
        && produto.id !== produtoId.id
    )

    let outroProdutos = produtos.filter(
      produto => produto.categoria !== produtoId.categoria
        && produto.id !== produtoId.id
    )
    if(outroProdutos.length > 0)
         produtosSimilares.push(outroProdutos.shift() as Produtos)

    return produtosSimilares
  }
  return (
    <Layout>
      <Header hiddenBanner={true} />
      <Main>
        <Section hiddenLink={true} hiddenTitulo={true} className="p-0 md:p-6 bg-stone-100">
          <ProdutoDesc produto={produtoId} />
        </Section>
        <Section titulo="Produtos Similares" hiddenLink={true} fullTitulo={true} className="p-5 md:p-6 bg-stone-100">
          {/* {renderizarProdutosSimilares(produtoId)} */}
          {
            produtosSimilares.map((produtoSimilar, key) => {
              if (key > 3) {
                return <CardsProdutos key={produtoSimilar.id} produto={produtoSimilar} className="hidden xl:flex" />
              } else {
                return <CardsProdutos key={produtoSimilar.id} produto={produtoSimilar} />
              }
            })
          }
        </Section>
      </Main>
      <Footer />
    </Layout>
  )
}