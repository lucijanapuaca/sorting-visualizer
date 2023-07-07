
const bubbleSort = (arSize, divSizes, divs, div_update) => {

  for (var i = 0; i < arSize - 1; i++) {
    for (var j = 0; j < arSize - i - 1; j++) {
      div_update(divs[j], divSizes[j], "yellow"); 

      if (divSizes[j] > divSizes[j + 1]) {
        div_update(divs[j], divSizes[j], "red"); 
        div_update(divs[j + 1], divSizes[j + 1], "red"); 

        var temp = divSizes[j];
        divSizes[j] = divSizes[j + 1];
        divSizes[j + 1] = temp;
      }
      div_update(divs[j], divSizes[j], "blue"); 
    }
    div_update(divs[j], divSizes[j], "green"); 
  }
  div_update(divs[0], divSizes[0], "green"); 
};

export default bubbleSort;
