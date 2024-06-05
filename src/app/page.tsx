
import "./page.module.css";
import '../app/bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Slider } from './components/Slider'
import { Hero } from './components/Hero';



export default function Home() {
  return (

    <div>

  
   <Hero />
      <Slider/>
     
     

    </div>
  );
}
