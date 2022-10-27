document.querySelector('#boton1').addEventListener('click',()=>{
  setTimeout(()=>{
      document.querySelector('w').classList.add('activo')
  }, 2500);
})
const Promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve('MI PROMESA');
  }, 2500);
  });

document.querySelector('#boton2').addEventListener('click',()=>{
  Promesa
  .then(value => { alert(value) }) 
})

const miPromesa = new Promise((resolve, reject) => {
  let a = true;
  setTimeout(() => {
  return (a) ? resolve('Se encontro Archivo'): reject('No se encontro Archivo');
  }, 2500);
}); 
miPromesa
  .then(value => { console.log(value) })
  .catch(err => { console.log(err) });

const ul = document.querySelector("ul");
const buttonCallback = document.querySelector(".callback");
const buttonCallbackPromises = document.querySelector(".promises");
const buttonCallbackPromises_A_A = document.querySelector(".promises_a_a");
const addLi_and_printResult_w_callback = (value_w_callback, callback) => {
const node = document.createElement("li"); 
const textnode = document.createTextNode(value_w_callback);   
  node.appendChild(textnode);
  
  setTimeout(() => {
    ul.appendChild(node);
    console.log(value_w_callback);
    callback();
  }, Math.floor(Math.random() * 2500) + 1
  );
}

const doAllCallback = () => {
  addLi_and_printResult_w_callback(125, () => {
        addLi_and_printResult_w_callback (015, () => {
          addLi_and_printResult_w_callback (451, () => {
            addLi_and_printResult_w_callback (741, () => {}); 
        });
      });
    });
}

buttonCallback.addEventListener("click", doAllCallback);



const addLi_and_printResult_w_callback_promises = value_w_callback_promises => {
  const node = document.createElement("li"); 
  const textnode = document.createTextNode(value_w_callback_promises);   
  return new Promise(resolve => {
    
    setTimeout(() => {
      node.appendChild(textnode);
      ul.appendChild(node);
      console.log(value_w_callback_promises);
      resolve();
    }, Math.floor(Math.random() * 2500) + 1);
  })
}

const doAllCallbackPromises = () => {
  addLi_and_printResult_w_callback_promises(07)
    .then(() => addLi_and_printResult_w_callback_promises(10))
    .then(() => addLi_and_printResult_w_callback_promises(27))
    .then(() => addLi_and_printResult_w_callback_promises(28))
    .then(() => addLi_and_printResult_w_callback_promises(09))
    .then(() => addLi_and_printResult_w_callback_promises(12))
}

buttonCallbackPromises.addEventListener("click", doAllCallbackPromises);
