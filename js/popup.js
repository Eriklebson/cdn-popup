var date = new Date(Date.now())
date.setDate(date.getDate()+180)
if (Cookies.get('aceitar') != 1){
    document.getElementById('modal-politica').style.display = 'block';
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
$(function(){ 
    $.ajax({
        url:"politicadeprivacidade.html",
        type: 'HEAD',
        success: function(){
            $("#includedpolitica").load("politicadeprivacidade.html");
            console.log("Existe")
        },
        error: function(){
            $("#includedpolitica").append("<h3>Em breve</h3>");
            console.log("Não Existe")
        }
    })
})