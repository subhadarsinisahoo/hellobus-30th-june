
function view_all_routes() {
	//var student_reg_no = $.session.get('session_id');
	var url=BaseURL+"available_routes.php" ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var rt_from=field.rt_from;
				var rt_to=field.rt_to;
				//var subject_name=field.subject_name;
				//var assign_id=field.assign_id;
				
				
				$("#sub-menu").append('<li class="menu-item"><a href="search.html?fplace=' + rt_from + '&tplace='+rt_to+'">'+rt_from+' - '+rt_to+'</a></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_routes();
		
	});