$(document).ready(function(){
	//code for the cerlces Countdouwn
	$(".counter").TimeCircles({
	    "direction": "Clockwise",
	    "animation": "Tricks",
	    "bg_width": 0,
	    "fg_width": 0.01,
	    "circle_bg_color": "rgba(255, 255, 255, 0)",
	    "circle_bg_fill_color": "rgba(255, 255, 255, 0.1)",
	    "time": {
        "Days": {
            "text": "يوم",
            "color": "#ffffff",
            "show": true
        },
        "Hours": {
            "text": "ساعة",
            "color": "#ffffff",
            "show": true
        },
        "Minutes": {
            "text": "دقيقة",
            "color": "#ffffff",
            "show": true
        },
        "Seconds": {
            "text": "Secs",
            "color": "#ffffff",
            "show": true
        }
    }
});

});