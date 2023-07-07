import "./App.css";
import { cloneElement, useEffect, useRef, useState } from "react";
import bubbleSort from "./sorts/bubble";
import insertionSort from "./sorts/insertion";
import selectionSort from "./sorts/selection";
import quickSort from "./sorts/quick";

function App() {
  const speed = 300;
  const [divSizes, setDivSizes] = useState([]);
  const [divs, setDivs] = useState([]);

  const [arSize,setArSize] = useState(20);

  const generateDivSizes = () => {
    const newDivSizes = [];
    const newDivs = [];
    
    for (let i = 0; i < arSize; i++) {
      const size = Math.floor(Math.random() * arSize) + 10;
      newDivSizes.push(size);
      
      const div = (
        <div
          key={i}
          style={{
            margin: `0% ${0.1}%`,
            backgroundColor: "blue",
            width: `${100 / arSize - 2 * 0.1}%`,
            height: `${size}%`,
          }}
        ></div>
      );
      
      newDivs.push(div);
    }
    setDivSizes(newDivSizes);
    setDivs(newDivs);
  };
  
  const generateNearlySorted = () => {
    const newDivSizes = [];
    const newDivs = [];
    for (let i = 0; i < arSize; i++) {
      const size = Math.floor(Math.random() * arSize) + 10;
      newDivSizes.push(size);
    }
    newDivSizes.sort((a, b) => a - b);

    const numberOfRandoms = arSize * 0.2;

    for (let i = 0; i < numberOfRandoms; i++) {
      newDivSizes[Math.floor(Math.random() * arSize) + 1] =
        Math.floor(Math.random() * arSize/2) + 1;
    }

    for (let i = 0; i < arSize; i++) {
      const size = newDivSizes[i];
      const div = (
        <div
          key={i}
          style={{
            margin: `0% ${0.1}%`,
            backgroundColor: "blue",
            width: `${100 / arSize - 2 * 0.1}%`,
            height: `${size}%`,
          }}
        ></div>
      );

      newDivs.push(div);
    }

    setDivSizes(newDivSizes);
    setDivs(newDivs);
  }

  useEffect(() => {
    generateDivSizes();
  }, []);

  var delay_time = 10000 / (Math.floor(arSize / 10) * speed);
  var c_delay = 0;

  const div_update = (cont, height, color) => {
    window.setTimeout(function () {
      
      const updatedStyle = {
        margin: `0% ${0.1}%`,
        width: `${100 / arSize - 2 * 0.1}%`,
        height: `${height}%`,
        backgroundColor: color,
      };

      setDivs((prevDivs) => {
        const newDivs = [...prevDivs];
        console.log(prevDivs)
        const index = newDivs.findIndex((div) => div.key === cont?.key);
        if (index !== -1) {
          newDivs[index] = cloneElement(newDivs[index], {
            style: updatedStyle,
          });
        }
        return newDivs;
      });

    }, (c_delay += delay_time));
  }

  const onBubbleSort = () => {
    bubbleSort(arSize, divSizes, divs, div_update);
  };

  const onInsertionSort = () => {
    insertionSort(arSize, divSizes, divs, div_update);
  };

  const onSelectionSort = () => {
    selectionSort(arSize, divSizes, divs, div_update);
  };

  const onQuickSort = () => {
    quickSort(divSizes, divs, div_update, 0, arSize-1);
  };


  return (
    <>
      <header>
        <nav>
          <div className="array-inputs">
            <p>Generate New Array</p>
            
            <div className="array-size">
              <button className={arSize==20&&"highlighted"} 
                onClick={() => setArSize(20)}>Small Array</button>
              <button className={arSize==80&&"highlighted"} 
                onClick={() => setArSize(80)}>Large Array</button>
            </div>

            <div className="array-type">
              <button onClick={() => generateDivSizes()}>Random Array</button>
              <button onClick={() => generateNearlySorted()}>Nearly Sorted Array</button>
            </div>
            
          </div>

          <div className="header-right">
            <p className="nav-heading">Sorting Visualizer</p>

            <div className="algos">
              <button onClick={() => onBubbleSort()}>Bubble</button>
              <button onClick={() => onInsertionSort()}>Insertion</button>
              <button onClick={() => onSelectionSort()}>Selection</button>
              <button onClick={() => onQuickSort()}>Quick</button>
            </div>
          </div>
        </nav>
      </header>

      <section>

        <div id="array_container">{divs}</div>

      </section>
    </>
  );
}

export default App;
