import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Audience from './components/Audience';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Audience />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
