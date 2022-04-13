import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import Main from "../../components/layout/Main";
import styles from '../../styles/Forms.module.css'
import { PlusIcon, PhotoIcon } from '../../components/Icons'
export default function Novo() {
    return (
        <Layout>
            <Header hiddenBanner={true} />
            <Main className="bg-zinc-100 lg:px-36 xl:px-72">
              <form className={`${styles.form}`}>
                  <div className="flex gap-5 items-center">
                    <FormInput type="file" title="" placehold="Adicionar uma imagem para o produto" name="imagem" 
                      className="" formGroup="input__file md:basis-72">
                      <span className="md:hidden mt-12 absolute  text-gray-400">{PlusIcon}</span>
                      <span className="mt-14 hidden md:flex absolute text-gray-400">{PhotoIcon}</span>
                      <p className="mt-24 md:hidden text-gray-400 ">Adicionar imagem para o produto</p>
                      <p className="hidden md:flex mt-12 text-gray-400 p-10 text-center">Arraste para adicionar imagem para o produto</p>
                    </FormInput>
                    <p className="hidden md:flex">Ou</p>
                    <Button title="Procure no seu tablet" type="outline" className="hidden h-12 px-5 md:block md:basis- lg:hidden"/>
                    <Button title="Procure no seu computador" type="outline" className="hidden h-12 px-5 lg:block basis-72"/>
                  </div>
                  <FormInput type="text" title="Nome do Produto:" placehold="produto xyz...." name="nome"/> 
                  <FormInput type="text" title="Preço do Produto:" placehold="R$00,00" name="preco" />
                  <FormInput type="textarea" title="Descrição do Produto:" placehold="descrição..." name="descricao" />
                  <Button type="primary" title="Adicionar produto" className="w-full py-4"/>
              </form>
            </Main>
            <Footer />
        </Layout>
    );
}