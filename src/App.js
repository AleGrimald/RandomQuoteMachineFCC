import './App.css';
import {useEffect, useState} from 'react';
function App() {
  const [quote, setQuote]=useState({});
  const [color, setColor]=useState('FFFFFF');
  const [colorFondo, setColorFondo]= useState('FFFFFF');
  useEffect(()=>{getQuote();},[ ]);

  const getQuote = ()=>{
    fetch('https://api.quotable.io/random')
    .then((response)=>{return response.json()})
    .then((data)=>{
      setQuote({
        text: data.content,
        autor: data.author
      });
      //console.log(data);
    });
    setBackgColor();
  }

  const setBackgColor = () =>{
    const arrColor =[
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
    ];
    let indice = Math.floor(Math.random() * 12);
    let indiceFondo = Math.floor(Math.random() * 12);
    if(indice === indiceFondo){
      indice = Math.floor(Math.random() * 12);
      indiceFondo = Math.floor(Math.random() * 12);
      setColor(arrColor[indice]);
      setColorFondo(arrColor[indiceFondo]);
    }else{
      setColor(arrColor[indice]);
      setColorFondo(arrColor[indiceFondo]);
    }
    
    
  }

  return (
    <div className="App" style={{backgroundColor:colorFondo}}>
      <div id="quote-box" style={{backgroundColor: color}}>
        <div className='container__texto'>
          <p id="text">{quote.text}</p>
          <p id="author">{quote.autor}</p>
        </div>
        
        <div className='container__botones'>
          <a 
            id="tweet-quote" 
            href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+quote.text}>
            Post to twitter
          </a>
          <button className="boton" id="new-quote" onClick={getQuote}>New Quote</button>

        </div>
        
      </div>
    </div>
  );
}

export default App;
