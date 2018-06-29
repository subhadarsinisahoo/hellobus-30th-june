function submit_data() {
 
 
        //$("#insert").click(function(){
            var member_email=$("#member_email").val();
            var mem_password=$("#mem_password").val();
			
					
            var dataString="member_email="+member_email+"&mem_password="+mem_password+"&mode=login"; //alert(dataString);
           
		    if($.trim(member_email).length>0 & $.trim(mem_password).length>0 )
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"member_login.php?",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#login").val('Connecting...');},
                    success: function(data){ //alert(data);
                        if(data=="authorized")
                        {
                            
                            $("#login").val('submit');
							$("#member_email").val('') ;
							$("#mem_password").val('') ;
							$.session.set('session_id', member_email);
							$(location).attr('href', 'search-form.html');
                        }
                        else if(data=="auth_failed")
                        {
                            alert("Invalid Login...Please try again");
							$("#login").val('submit');
							$("#member_email").val('') ;
							$("#mem_password").val('') ;
                        } 
						
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }