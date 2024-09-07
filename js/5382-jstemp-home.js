$(document).ready(function(){
	
	

	
	(function() {
		  if ("Notification" in window) {
		    var permission = Notification.permission;

		    if (permission === "denied" || permission === "granted") {
		      return;
		    }

		    Notification.requestPermission();
		  }
		})();
	
	setTimeout(function() {
		 var path = window.location.pathname;
			var page = path.split("/").pop();
		var params = new window.URLSearchParams(window.location.search);
		console.log(params.get("anubhav"));
		
		if(params.get('anubhav')!=null && params.get("anubhav")=="yes")
			{
			 
			
			$('a[href="#railanubh"]').click();	
			$('a[href="#railanubh"]').closest('div').addClass('r-tabs-state-active');
			$('a[href="#railanubh"]').closest('div').removeClass('r-tabs-state-default');
			$('#railanubh').removeClass('r-tabs-state-default');

			$('#railanubh').addClass('r-tabs-state-active d-block');

			
			}else{
	   $('#traincomp').load("ComplaintOnTrain.jsp");
			}

	}, 1000);
	console.log("------------------onload home");

    
    $('#statsrespload').load("statsresp.jsp");

    $('#statsload').load("homestats.jsp");
    $(".p").html(" <font class='trainPanel'></font>");

    
   
    $("#train").click(function(){
    	$('#freight-icon').attr('src','../img_assets/freight.png');

        $(".p").html(" <font class='trainPanel'></font>");

	    $('#stationcomp').html("");
        $('#suggestions').html("");
        $('#freightparcel').html("");
        $('#track').html("");
        $('#railanubh').html("");
        $('#traincomp').load("ComplaintOnTrain.jsp");


      });
    
    
    
$(".r-tabs-anchor").click(function(){
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
    	console.log("-------------r tab anchor" + $(this).attr("href"));
    	    	console.log("-------------windowWidth : " + windowWidth);
    	    	console.log("-------------height : " + windowHeight);

    	switch($(this).attr("href"))
    	{
    	case "#railanubh":
    		$('#freight-icon').attr('src','../img_assets/freight.png');

        $(".p").html(" <font class='railAnubhavPanel'></font>");

	    $('#stationcomp').html("");
        $('#suggestions').html("");
        $('#freightparcel').html("");

        $('#track').html("");
        $('#traincomp').html("");
        if(windowWidth < 1000 && windowHeight < 1000)
        {
	
        $('#railanubh').load("RailAnubhav.jsp", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                console.log("External content loaded successfully!");
              if(statusTxt == "error")
                console.log("Error: " + xhr.status + ": " + xhr.statusText);
            });
}
        console.log("hey");
        break;
    	case "#traincomp":
    		$('#freight-icon').attr('src','../img_assets/freight.png');

        $(".p").html(" <font class='trainPanel'></font>");

	    $('#stationcomp').html("");
        $('#suggestions').html("");
        $('#freightparcel').html("");
        $('#railanubh').html("");
        $('#track').html("");
         if(windowWidth < 1000 && windowHeight < 1000)
        {
        $('#traincomp').load("ComplaintOnTrain.jsp");
        }
    	break;
    	case "#stationcomp":
    		$('#freight-icon').attr('src','../img_assets/freight.png');
            $('#freightparcel').html("");
            $('#railanubh').html("");
      	    $('#traincomp').html("");
              $('#suggestions').html("");

      	    

              $('#track').html("");

          $(".p").html(" <font class='stationPanel'></font>");
  		//console.log("loadedpp"+$('#incident_dt').val());
 if(windowWidth < 1000 && windowHeight < 1000)
        {
  	    $('#stationcomp').load("ComplaintOnStation.jsp");
  	    }
    			      break;
    	case "#freightparcel":
    		$('#freight-icon').attr('src','../img_assets/freight-white.png');
    	  	 
    	    $('#traincomp').html("");
            $('#suggestions').html("");

            $('#stationcomp').html("");
            $('#railanubh').html("");

            $('#track').html("");

        $(".p").html(" <font class='freightparcelPanel'></font>");
         if(windowWidth < 1000 && windowHeight < 1000)
        {
       $('#freightparcel').load("freightparcel.jsp");
       }
    			      break;
    	case "#suggestions":
    		  $(".p").html(" <font class='suggestionPanel'></font>");
    		    $('#stationcomp').html("");
    		    $('#traincomp').html("");
    	        $('#track').html("");
    	        $('#freightparcel').html("");
    	        $('#freight-icon').attr('src','../img_assets/freight.png');
    	         if(windowWidth < 1000 && windowHeight < 1000)
        {
    	        $('#suggestions').load("Suggestions.jsp");
    	        }
    	        $('#railanubh').html("");

    			      break;
    	case "#track":
    		 $('#freight-icon').attr('src','../img_assets/freight.png');

    	        $(".p").html(" <font class='trackPanel'></font>");
    	        $('#freightparcel').html("");

    	        $('#traincomp').html("");
    	        $('#suggestions').html("");
    		    $('#stationcomp').html("");
    		    $('#railanubh').html("");
    		     if(windowWidth < 1000 && windowHeight < 1000)
        {
    	        if($("#sessionuser").val() != null && $("#sessionuser").val() != undefined && $("#sessionuser").val() != "null")
    			 {
    				$('#track').load("TrackComplaint.jsp?show=yes&com_ref_no="+$("#trackhidden").val());

    			 console.log('hello2');
   			 }
    			 else
    				 {
    		    	    $('#track').load("TrackComplaint.jsp?com_ref_no="+$("#trackhidden").val());
  			console.log('hello5');	 
   				
    				 }  
    	        }
    			      break;
    	}
  });
$("#railanubh-tab").click(function(){
	
	$('#freight-icon').attr('src','../img_assets/freight.png');
	 
    $('#traincomp').html("");
    $('#suggestions').html("");

    $('#stationcomp').html("");

    console.log($('#railanubh').html());

    $('#track').html("");


$(".p").html(" <font class='railAnubhavPanel'></font>");
$('#railanubh').load("RailAnubhav.jsp", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
       // console.log("External content loaded successfully!");
      if(statusTxt == "error")
        console.log("Error: " + xhr.status + ": " + xhr.statusText);
    });
//console.log($('#railanubh').html());



//console.log("hey1");


});


    $("#freightparcel-tab").click(function(){
    	
    	$('#freight-icon').attr('src','../img_assets/freight-white.png');
  	 
	    $('#traincomp').html("");
        $('#suggestions').html("");

        $('#stationcomp').html("");
        $('#railanubh').html("");

        $('#track').html("");


    $(".p").html(" <font class='freightparcelPanel'></font>");
    $('#freightparcel').load("freightparcel.jsp");

  });
      $("#station").click(function(){
    	  $('#freight-icon').attr('src','../img_assets/freight.png');
          $('#freightparcel').html("");

    	    $('#traincomp').html("");
            $('#suggestions').html("");

            $('#railanubh').html("");

            $('#track').html("");

        $(".p").html(" <font class='stationPanel'></font>");
        console.log('station called twice..');
	    $('#stationcomp').load("ComplaintOnStation.jsp");

      });
      
      $("#track-tab").click(function(){
          $('#freight-icon').attr('src','../img_assets/freight.png');

        $(".p").html(" <font class='trackPanel'></font>");
        $('#freightparcel').html("");

        $('#traincomp').html("");
        $('#suggestions').html("");
	    $('#stationcomp').html("");
	    $('#railanubh').html("");
	    
        if($("#sessionuser").val() != null && $("#sessionuser").val() != undefined && $("#sessionuser").val() != "null")
		 {
			$('#track').load("TrackComplaint.jsp?show=yes&com_ref_no="+$("#trackhidden").val());

		// console.log('hello');
		 }
		 else
			 {
	    	    $('#track').load("TrackComplaint.jsp?com_ref_no="+$("#trackhidden").val());
		//console.log('hello3');	 
			
			 }  
        

        
      });
      $("#suggestions-tab").click(function(){
        $(".p").html(" <font class='suggestionPanel'></font>");
	    $('#stationcomp').html("");
	    $('#traincomp').html("");
        $('#track').html("");
        $('#freightparcel').html("");
        $('#freight-icon').attr('src','../img_assets/freight.png');
        $('#suggestions').load("Suggestions.jsp");
        $('#railanubh').html("");



      });
    
      
      
      function checksession()
      {
    	  console.log($('.r-tabs-state-active').find(".r-tabs-anchor").attr("id"));
    	  console.log($("#sessionuser").val());
 		 if($("#sessionuser").val() != null && $("#sessionuser").val() != undefined && $("#sessionuser").val() != "null")
 		 {
 		// console.log('hello');
 		 }
 		 else
 			 {
 			 if($('.r-tabs-state-active').find(".r-tabs-anchor").attr("id") != "train" && $('.r-tabs-state-active').find(".r-tabs-anchor").attr("id") != "station"
 				&& $('.r-tabs-state-active').find(".r-tabs-anchor").attr("id") != "freightparcel-tab" &&$('.r-tabs-state-active').find(".r-tabs-anchor").attr("id") != "railanubh-tab")
 				 {
 			 $("#loginModal").modal('show');
 				 }
			 $("#username").val("");
			 $("#loginpassword").val("");
			 $("#logincaptcha").val("");
			 $("#name").val("");
			 $("#password").val("");
			 $("#cpassword").val("");
			 $("#mobile").val("");
			 $("#email").val("");

			 $("#signinerror").html("");


 			 
 		//console.log('hello4');	 
 			
 			 }  
      }
      
      
      $(".loginClearInput").click(function(){
			 $("#signinerror").html("");

    	  $("#username").val("");
			 $("#loginpassword").val("");
			 $("#logincaptcha").val("");  
			 $("#name").val("");
			 $("#password").val("");
			 $("#cpassword").val("");
			 $("#mobile").val("");
			 $("#email").val("");
      
      
      });
      
      $("#railanubh").click(function(){
 		 checksession();
 	 });
      
      $("#freightparcel").click(function(){
 		 checksession();
 	 });
	 $("#traincomp").click(function(){
		 checksession();
	 });
	  
	 $("#stationcomp").click(function(){
		 console.log("hellop");
		 checksession();
		 console.log("hellop1");
	 });
	  
	 $("#suggestions").click(function(){
		 
		 checksession();
	 });
	 
	 var path = window.location.pathname;
		var page = path.split("/").pop();
		
		var params = new window.URLSearchParams(window.location.search);
		
		if(page=="home.jsp")
			{
			
			if(params.get('ref')!=null)
				{
				if($.isNumeric(params.get('ref')) && params.get('ref').length==13)
					{
				
			$("#trackhidden").val(params.get('ref'));
			
			$('a[href="#track"]').click();
					}
				}

			
			}
});
