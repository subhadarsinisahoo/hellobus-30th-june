
function change_class(obj) {
	if(obj.className == "bus_seat_box_click" && obj.className != "bus_seat_box_booked") {
		obj.className = "bus_seat_box_hover" ;
		} 
}

function change_class_out(obj) {
	if(obj.className == "bus_seat_box_hover"  && obj.className != "bus_seat_box_booked") {
		obj.className = "bus_seat_box_click" ;
		} 
}

function change_class_click(obj,td_po,bus_id) {
	if(obj.className == "bus_seat_box_booked") {
		obj.className = "bus_seat_box_click" ;
		seat_no = obj.innerHTML ;
		ins_book_seat(seat_no,bus_id,td_po,'deleted');
		//obj.innerHTML = "&nbsp;" ;
	} else {
		seat_no = obj.innerHTML ;
		ins_allot_seat(seat_no,bus_id,td_po,'inserted');
		//obj.innerHTML = seat_no ;
		obj.className = "bus_seat_box_booked" ;
	}
}

function ins_allot_seat(seat_no,bus_id,td,st_action) { //alert(str);

    if (seat_no.length == 0) { 
        alert("Please give seat no.");
        return;
    } else {
		/*var img = "<img src='images/loader.gif' alt='' width='20' />";
		document.getElementById(txtID).innerHTML = img ;*/
		
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //document.getElementById(txtID).innerHTML = this.responseText;
				var res = this.responseText; //alert(res);
				if(res=="no") {
				  alert("sorry the seat is already booked.");	
				}
            }
        };
		
		var jdate = document.getElementById('journey').value ; 
		var mem_email = "test@gmail.com";
		
		url = BaseURL + "bus_book_seat_ajax.php?bus_id=" + bus_id + "&seat_no=" + seat_no+ "&td=" + td+ "&st_action=" + st_action + "&mem_email=" + mem_email + "&jdate=" + jdate ;
		//alert(url);
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
	return ;
}


function bus_seat_design() {
	
	var arr = new Array();
	 
	 arr = getUrlVars();
	 
	// alert(arr['bus']); //exit(); 
	//alert($.session.get('session_id'));
	 var bus_id = arr['bus'] ;
	
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('bus_seats').innerHTML = this.responseText;
            }
        };
		url = BaseURL + "bus_seat_design.php?bus_id=" + bus_id  ;
		//alert(url);
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
	
	}



$(document).ready(function()
		{ //alert($.session.get('session_id'));
		
		bus_seat_design();
		
	});