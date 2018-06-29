function conf_done() {
	alert("Your booking is confirmed");
	$(location).attr('href', 'search-form.html');
}

function s_data() {
	var arr = new Array();
	 
	 arr = getUrlVars();
	 
	// alert(arr['bus']); //exit(); 
	//alert($.session.get('session_id'));
	 var bus_id = arr['bus_id'] ;
	 var dt = arr['dt'] ;
	 
	 $("#show_date").html(dt);
}


$(document).ready(function()
		{
		// Using GetJSON
		s_data();
		
	});