function changepanel(which){
	if (which == 'signin') {
		document.getElementById("maincontent-login").style.display = 'block';
		document.getElementById("maincontent-signup").style.display = 'none';
		document.getElementById("signinh").style.color = '#7D7FFF';
		document.getElementById("signuph").style.color = '#969DAC';
		document.getElementById("signinh").style.borderBottom = '1px solid #7D7FFF';
		document.getElementById("signuph").style.borderBottom = 'none';
	}
	if (which == 'signup') {
		document.getElementById("maincontent-login").style.display = 'none';
		document.getElementById("maincontent-signup").style.display = 'block';
		document.getElementById("signinh").style.color = '#969DAC';
		document.getElementById("signuph").style.color = '#7D7FFF';
		document.getElementById("signuph").style.borderBottom = '1px solid #7D7FFF';
		document.getElementById("signinh").style.borderBottom = 'none';
	}
}