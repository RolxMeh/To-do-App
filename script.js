let outputField = document.getElementById('output');
let inputField = document.getElementById('input-field');
let button = document.getElementById('button');

button.addEventListener('click', function(){
  let para = document.createElement('p');
  para.classList.add('output-styling');
  para.innerText = inputField.value;
  outputField.appendChild(para);
  inputField.value = '';
  
  para.addEventListener('click', function(){
    para.style.color ='green';
  })
  
  para.addEventListener('dblclick', function(){
    outputField.removeChild(para);
  })
  
  
})