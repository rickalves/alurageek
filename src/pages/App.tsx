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
              
            </Section>
          </Main>
      </Layout>
    </div>
  );
}

export default App;
