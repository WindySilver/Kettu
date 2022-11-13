import React, { useState } from 'react'
import './App.css'

interface propsit {
  clicked: boolean;
}

const Painettu = (props: propsit) => {
  if(props.clicked === true){
    return (
      <div className="Painettu">
        <p>Tiedotus:</p>
        <p style={{padding: "1%"}}><b>Kiitos, toivottavasti painallus rauhoitti. Parempaa päivänjatkoa! <span style={{color: 'red'}}>:)</span></b></p>
      </div>
    )
  }
  return(null)
}



function App() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
  setClicked(true)
}
  return (
    <div className="Normal">
    <Painettu clicked={clicked} />
    <h1>Kettu-järjestelmän demo</h1>
    <p>Tämä on pienimuotoinen demo Kettu-järjestelmälle. Lisätietoa Ketusta osoitteessa <a href="https://github.com/WindySilver/Kettu">https://github.com/WindySilver/Kettu</a></p>
    <button onClick={handleClick}>Paina tästä jos siltä tuntuu</button>
  </div>
  );
}

export default App;
