import React from 'react';
import './App.css';
import About from './container/about'

function App() {
  const arr = [
    {
      img: "/assets/wizard.png",
      title: "best IT speakers",
      description: "best the best blabla"
    },
    {
      img: "/assets/wizard.png",
      title: "Decode",
      description: "the best school"
    },
    {
      img: "/assets/wizard.png",
      title: "Almaty",
      description: "Cupiditate, magnam laboriosam"
    },
    {
      img: "/assets/wizard.png",
      title: "Astana",
      description: " Lorem ipsum dolor sit"
    },
    {
      img: "/assets/wizard.png",
      title: "Shymkent",
      description: "city of Kazakhstan"
    },
    {
      img: "/assets/wizard.png",
      title: "Taraz",
      description: "amet consectetur adipisicing elit"
    }
  ];

  const items = arr.map((item, i) => <div onClick={() => handleBlock(item.title)} className="block" key={i}><img className="icons" src={item.img}></img><h2>{item.title}</h2><p>{item.description}</p></div>)

  const handleBlock = (title) => {
    alert(title);
  }

  const handleClick = () => {

  }

  const handKeyUp = e => {
    console.log(e.target.value)
  }

  return (

    <div className="main">
      {items}
      <button onClick={handleClick}>Button click me</button>
      <input onKeyUp={handKeyUp}></input>
      <About />
    </div>
  );
}

export default App;
