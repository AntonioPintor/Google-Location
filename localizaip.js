var LIP_LowPrecision = true; //false = ask permission to the browser, higher precision | true = don't ask permission, lower precision
function LocalizaIP_done(ip_data){
	if (!ip_data['error']) //this line is an exemple, you must change it by your Geolocation manipulation code
		alert('Antonio Pintor: '+ip_data['city']+'-'+ip_data['state']+'-'+ip_data['country']+' (lat:'+ip_data['latitude']+',long:'+ip_data['longitude']+')');
document.getElementById("pa").innerHTML =(' '+ip_data['city']+'');
window.location.href =(' #'+ip_data['city']+'-'+ip_data['state']+'-'+ip_data['country']+'');
document.getElementById("pf").innerHTML =(' '+ip_data['city']+' - '+ip_data['state']+'');
document.getElementById("p0").innerHTML =(' '+ip_data['city']+' - '+ip_data['state']+'');
document.getElementById("p1").innerHTML =(' '+ip_data['city']+' - '+ip_data['state']+'');  
document.getElementById("p2").innerHTML =(' '+ip_data['city']+' - '+ip_data['state']+''); 
document.getElementById("p3").innerHTML =(' '+ip_data['city']+' - '+ip_data['state']+'');
}
