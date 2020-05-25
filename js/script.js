$(document).ready(function(){

    $('#submit').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#Nombre').val() == '' ){
            errores += '<p>Ingrese su NOMBRE</p>';
            $('#Nombre').css("border-bottom-color", "#F14B4B")
        } else{
            $('#Nombre').css("border-bottom-color", "#d1d1d1")
        }

        // Validado DNI ==============================
        if( $('#dni').val() == '' ){
            errores += '<p>Ingrese su DNI</p>';
            $('#dni').css("border-bottom-color", "#F14B4B")
        } else{
            $('#dni').css("border-bottom-color", "#d1d1d1")
        }

        // Validado edad ==============================
        if( $('#edad').val() == '' ){
            errores += '<p>Ingrese su EDAD</p>';
            $('#edad').css("border-bottom-color", "#F14B4B")
        } else{
            $('#edad').css("border-bottom-color", "#d1d1d1")
        }
        // Validado peso ==============================
        if( $('#peso').val() == '' ){
            errores += '<p>Ingrese su PESO</p>';
            $('#peso').css("border-bottom-color", "#F14B4B")
        } else{
            $('#peso').css("border-bottom-color", "#d1d1d1")
        }
        // Validado talla ==============================
        if( $('#talla').val() == '' ){
            errores += '<p>Ingrese su TALLA</p>';
            $('#talla').css("border-bottom-color", "#F14B4B")
        } else{
            $('#talla').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
