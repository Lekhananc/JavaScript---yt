const body = document.querySelector('body');

const buttons = document.querySelectorAll('.button');

// buttons.forEach((button)=>{
//   console.log(button);
// })

buttons.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    let color = e.target.id;  //here color holds the value of the id og the clicked(target) element
    switch (color) {
      case 'grey':
        document.body.style.backgroundColor = 'grey';
        break;
      case 'white':
        document.body.style.backgroundColor = 'white';
        break;
      case 'blue': 
        document.body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        document.body.style.backgroundColor = 'yellow';
        break;
    }
  });
});
