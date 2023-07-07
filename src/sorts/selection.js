
const selectionSort = (arSize, divSizes, divs, div_update) => {
  
      for (var i = 0; i < arSize - 1; i++) {
        div_update(divs[i], divSizes[i], "red");
  
        let index_min = i;
  
        for (var j = i + 1; j < arSize; j++) {
          div_update(divs[j], divSizes[j], "yellow");
  
          if (divSizes[j] < divSizes[index_min]) {
            if (index_min !== i) {
              div_update(divs[index_min], divSizes[index_min], "blue");
            }
            index_min = j;
            div_update(divs[index_min], divSizes[index_min], "red");
          } else {
            div_update(divs[j], divSizes[j], "blue");
          }
        }
  
        if (index_min !== i) {
          var temp = divSizes[index_min];
          divSizes[index_min] = divSizes[i];
          divSizes[i] = temp;
  
          div_update(divs[index_min], divSizes[index_min], "red");
          div_update(divs[i], divSizes[i], "red");
          div_update(divs[index_min], divSizes[index_min], "blue");
        }
        div_update(divs[i], divSizes[i], "green");
      }
      div_update(divs[i], divSizes[i], "green");
    };

    export default selectionSort;

