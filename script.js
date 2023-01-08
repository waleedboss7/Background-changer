let x = 0;
  function change() {
 let colors = ["red","green","blue","pink"];
    document.getElementsByTagName("body")[0].style.backgroundColor = colors[x++];
    if (x > colors.length - 1){
      x = 0;
    }
  }

  
