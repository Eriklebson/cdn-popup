var date = new Date(Date.now())
date.setDate(date.getDate()+180)
console.log(date)
if (Cookies.get('aceitar') != 1){
    document.getElementById('modal-politica').style.display = 'block';
    console.log("Entrou");
}
function fechar(){
    document.getElementById('modal-politica').style.display = 'none';
}
function aceitar(){
    document.getElementById('modal-politica').style.display = 'none';
    document.getElementById('privacidade').style.display = 'none';
    document.cookie = "aceitar = 1; path = /; expires=" + date;
}
function abrir(){
    document.getElementById('privacidade').style.display = 'block';
}
function fechar2(){
    document.getElementById('privacidade').style.display = 'none';
}