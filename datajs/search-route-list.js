
function search_routes() {
	//var student_reg_no = $.session.get('session_id');
	
	//alert($.session.get('session_id'));
	
	var s_Mem = $.session.get('session_id');
	
	var strTime = GetFormattedDate() ; 
	$("#show_time").html(strTime);
	
  	 var arr = new Array();
	 
	 arr = getUrlVars();
	 
	 //alert(arr['fplace']); //exit();
	
	 var from = arr['fplace'] ;
     var to = arr['tplace'] ;
	/*$("#from_str").val();*/
	var url=BaseURL + "search_bus.php?from=" + from + "&to=" + to ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var dept_time=field.dept_time;
				var price=field.price;
				var bus_name=field.bus_name;
				var stop_age=field.stop_age;
				var no_of_seats=field.no_of_seats;
				var bus_type=field.bus_type;
				var coach_type=field.coach_type;
				var seat_type=field.seat_type;
				var bus_id=field.bus_id;
				
				
				$("#results_list").append('<a href="bus_seat_details.html?bus='+bus_id+'"><div class="result"><span><div class="left">'+dept_time+'</div><div class="right">Rs. '+price+'</div></span><p>'+bus_name+'</p><span><div class="left">'+stop_age+'&nbsp;  Bus Type - '+bus_type+' &nbsp;, Coach Type - '+coach_type+' &nbsp;, Seat Type - '+seat_type+'</div><div class="right">'+no_of_seats+' Seats</div></span></div></a>');
	          
				
	        });
			
			
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		search_routes();
		
	});