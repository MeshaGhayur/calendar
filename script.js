window.onload = function() {
	
	//Finding the last day of the month
	var currentDate = new Date();
	var date2 = new Date(currentDate.getTime() + 30*24*60*60*1000);
	var date3 = new Date(date2.getFullYear(), (date2.getMonth()), 0, 0, 0, 0, 0);
	
	//Finding the current month in words and placing it into the "month" div
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		document.getElementById("month").innerHTML = months[currentDate.getMonth()]; // Referenced from https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_weekday 
		document.getElementById("month").innerHTML += " " + currentDate.getFullYear();
		
	//Finding the first day of the month and the weekday on that date	
	var firstday = new Date(currentDate.getFullYear(), (currentDate.getMonth()), 1, 0, 0, 0, 0);
	var weekdays = ["1", "2", "3", "4", "5", "6", "7"];
	
	//Loop that places each number into the calendar boxes starting with the weekday of the first day of the month (we found this in the array above)
	var weekday = weekdays[firstday.getDay()];
	var boxId = "box";
	var loopnum = 1;
	while(loopnum <= date3.getDate()){
		for (var dates = 1; dates <= date3.getDate(); dates++) {
		document.getElementById(boxId + weekday).innerHTML += dates + " ";
		loopnum++;
		weekday++;
		}
	}
	
	//Highlighting the current date 
	weekday = weekdays[firstday.getDay()];
	boxId = "box";
	currentDate = new Date();
	document.getElementById(boxId + (currentDate.getDate() + (weekday - 1))).style.border = "5px solid #F1C40F";
	document.getElementById(boxId + (currentDate.getDate() + (weekday - 1))).style.color = "white";
};
