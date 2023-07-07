
    const insertionSort = (arSize, divSizes, divs, div_update) => {

      for (var i = 0; i < arSize; i++) {
        div_update(divs[i], divSizes[i], "yellow");
  
        var key = divSizes[i];
        var j = i - 1;
        while (j >= 0 && divSizes[j] > key) {
          div_update(divs[j], divSizes[j], "red");
          div_update(divs[j + 1], divSizes[j + 1], "red");
  
          divSizes[j + 1] = divSizes[j];
  
          div_update(divs[j], divSizes[j], "red");
          div_update(divs[j + 1], divSizes[j + 1], "red");
  
          div_update(divs[j], divSizes[j], "blue");
          if (j === i - 1) {
            div_update(divs[j + 1], divSizes[j + 1], "yellow");
          } else {
            div_update(divs[j + 1], divSizes[j + 1], "blue");
          }
          j -= 1;
        }
        divSizes[j + 1] = key;
  
        for (var t = 0; t < i; t++) {
          div_update(divs[t], divSizes[t], "green");
        }
      }
      div_update(divs[i - 1], divSizes[i - 1], "green");
    };

    export default insertionSort;