

const selectionSort = (arSize, divSizes, divs, div_update) => {
    //   setTimeWorst("O(N^2)");
    //   setTimeAverage("Θ(N^2)");
    //   setTimeBest("Ω(N^2)");
  
      for (var i = 0; i < arSize - 1; i++) {
        div_update(divs[i], divSizes[i], "red"); //Color update
  
        let index_min = i;
  
        for (var j = i + 1; j < arSize; j++) {
          div_update(divs[j], divSizes[j], "yellow"); //Color update
  
          if (divSizes[j] < divSizes[index_min]) {
            if (index_min !== i) {
              div_update(divs[index_min], divSizes[index_min], "blue"); //Color update
            }
            index_min = j;
            div_update(divs[index_min], divSizes[index_min], "red"); //Color update
          } else {
            div_update(divs[j], divSizes[j], "blue"); //Color update
          }
        }
  
        if (index_min !== i) {
          var temp = divSizes[index_min];
          divSizes[index_min] = divSizes[i];
          divSizes[i] = temp;
  
          div_update(divs[index_min], divSizes[index_min], "red"); //Height update
          div_update(divs[i], divSizes[i], "red"); //Height update
          div_update(divs[index_min], divSizes[index_min], "blue"); //Color update
        }
        div_update(divs[i], divSizes[i], "green"); //Color update
      }
      div_update(divs[i], divSizes[i], "green"); //Color update
    };

    export default selectionSort;