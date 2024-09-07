
$(document).ready(function(){

	
	$("#adforgotbutton").click(function(e){
		

		 $('#forgotcontent').load("ForgotPasswordAdmin.jsp");
			
		 $("#forgotModal").modal('show');
		 $("#adminModal").modal('hide');

	
			
	});

	 $("#adloginform").submit(function(e){
			adminloginaction();	
			 e.preventDefault();
		 });

function adminloginaction(){
	$.ajax({
		method : 'POST',
		url : window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/InsertModuleData',
		data : {
			username		: $('#adusername').val(),
			 password	: $('#adloginpassword').val(),
			 captcha		: $('#adlogincaptcha').val(),
			 moduletype:'adminlogin'
		
		},
		success : function(responseText) {
			var resp=responseText[0];
			var flag_sla=responseText[1];
			var parentId=responseText[4];
			
			var groupId=responseText[5];
			var irctcFlag=responseText[2];
			var	utsFlag=responseText[3];
			var newuser=responseText[6];
			if(resp=="")
				{
				if(newuser=='no'){
					if($('#adusername').val()=="spoorti_admin" || $('#adusername').val()=="spoorti_admin")
					{
						 $(location).attr('href', window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/admin/home.jsp?page=spoorti');	

					}
					else if($('#adusername').val()=="inquiry_admin1" || $('#adusername').val()=="inquiry_admin2")
					{
					 $(location).attr('href',window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/admin/mis_reports/report1.jsp?archiveFlag=N');

					}
				else if(((flag_sla<=1 && parentId!='N') || irctcFlag!="null" || (utsFlag=="1" && flag_sla=="1")) && groupId!="irctc_co_jgm" && groupId!="irctc_co_ggm"){
					 $(location).attr('href', window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/admin/home.jsp?page=ComplaintList');	

				}
				else if(responseText[1]<9){
				
					 $(location).attr('href', window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/admin/home.jsp?page=dashboard');	
				}
				else
					{
					 $(location).attr('href', window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/admin/home.jsp?page=dashboard');	

					}
}
				else{
					sendotp();
				}
				}
			$('#adsigninerror').html(resp);
			
			
		},
		error: function (xhr, status, thrownError) {
		}
	});
}
	
	 function sendotp(){
		 $.ajax({
				method : 'POST',
				url : window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/FetchData',
				data:{fetchdatatype:'newusersendotp'},
				success : function(responseText) {
					var errorFlag=responseText[0];
					var errorMsg=responseText[1];
				
if(errorFlag=='1'){
					$('#adsigninerror').html(errorMsg);
}
else{
	$("#adminModal").modal('hide');
	$("#otpVerifyModal").modal('show');
	
}
					
				},
				error: function (xhr, status, thrownError) {
				}
			});
	 }
	

		$("#VerifyUserOTP").submit(function(e){
			
			e.preventDefault();
			 
			$.ajax({
				method : 'POST',
				url : window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/FetchData',
				data : $( this ).serialize()+"&fetchdatatype=newusercheck",
				success : function(responseText) {
					
				
					if(responseText.trim()=='true'){
						updatevalidationflag();
					
						}
					if(responseText.trim()=='false'){
						alert("wrong otp");
						}
					if(responseText.trim()=='reload'){
					
						$("#adminModal").modal('show');
						$("#otpVerifyModal").modal('hide');
						$('#VerifyUserOTP').trigger("reset");
						 $('#adsigninerror').html("OTP expired!!");
						}
					
					
					
				},
				error: function (xhr, status, thrownError) {
				}
			});
		 });
		function updatevalidationflag(){
			 
			$.ajax({
				method : 'POST',
				url : window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/InsertModuleData',
				data : {
					loginid:$('#adusername').val(),
					moduletype:'updatevalidationflag'
					
				
				},
				success : function(responseText) {
					
				
					if(responseText.trim()=='0'){

						adminloginaction();
					
						}
					
					if(responseText.trim()=='1'){
					
						$("#adminModal").modal('show');
						$("#otpVerifyModal").modal('hide');
						$('#VerifyUserOTP').trigger("reset");
						 $('#adsigninerror').html("Error Occurred!!");
						}
					
					
					
				},
				error: function (xhr, status, thrownError) {
				}
			});
		}
		 $("#resendotp").on('click',function(){
			 $.ajax({
					method : 'POST',
					url : window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/FetchData',
					data:{fetchdatatype:'newusersendotp'},
					success : function(responseText) {
						var errorFlag=responseText[0];
						var errorMsg=responseText[1];
					
	if(errorFlag=='1'){
						$('#resendotpmsg').html(errorMsg);
	}
	else{
		
		$("#resendotpmsg").html("OTP resent to the mobile no.");
		$('#resendotp').attr("disabled", true);
		
	}
						
					},
					error: function (xhr, status, thrownError) {
					}
				});

			     });

});
