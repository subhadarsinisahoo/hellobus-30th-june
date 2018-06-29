/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */ 
var app = {
    // Application Constructor
    initialize: function() { 
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {  //alert("called");
        document.addEventListener('deviceready', this.onDeviceReady, false); 
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() { //alert("194482990168");
        console.log('Received Device Ready Event');
        console.log('calling setup push');
        app.setupPush();
    },
    setupPush: function() { 
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "765936451898"
            },
            "browser": {},
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);
			
			

            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }

           /* var parentElement = document.getElementById('registration');
            var listeningElement = parentElement.querySelector('.waiting');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');*/
			
			////////////database store registration //////////
			$("#GCM_ID").val(data.registrationId);
			//$("#GCM_ID").html('GCM ID...'+data.registrationId);
			var student_reg_no = $.session.get('session_id');
			var dataString="regID="+data.registrationId+"&student_reg_no="+student_reg_no;
			var BaseURL = "http://royalintra.com/phonegp/";
			$.ajax({
                    type: "POST",
                    url: BaseURL+"student_insert_gcm_reg_id.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#GCM_ID").html('Connecting...'+data.registrationId); },
                    success: function(dataINS){
                        if(dataINS=="ok")
                        { alert("Your mobile is registered, thank you."); }
                        else if(dataINS=="error")
                        {} 
						 else if(dataINS=="duplicate")
                        {}
                    }
                });
			
			///////////////////database input registration ////////
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function(data) {
            console.log('notification event');
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
       });
    }
};
