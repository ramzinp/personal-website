$(document).ready(function(){
    $("#signupForm").validate({
        rules:{
            fname :{
                required: true,
                minlength: 4,
                maxlength: 20
            },
            sname: {
                required : true,
                minlength : 4
            },
            emailAddress: {
                required : true,
                email : true
            },
            pwd:
            {
                required: true,
                minlength: 8
            },
            day:{
                required : true,
            },
            month:{
                required : true,
            },
            year:{
                required : true,
            },
            Gender:{
                required : true
            }
        },
        messages:{
            fname:{
                required:"enter first name"
            }
        }
        
    })
})