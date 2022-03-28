import CardProduto from '../components/CardProduto';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Section from '../components/Section';

function App() {
  return (
    <div className="App">
      <Layout>
          <Header />
          <Main>
            <Section titulo="Star Wars">
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__starwars/unsplash_6FDXGY9J6y4.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__starwars/unsplash_epRFE_hBNjo.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__starwars/unsplash_KeGToDVN0l4.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__starwars/unsplash_4OHkK555s1A.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__starwars/unsplash_R8L1l9RN198.jpg'
                className='hidden xl:flex'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__starwars/unsplash_1VV1MRafd7A.jpg'
                className='hidden xl:flex'
              />
            </Section>
            <Section titulo="Consoles">
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__consoles/unsplash_0POwK6iAiRQ.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__consoles/unsplash_caNzzoxls8Q.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__consoles/unsplash_ZV7lnfyQLmA.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__consoles/unsplash_wa5z9o9fgjw.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__consoles/unsplash_Zjn4dT993-g.jpg'
                className='hidden xl:flex'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__consoles/unsplash_k-xYhI3-gJM.jpg'
                className='hidden xl:flex'
              />
            </Section>
            <Section titulo="Diversos">
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__diversos/unsplash_fMP-oCze3AY.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__diversos/unsplash_bUgaIaZysH0.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__diversos/unsplash_sYVY_ZKwaxU.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__diversos/unsplash_jMT6BrgBuXU.jpg'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__diversos/unsplash_MxVkWPiJALs.jpg'
                className='hidden xl:flex'
              />
              <CardProduto 
                titulo='Produto XYZ'  
                preco='R$ 60,00' 
                imageUrl='/produtos__diversos/unsplash_r27umXAelDc.jpg'
                className='hidden xl:flex'
              />
            </Section>
          </Main>
          <Footer />
      </Layout>
    </div>
  );
}

export default App;
