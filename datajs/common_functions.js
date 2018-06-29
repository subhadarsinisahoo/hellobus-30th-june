function GetFormattedDate() {
	var todayTime = new Date();
	var month = todayTime . getMonth() ;
	var day = todayTime . getDate();
	var year = todayTime . getFullYear() ;
	
	var str = todayTime.toString();
	
	var res = str.replace("GMT+0530 (India Standard Time)", "");
	
	return res ; //month + "/" + day + "/" + year;GMT+0530 (India Standard Time)
}