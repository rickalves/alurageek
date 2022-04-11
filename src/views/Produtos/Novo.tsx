import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import Main from "../../components/layout/Main";
import styles from '../../styles/Forms.module.css'
export default function Novo() {
    return (
        <Layout>
            <Header hiddenBanner={true} />
            <Main className="bg-zinc-100">
              <form className={`${styles.form}`}>
                  <FormInput type="file" title="" placehold="Adicionar uma imagem para o produto" name="imagem" 
                    className="md:col-span-4" />
                  <span className="-mt-14 ml-10 md:ml-56">Adicionar imagem para o produto</span>
                  <FormInput type="text" title="Nome do Produto:" placehold="produto xyz...." name="nome"/> 
                  <FormInput type="text" title="Preço do Produto:" placehold="R$00,00" name="preco" />
                  <FormInput type="textarea" title="Descrição do Produto:" placehold="descrição..." name="descricao" />
                  <Button type="primary" title="Adicionar produto" className="w-full"/>
              </form>
            </Main>
            <Footer />
        </Layout>
    );
}