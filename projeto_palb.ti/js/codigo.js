function enviar(){
    $("#formulario").hide()
    
    $("#parabens").html("<h1>SEJA BEM VINDO</h1>")
    $("#parabens").append("<p>Nome:" +  $("#campo_nome").val()   + " </p>")
    $("#parabens").append("<p>Sexo:" +  $("#campo_sexo").val()   + " </p>")
    $("#parabens").append("<p>Idade:" +  $("#campo_idade").val()   + " </p>")
    $("#parabens").append("<p>Curso:" +  $("#campo_curso").val()   + " </p>")
    $("#parabens").append("<p>E-mail:" +  $("#campo_email").val()   + " </p>")
    $("#parabens").append("<p>Senha:" +  $("#campo_senha").val()   + " </p>")
}

//claramente um código de internet validando por expressao relugar, o que é bem complexo
function validar_email(mail){	
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);	
    if(typeof(mail) == "string"){		
        if(er.test(mail)){ 
            return true; 
        }	
    }else if(typeof(mail) == "object"){		
        if(er.test(mail.value)){ 					
            return true; 				
        }	
    }else{		
        return false;		
    }
}

//validaçoes
function validar(){
    //esse # quer dizer que estamos pegando o campo pelo id
    // esse .val() significa que queremos o valor do campo
    var nome = $("#campo_nome").val();
    var idade = $("#campo_idade").val();
    var sexo  = $("#campo_sexo").val();
    var curso = $("#campo_curso").val();
    var email = $("#campo_email").val();
    var cnf_email = $("#campo_rep_email").val();
    var senha = $("#campo_senha").val();
    var cnf_senha = $("#campo_rep_senha").val();

    if(nome == ""){
        alert("Preencha com o seu nome completo!");
        return false;
    }
    if(idade == ""){
        alert("Por favor informe sua idade");
        return false;
    }
    if(sexo == ""){
        alert("Informe seu sexo");
        return false;
    }
    if(curso == ""){
        alert("Informe seu Curso");
        return false;
    }
    if(email == ""){
        alert("Preencha seu email");
        return false;
    }
    if(cnf_email == ""){
        alert("Confirme seu email");
        return false;
    }
    
       if(email != cnf_email){
        alert("Os email são diferentes");
        return false;
    }
    
     if(!validar_email(email)){
        alert("Email invalido");
        return false;
    }
    
    if(senha == ""){
        alert("Escolha uma senha");
        return false;
    }
    if(cnf_senha == ""){
        alert("Confirme sua senha");
        return false;
    }

 

    if(senha != cnf_senha){
        alert("As senhas não coincidem");
        return false;
    }

   
    
    //se nada retornar false, ele chama a funcão que mostra os dados do usuário!!!
    enviar();
}