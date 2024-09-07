$(document).ready(function (e){
	$.ajax({
		method : 'GET',
		url : '../FetchData',
		data : {
			fetchdatatype : "generatesignupcaptcha"
		},
		success : function(responseText) {
			//console.log("-------------responseText generatesignupcaptcha--------------------"+responseText);
			$("#originalsignupcaptcha").empty();
			$("#originalsignupcaptcha").append(responseText);
		},
		error : function(xhr, status, thrownError) {
		}
	});
	
	$("#register-submit").click(function(e){
	e.preventDefault();
	var namep=document.registerform.name.value;
	var mobile=document.registerform.mobile.value;
	var email=document.registerform.email.value;
	var password=document.registerform.password.value;
	var cpassword=document.registerform.cpassword.value;
	var err="0";
	if(namep==''){
		alert("Please Enter Name");
		document.registerform.name.focus();
		err="1";
		return false;
	 }
	if(password==''){
		alert("Please Enter Password");
		document.registerform.password.focus();
		err="1";
		return false;
	}
	if(cpassword==''){
		alert("Please Enter Confirm Password");
		document.registerform.cpassword.focus();
		err="1";
		return false;
	}
	if(cpassword!=password){
		alert("Please Enter Confirm Password same as Password");
		document.registerform.cpassword.focus();
		err="1";
		return false;
	}
	if(mobile=='' && email==''){
		alert("Please Enter Contact Details");
		document.registerform.mobile.focus();
		err="1";
		return false;
	}
	if(mobile!=''){
		var ph = new RegExp("^[789]{1}[0-9]{9}$");
		if(ph.test(mobile)){
					    }
	    else{
		alert("Please Enter valid Mobile number");
		err="1";
		return false;
		}
	}
	if(email!=''){
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
		}
		else{
			alert("Please Enter valid Email");
			err="1";
			return false;
		}
	}
	if(err=="0"){
		generateSignupOTP(); // Call the common function to generate OTP
	}
	});
	
	
    $('#register-otp-submit').click(function(e) {
        e.preventDefault(); // Prevent default form submission
        $.ajax({
			 method: "post",
	          url: "../InsertModuleData",	          
	         data:{
	        	 name:$('#name').val(),
	        	 password:$('#password').val(),		    	          
	        	 email:$('#email').val(),
	        	 mobile:$('#mobile').val(),
	        	 otp:$('#regotpus').val(),
	        	 moduletype:'signup'
	         },          
	          success: function(data)
	          {	        	 
	        	 $('#msgcontent').html(data[0]);					
				 $("#msgModal").modal('show');
	             $('#register-otp-submit').prop('disabled', true);
	             $('#register-submit').prop('disabled', false);
	             $('#register-form')[0].reset();
				 $("#loginModal").modal('hide');
	             resetSignupForm();
	          console.log(data);
	          }
		});
    });	
    
    $("#resendsubmit").click(function(e){
		e.preventDefault();	
	   // console.log("-------------resend otp-----------------------");
	    generateSignupOTP();
        $('#resendsubmit').prop('disabled', true);	
	 });   
});

var count=0;
function generateSignupOTP() {
    $.ajax({
        method: 'GET',
        url: '../FetchData',
        data: {
            name: $('#name').val(),
            password: $('#password').val(),
            cpassword: $('#cpassword').val(),
            mobile: $('#mobile').val(),
            email: $('#email').val(),
            captcha: $('#signupcaptcha').val(),
            fetchdatatype: 'generateotpforsignup'
        },
        success: function(responseText) {
			var response=JSON.parse(responseText);
           // console.log("-------responseText generateotpforsignup-----------------"+response.reason);
            if (response.error) {
                alert(response.reason);
            } else {
            	//console.log("---------within else------------------------");
            	 $('#msgcontent').html(response.reason);					
				 $("#msgModal").modal('show');
                 $('#register-submit').prop('disabled', true);
                // Enable the OTP input and "Register Now" button
                 $('#regotpus').prop('disabled', false);
                 $('#register-otp-submit').prop('disabled', false);
                 if (count===0) {
                	//console.log("-----------resendEnabled-----------------");
                    $('#resendsubmit').prop('disabled', false); // Enable the button
                    count++; // Set the flag to true, so it won't be enabled again
                }
            }
        },
        error: function(xhr, status, thrownError) {
            console.log("Error: " + thrownError);
        }
    });
}


function uotpcheck(){	
	var otp= $('#regotpus').val();
	var otp_length=$('#regotpus').val().length;
	if(otp_length<4){
		$('#register-otp-submit').attr("disabled", true);
	}
	else{
		if(otp!=""){
			$
			.ajax({
				method : 'GET',
				url : '../FetchData',
				data : {
					otp:$('#regotpus').val(),
					fetchdatatype:'checkotp'
				},
				success : function(
						data) {
				     var msg="";
				     if(data.trim()=="maxreached"){
    	            	  alert("maximum attempt reached");
    	            	  $(location).attr('href',window.location.pathname.split("/").pop());
    	              }
					 else{
	    	          if(data.trim()!="true"){
                          alert("Wrong OTP");
                          $('#register-otp-submit').attr("disabled", true);
	            }
	              if(data.trim()=="true"){
	            	  $('#register-otp-submit').removeAttr("disabled");
	           
	              }
	              if(data.trim()=="reload"){
				 $(location).attr('href',window.location.pathname.split("/").pop());
	    	              						    	          		
	              }
					 }	
				},
				error : function(
						xhr,
						status,
						thrownError) {
				
				}
			});			
		}
	}	
}


function resetSignupForm() {
    // Clear all form fields
	console.log("---------------within reset form------------");
    $('#register-form')[0].reset();
    $('#regotpus').val('');
    $('#register-submit').prop('disabled', false);
    $('#register-otp-submit').prop('disabled', true);
    $('#resendsubmit').prop('disabled', true); // Initially disabled after submission
	 $('#profile').load("signup.jsp?show=yes&name="+$("#name").val()+"&password="+$("#password").val()+"&cpassword="+$("#cpassword").val()+"&mobile="+$("#mobile").val()+"&email="+$("#email").val()+"&signupcaptcha="+$("#signupcaptcha").val(),function() {
		//	console.log("---------------within profile ------------");
 
     });
}