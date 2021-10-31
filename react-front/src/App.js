
import './App.css';
import Title from './Title/Title'
import Background from './SVG/Background'
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<script src="js/bootstrap.min.js" crossorigin="anonymous"></script>
function App() {
  return (
    <div className="App">
        <Title/>
        <Background/>
        <Footer/>
    </div>
  );
}

export default App;
