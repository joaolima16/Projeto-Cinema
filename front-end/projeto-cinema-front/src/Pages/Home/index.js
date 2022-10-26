import { Link } from 'react-router-dom';
import CardWrapper from '../../Components/Card';
import Footer from '../../Components/Footer';
import './style.css'
export default function Home(){
    return (
      <div className="Container">
        <header className='Header'>
            <h2 className='title'>Cinépolis</h2>
            <button type="button" class="btnTips"><Link to="/lucros">Lucros</Link></button>
            </header>
        <h3 className='subTitle'>Salas disponíveis</h3>
       
        <CardWrapper />
        <Footer />
      </div>
    );
}