import "./App.css";
import { cloneElement, useEffect, useRef, useState } from "react";
import bubbleSort from "./sorts/bubble";
import insertionSort from "./sorts/insertion";
import selectionSort from "./sorts/selection";
import quickSort from "./sorts/quick";
import countingSort from "./sorts/counting";

function App() {
  const inpAs = useRef();
  const speed = 500;
  const [divSizes, setDivSizes] = useState([]);
  const [divs, setDivs] = useState([]);

  const [arSize] = useState(20); //je li ovo smeta za sortiranje velikih nizova

  const generateDivSizes = (arSize) => {
    const newDivSizes = [];
    const newDivs = [];
    
    for (let i = 0; i < arSize; i++) {
      const size = Math.floor(Math.random() * 0.5 * (80 - 20)) + 10;
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
  
  useEffect(() => {
    generateDivSizes(arSize);
  }, [arSize, inpAs]);

  var delay_time = 10000 / (Math.floor(arSize / 10) * speed);
  var c_delay = 0;

  function div_update(cont, height, color) {
    window.setTimeout(function () {
      console.log(cont);

      const updatedStyle = {
        margin: `0% ${0.1}%`,
        width: `${100 / arSize - 2 * 0.1}%`,
        height: `${height}%`,
        backgroundColor: color,
      };

      setDivs((prevDivs) => {
        const newDivs = [...prevDivs];
        const index = newDivs.findIndex((div) => div.key === cont.key);
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
    quickSort(divSizes, divs, div_update, 0, arSize-1); //skuzit zasto puca
  };

  const onCountingSort = () => {
    countingSort(arSize, divSizes, divs, div_update); //treba dovrsit
  };

  return (
    <>
      <header>
        <nav>
          <div class="array-inputs">
            <p>Generate New Array</p>
            
            <div class="array-size">
              <button onClick={() => generateDivSizes(20)}>Small Array</button>
              <button onClick={() => generateDivSizes(80)}>Large Array</button> {/* ne sortira se dobro mozda zbog linije 15 */}
            </div>
            
          </div>

          <div class="header_right">
            <p class="nav-heading">Sorting Visualizer</p>

            <div class="algos">
              <button onClick={() => onBubbleSort()}>Bubble</button>
              <button onClick={() => onInsertionSort()}>Insertion</button>
              <button onClick={() => onSelectionSort()}>Selection</button>
              <button onClick={() => onQuickSort()}>Quick</button>
              <button onClick={() => onCountingSort()}>Counting</button>
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
