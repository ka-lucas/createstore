
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
            else {
                document.querySelector(".focus-input100").innerHTML = "<p>falta caracteres</p>"
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);

var lo = "Airton";
var se = "123";


// senha de login 

function login() {

    var usuario = document.querySelector('#login01');
    var senha = document.querySelector('#senha01');
    var senhasp = document.querySelector('#spansenha');
   
    var ooo = "ola mundo"
    if (usuario.value == lo && senha.value == se) {
      
        window.location.href = "index2.html";

    }

    else {
        senhasp.innerHTML = "senha ou login invalido"

    }
}

var foto2 = document.querySelector(".limiter")
var button = document.getElementById("#esqueceu");
    // fazendo aparecer a div de recuperar senha 
function recu() {

    var foto = document.querySelector(".limiter")
    var foto2 = document.querySelector(".limiter22")

    if (foto.style.display === "block") {
        foto.style.display = "none";
        foto2.style.display = "block";

    } else {
        foto.style.display = "block";
    }
}
var yone = document.getElementById('senha02');
var senhacf = document.getElementById("senhaa");
function sign() {
    var foto = document.querySelector(".limiter")
    var foto2 = document.querySelector(".limiter22")




    var email = document.getElementById('login03');



                //  validação de senha 
    if (validaEmail(email.value) && senhacf.value == yone.value ) {

       

        foto.style.display = "block";
        se = document.getElementById('senha02').value;

    }
    else {
        
        document.querySelector("#senhacfs").innerHTML = " Senha nao coincidem";
        document.querySelector('#spangmail').innerHTML = "Insira um E-mail válido";
        // mostra msgErro dizendo que o email do cliente não é valido.
    }
}

// Chama o Ajax e realiza ações com o email validado.
function validaEmail(email) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(email);
}


function validarEmail() {
    var email = document.querySelector('#login03');
    var error = document.querySelector('#spangmail');


    if (!email.checkValidity()) {
        error.innerHTML = "Email invalido";
        console.log = se;
    }


}

function redefinirMsg() {
    var error = document.querySelector('#spangmail');
    if (error.innerHTML == "Email invalido") {
        error.innerHTML = "";
    }
}


