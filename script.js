function mudaCor(){
   return mudaClasse(), mudaTexto();
   
}
function mudaClasse(){
    botao.classList.toggle(darkModelClass);
    titulo.classList.toggle(darkModelClass);
    corpo.classList.toggle(darkModelClass);
    footer.classList.toggle(darkModelClass);  
}
function mudaTexto(){
    if(corpo.classList.contains(darkModelClass)){
        botao.innerHTML = "PAGINA CLARA"
        titulo.innerHTML = "PAGINA ESCURA"
    }else{
        botao.innerHTML = "PAGINA ESCURA"
        titulo.innerHTML = "PAGINA CLARA"
    }
}


const darkModelClass = 'dark-model';
const botao = document.getElementById('mode-selector');
const titulo = document.getElementById('page-title');
const corpo = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];  

botao.addEventListener('click', mudaCor);