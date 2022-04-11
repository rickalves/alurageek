import CardsProdutos from "../../components/CardsProdutos";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import Main from "../../components/layout/Main";
import Section from "../../components/layout/Section";
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react";
import Button from "../../components/Button";

interface Produtos {
  id: number
  titulo: string
  preco: string
  imageUrl: string
  categoria: string
  descricao: string
}

export default function Produtos(props: any) {
  const url = "http://localhost:3004/produtos"
  const [produtos, setProdutos] = useState<Produtos[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getProdutos(url: string) {
      const resp = await axios.get(url)
      setProdutos(resp.data)
    }
    getProdutos(url)
  }, [])

    return (
    <Layout>
      <Header hiddenBanner={true} />
      <Main>
        <Section titulo="Todos os produtos" hiddenLink={true} fullTitulo={true} className="p-5 md:px-6 md:pt-10 bg-stone-100">
           <div className="col-span-full  flex md:justify-end md:-mt-14">
              <Button title="Adicionar produto" type="primary" className="h-12" onClick={(e) =>{
                navigate("/produtos/novo")
              }} />
           </div>
           
          {
            produtos.map(produto => <CardsProdutos key={produto.id} produto={produto} />)
          }
        </Section>
      </Main>
      <Footer />
    </Layout>
  )
  
}

  
  
