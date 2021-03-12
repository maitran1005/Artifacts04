function validateForm(){  
var fname = document.myForm.Firstname.value; 
var lname = document.myForm.Lastname.value;
var email = document.myForm.Email.value;
var phone = document.myForm.Phone.value;
var username = document.myForm.Username.value;
var passwords = document.myForm.Password.value;
var ad = document.myForm.Address.value;
var ci = document.myForm.City.value;
var st = document.myForm.State.value;
var co = document.myForm.Country.value;
var zip = document.myForm.Zip.value;
var status=false;  



if ((fname.length > 20) || fname==="null" || fname==="" || !/^[a-zA-Z]*$/g.test(document.myForm.Firstname.value) ){  
	alert("First name is required, accept only alphabetical value and maximum 20 characters");
	return false;
	}else{
		status=true;}  

if((lname.length > 50) || lname==="null" || lname==="" || !/^[a-zA-Z]*$/g.test(document.myForm.Lastname.value) ){  
	alert("Last name is required, accept only alphabetical value and maximum 50 characters"); 
	return false;
	}else{
	status=true;} 	

if(email===""){  
	alert("Email is required!") 
	return false;
	}else if( !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g.test(document.myForm.Email.value)){
		alert("Invaid email!");
		}else{
			status=true;} 	

if (username.lenght > 12  || username==="null" || username==="" || !/^[a-zA-Z]*$/g.test(document.myForm.Firstname.value)){
	alert("Username is required and maximum 12 characters");
	return false;
	}else{
		status=true;}

if (!/^[1-9][0-9]{0,6}$/g.test(document.myForm.Password.value)|| passwords==="null" || passwords===""){
	alert("Password is required and maximum 7 characters");
	return false;
	}else{
		status=true;}

if (isNaN(phone) || !/^[1-9][0-9]{0,14}$/g.test(document.myForm.Phone.value) || phone==="null" || phone===""){
	alert ("Phone number is required, accept only NUMERICAL values and maximum 15 digits.");
	return false;
	}else{
		status=true;}

if (ad ===""){
	alert ("Address is required!");
	return false;;
	}else{
		status=true;}	

if (ci ===""){
	alert ("City is required!");
	return false;
	}else{
		status=true;}	

if (st ===""){
	alert ("State is required!");
	return false;
	}else{
		status=true;}	



if (co ===""){
	alert ("Country is required!");
	return false;
	}else{
		status=true;}
		

if (document.getElementById('selectid').value == "val1" && !/^[0-9]+$/g.test(document.myForm.Zip.value) || zip.length > 5 ){
		alert("Required zipcode if the country is USA and maximum 5 digits.");
		return false;
		}else{
			status=true;}

}    
