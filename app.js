var appc=(function validateRegister(objReg){

if(objReg.cid.value.length==0){
		alert("Please enter Customer ID!");
		objReg.cid.focus();
		return false;
		}
var z = objReg.cid.value;
		//alert("the z"+z);
	    if(!z.match(/^\d+/))
	        {
	        alert("Please  enter only numeric characters  for your Customer ID number! (Allowed input:0-9)")
	        objReg.cid.focus();
			return false;

		}

	if(objReg.cfname.value.length==0){
		alert("Please enter Customer Name!");
		objReg.cfname.focus();
		return false;
		}
	if(objReg.clname.value.length==0){
		alert("Please enter Customer Name!");
		objReg.clname.focus();
		return false;
		}
	if(objReg.cmobile.value.length==0){
		alert("Please enter phoneNo !");
		objReg.cmobile.focus();
		return false;
		}

		var z = objReg.cmobile.value;
		//alert("the z"+z);
	    if(!z.match(/^\d+/))
	        {
	        alert("Please  enter only numeric characters  for your phone number! (Allowed input:0-9)")
	        objReg.cmobile.focus();
			return false;

		}
	    var z = objReg.cmobile.value;
		//alert("the z"+z);
	    if(!z.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
	        {
	        alert("Please  enter 10 digit correct number for your phone number! (Allowed input:0-9)")
	        objReg.cmobile.focus();
			return false;

		}

	if(objReg.cemail.value.length==0){
		alert("Please enter passenger email !");
		objReg.cemail.focus();
		return false;
		}
	var z = objReg.cemail.value;
	//alert("the z"+z);
    if(!z.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        {
        alert("Please  enter valid EMAIL ID")
        objReg.cmobile.focus();
		return false;

	}
	if(objReg.caddress.value.length==0){
		alert("Please enter Address of Customer !");
		objReg.caddress.focus();
		return false;
		}



	return true;
}
);
