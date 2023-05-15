$(function(){
    $("#miFormulario").validate({
        rules:{
            txtRut:{
                required:true,
                minlength:10 //para poner el largo
            },
            txtNombre:{
                required:true
            },
            txtApellido:{
                required:true
            }
        },
        messages:{
            txtRut:{
                required: "El rut es un campo obligatorio. Ej:12345678-9",
                minlength:"El minimo de caracteres es 10."
            },
            txtNombre:{
                required: "El nombre es un campo obligatorio."
                //minlength:"El minimo de caracteres es 5."
            },
            txtApellido:{
                required: "El apellido es un campo obligatorio."
                //minlength:"El minimo de caracteres es 5."
            }
        }
    })
})


/* $(function(){
    $("#txtBuscar").on("keyup",function(){
        //console.log("keyup");
        let valor = $(this).val().toLowerCase();
        $("table tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1)
        })
    })
}) */


$(function(){
    $("#btnBuscar").on("click",function(){
        //console.log("keyup");
        let valor = $("#txtBuscar").val().toLowerCase();
        $("table tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1)
        })
    })
})
