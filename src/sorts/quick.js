
  const quickPartition = (divSizes, divs, div_update, start, end) => {
    var i = start + 1;
    var piv = divSizes[start]; //make the first element as pivot element.
    div_update(divs[start], divSizes[start], "yellow"); //Color update

    for (var j = start + 1; j <= end; j++) {
      if (divSizes[j] < piv) {
        div_update(divs[j], divSizes[j], "yellow"); //Color update

        div_update(divs[i], divSizes[i], "red"); //Color update
        div_update(divs[j], divSizes[j], "red"); //Color update

        let temp = divSizes[i];
        divSizes[i] = divSizes[j];
        divSizes[j] = temp;

        div_update(divs[i], divSizes[i], "red"); //Height update
        div_update(divs[j], divSizes[j], "red"); //Height update

        div_update(divs[i], divSizes[i], "blue"); //Height update
        div_update(divs[j], divSizes[j], "blue"); //Height update

        i += 1;
      }
    }
    div_update(divs[start], divSizes[start], "red"); //Color update
    div_update(divs[i - 1], divSizes[i - 1], "red"); //Color update

    let temp = divSizes[start]; //put the pivot element in its proper place.
    divSizes[start] = divSizes[i - 1];
    divSizes[i - 1] = temp;

    div_update(divs[start], divSizes[start], "red"); //Height update
    div_update(divs[i - 1], divSizes[i - 1], "red"); //Height update

    for (var t = start; t <= i; t++) {
      div_update(divs[t], divSizes[t], "green"); //Color update
    }

    return i - 1; //return the position of the pivot
  };

  const quickSort = (divSizes, divs, div_update, start, end) => {

    if (start < end) {
      //stores the position of the pivot element
      var piv_pos = quickPartition(divSizes, divs, div_update, start, end);
      quickSort(divSizes, divs, div_update, start, piv_pos - 1); //sorts the left side of pivot.
      quickSort(divSizes, divs, div_update, piv_pos + 1, end); //sorts the right side of pivot.
    }
  };

  export default quickSort;