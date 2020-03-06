
//Formulario de registra tus datos aviseme
$(document).ready(function(){

  if(window.location.href.lastIndexOf("1029302")!=-1){
    $('body').append('<div class="form-compra" style="width: 100%;height: 100%;background: #00000073;position: fixed;top: 0;margin: 0;padding: 0;z-index: 999999999999;display: none;"> <div style="min-width: 318px;height: auto;position: relative;margin: auto;background: white;margin-top: 75px;width: 90%;max-width: 420px; text-align: center; padding-bottom: 20px"> <p class="close-form" style="height: 40px;width: 40px;line-height: 40px;font-size: 25px;position: absolute;right: 0;top: 0;text-align: center;margin: 0;cursor: pointer">x</p><h2 style="font-size: 16px;padding: 35px;padding-bottom: 0;">ESTE ES UN PRODUCTO 100% ARTESANAL</h2><p style="font-size: 13px;text-align: center;padding: 10px;line-height: 20px;">Si deseas llevar contigo esta pieza única, dejanos tus datos.<br>Al momento de estar este producto en inventario, nos pondremos en contacto contigo para que seas la primera persona en adquirirlo</p><div style="padding: 15px;"> <label style="width: 70px;display: inline-block;">Nombre</label><input type="tex" placeholder="Digita tu nombre completo" style="width: 220px; line-height: 26px; padding: 5px;margin:5px 0; font-size: 15px" class="name-form"><br> <label style="width: 70px;display: inline-block;">Correo</label><input type="tex" placeholder="Digita tu correo electrónico" style="width: 220px; line-height: 26px; padding: 5px;margin:5px 0;font-size: 15px" class="email-form"><br> <label style="width: 70px;display: inline-block;">Celular</label><input type="number" placeholder="Digita tu número de celular" style="width: 220px; line-height: 26px; padding: 5px;margin:5px 0;font-size: 15px" class="cel-form"> </div> <button class="btn-enviar" style="width: 80%; height: 30px;cursor: pointer">ENVIAR</button><p id="mensaje" style="margin: 20px; text-align: center;display:none"></p></div></div>')
    
    $('.btn-enviar').click(function(){
      formData={};
      formData.nombre=$('.name-form').val(),
        formData.correo=$('.email-form').val(),
        formData.celular=$('.cel-form').val()
      $.ajax({contentType:"application/json; charset=utf-8",
              data:JSON.stringify(formData),type:"POST",
              url:"/api/ds/pub/documents/FP",
              success:function(a){
                console.log(formData.nombre,formData.correo,formData.celular);
                $('.name-form').val('');$('.email-form').val('');$('.cel-form').val('');
                $('#mensaje').html("<strong>Datos Enviados Exitosamente</strong>");
                $('#mensaje').fadeIn(1000);
                setTimeout("$('#mensaje').parent().parent().fadeOut();$('#mensaje').html('')",7000);
              },
              error:function(a){
                console.log("Error al tratar de enviar los datos")
              }
             });
    });
    $('.close-form').click(function(){$('.form-compra').fadeOut(500)})
    $('.container-button-comprar .button-comprar').click(function(){$('.form-compra').fadeIn(500)})
  }
})
