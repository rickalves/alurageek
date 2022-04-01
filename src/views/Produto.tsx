import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";

export default function Produto(props: any){
    return (
        <Layout>
            <Header hiddenBanner={true} />

            <Footer />
        </Layout>
    )
}