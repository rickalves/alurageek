import CardProduto from '../components/CardProduto';
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
            </Section>
          </Main>
      </Layout>
    </div>
  );
}

export default App;
