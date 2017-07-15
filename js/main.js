function nameValidation() {
	var nameValue = $('#name').val();
	
	if (nameValue == "") {
        return false;
	}   else {
        return true;
	}
};

function emailValidation() {

    var emailValue = $('#email').val();   
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {  
        $('#email').css('border', '2px solid green');
        return true;
    }  else {
        $('#email').css('border', '1px solid #cccccc');
        return false;
    }
};

function submitValidation() {
    var emailState = emailValidation();
    var nameState  = nameValidation();

    if (emailState == true && nameState == true) {
        $('.alert-success').show();
        $('.alert-danger').hide();
    } else {
        $('.alert-success').hide();
        $('.alert-danger').show();
    }
}


