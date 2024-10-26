
let string = '';
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(button => {
  button.addEventListener('click', (r) => {
    if (r.target.innerHTML === '=') {
      try {
        string = eval(string);  
        document.querySelector('input').value = string;
      } 
      catch {
        document.querySelector('input').value = 'Error'; 
      }
    } else if (r.target.innerHTML === 'C') {
      string = '';
      document.querySelector('input').value = string;
    } else {
      console.log(r.target);
      string += r.target.innerHTML
      document.querySelector('input').value = string;
    }
  });
});
