import Button from "../components/Button"
import FormInput from "../components/FormInput"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Layout from "../components/layout/Layout"
export default (props: any) => {
    return (
        <Layout>
            <Header hiddenBanner={true} />
            <section className="flex flex-col gap-y-4 items-center py-20 px-10 bg-zinc-100">
                <h1 className="font-bold text-lg">Iniciar Sessão</h1>
                <form action="" className="w-full md:w-96 xl:w-1/3 flex flex-col gap-y-2">
                    <FormInput title="Email" placehold="Escreva seu email" type="text" className="h-11" 
                        formGroup='border-b-2 border-solid border-gray-400' hiddenLabel={true} name="usuario" />
                    <FormInput title="Senha" placehold="Escreva sua senha" type="password" className="h-11" 
                        formGroup='border-b-2 border-solid border-gray-400' hiddenLabel={true} name="senha" />
                    <Button title="Entrar" type="primary" className="w-full h-11 lg:mx-auto"/>
                </form>
            </section>
            <Footer />
        </Layout>
    )
}