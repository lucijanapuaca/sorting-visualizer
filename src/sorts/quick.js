
  const quickPartition = (divSizes, divs, div_update, start, end) => {
    var i = start + 1;
    var piv = divSizes[start]; //make the first element as pivot element.
    div_update(divs[start], divSizes[start], "yellow"); 

    for (var j = start + 1; j <= end; j++) {
      if (divSizes[j] < piv) {
        div_update(divs[j], divSizes[j], "yellow"); 

        div_update(divs[i], divSizes[i], "red"); 
        div_update(divs[j], divSizes[j], "red"); 

        let temp = divSizes[i];
        divSizes[i] = divSizes[j];
        divSizes[j] = temp;

        div_update(divs[i], divSizes[i], "red");
        div_update(divs[j], divSizes[j], "red");

        div_update(divs[i], divSizes[i], "blue");
        div_update(divs[j], divSizes[j], "blue");

        i += 1;
      }
    }
    div_update(divs[start], divSizes[start], "red"); 
    div_update(divs[i - 1], divSizes[i - 1], "red"); 

    let temp = divSizes[start]; //put the pivot element in its proper place.
    divSizes[start] = divSizes[i - 1];
    divSizes[i - 1] = temp;

    div_update(divs[start], divSizes[start], "red");
    div_update(divs[i - 1], divSizes[i - 1], "red");

    for (var t = start; t <= i; t++) {
      div_update(divs[t], divSizes[t], "green"); 
    }

    return i - 1; //return the position of the pivot
  };

  const quickSort = (divSizes, divs, div_update, start, end) => {

    if (start < end) {
      var piv_pos = quickPartition(divSizes, divs, div_update, start, end);
      quickSort(divSizes, divs, div_update, start, piv_pos - 1);
      quickSort(divSizes, divs, div_update, piv_pos + 1, end); 
    }
  };

  export default quickSort;