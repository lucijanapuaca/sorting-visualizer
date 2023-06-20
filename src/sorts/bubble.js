
const bubbleSort = (arSize, divSizes, divs, div_update) => {

  for (var i = 0; i < arSize - 1; i++) {
    for (var j = 0; j < arSize - i - 1; j++) {
      div_update(divs[j], divSizes[j], "yellow"); //Color update

      if (divSizes[j] > divSizes[j + 1]) {
        div_update(divs[j], divSizes[j], "red"); //Color update
        div_update(divs[j + 1], divSizes[j + 1], "red"); //Color update

        var temp = divSizes[j];
        divSizes[j] = divSizes[j + 1];
        divSizes[j + 1] = temp;

        div_update(divs[j], divSizes[j], "red"); //Height update
        div_update(divs[j + 1], divSizes[j + 1], "red"); //Height update
      }
      div_update(divs[j], divSizes[j], "blue"); //Color update
    }
    div_update(divs[j], divSizes[j], "green"); //Color update
  }
  div_update(divs[0], divSizes[0], "green"); //Color update
};

export default bubbleSort;
