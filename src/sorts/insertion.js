
    const insertionSort = (arSize, divSizes, divs, div_update) => {

      for (var j = 0; j < arSize; j++) {
        div_update(divs[j], divSizes[j], "yellow"); //Color update
  
        var key = divSizes[j];
        var i = j - 1;
        while (i >= 0 && divSizes[i] > key) {
          div_update(divs[i], divSizes[i], "red"); //Color update
          div_update(divs[i + 1], divSizes[i + 1], "red"); //Color update
  
          divSizes[i + 1] = divSizes[i];
  
          div_update(divs[i], divSizes[i], "red"); //Height update
          div_update(divs[i + 1], divSizes[i + 1], "red"); //Height update
  
          div_update(divs[i], divSizes[i], "blue"); //Color update
          if (i === j - 1) {
            div_update(divs[i + 1], divSizes[i + 1], "yellow"); //Color update
          } else {
            div_update(divs[i + 1], divSizes[i + 1], "blue"); //Color update
          }
          i -= 1;
        }
        divSizes[i + 1] = key;
  
        for (var t = 0; t < j; t++) {
          div_update(divs[t], divSizes[t], "green"); //Color update
        }
      }
      div_update(divs[j - 1], divSizes[j - 1], "green");
    };

    export default insertionSort;