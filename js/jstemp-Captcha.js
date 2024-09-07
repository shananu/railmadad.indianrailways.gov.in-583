$(document).ready(function (e){
	
	$('#myTab a').on('click', function (e) {		 
			console.log('test1');
	})
		
	
	$("#adrefresh").on('click', function(){ 
		$.ajax({
			method : 'GET',
			url : '../FetchData',
			data : {
				fetchdatatype:	"generatecaptcha"		 				
			},
			success : function(responseText) {
				$(".captcha").empty();
				$(".captcha").append(responseText);
				
			},
			error: function (xhr, status, thrownError) {
			}
		});
	});
		
	
	$("#refresh").on('click', function(){ 
		$.ajax({
				method : 'GET',
				url : '../FetchData',
				data : {
					fetchdatatype:	"generatecaptcha"		 	  			 				
				},
				success : function(responseText) {
					$("#captcha").empty();
					$("#captcha").append(responseText);
			
				},
				error: function (xhr, status, thrownError) {
				}
			});
		});
	
	$('#captcha').bind("cut copy paste",function(e) {
	      e.preventDefault();
	});
		
	$("#signuprefresh").on('click', function(){ 
		$.ajax({
				method : 'GET',
				url : '../FetchData',
				data : {
					fetchdatatype:	"generatesignupcaptcha"		 	  			 				
				},
				success : function(responseText) {
					console.log("--------------responseText----------------"+responseText);
					$("#originalsignupcaptcha").empty();
					$("#originalsignupcaptcha").append(responseText);
			
				},
				error: function (xhr, status, thrownError) {
				}
			});
		});
	
	$('#originalsignupcaptcha').bind("cut copy paste",function(e) {
	      e.preventDefault();
    });
	
	$("#forgotpasswordrefresh").on('click', function(){ 
		$.ajax({
				method : 'GET',
				url : '../FetchData',
				data : {
					fetchdatatype:	"generateforgotpasswordcaptcha"		 	  			 				
				},
				success : function(responseText) {
					console.log("--------------responseText----------------"+responseText);
					$("#originalfpasswrdcaptcha").empty();
					$("#originalfpasswrdcaptcha").append(responseText);			
				},
				error: function (xhr, status, thrownError) {
				}
			});
		});
	$('#originalfpasswrdcaptcha').bind("cut copy paste",function(e) {
	      e.preventDefault();
  });
	$("#guestuserrefresh").on('click', function(){ 
		$.ajax({
				method : 'GET',
				url : '../FetchData',
				data : {
					fetchdatatype:	"generategusercaptcha"		 	  			 				
				},
				success : function(responseText) {
					console.log("--------------responseText----------------"+responseText);
					$("#originalgusercaptcha").empty();
					$("#originalgusercaptcha").append(responseText);			
				},
				error: function (xhr, status, thrownError) {
				}
			});
		});
	$('#originalgusercaptcha').bind("cut copy paste",function(e) {
	      e.preventDefault();
  });
	
});