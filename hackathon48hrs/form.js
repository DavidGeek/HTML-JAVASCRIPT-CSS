document.addEventListener('DOMContentLoaded', function(){
	 var submit = document.getElementById('register');
	 var login = document.getElementById('login');
	

	 submit.addEventListener('click',function store(theForm) {
		
		var inputUsername= document.getElementById("username").value;
		var inputPassword= document.getElementById("password").value;
		localStorage.setItem("username", inputUsername);
		localStorage.setItem("password", inputPassword);
	
		if (username && password) {
			alert("welcome: " + inputUsername + " !!!");
		}
		
		return false;
	});
	
	login.addEventListener('click', function login(theForm) {
		
		var inputUsername = document.getElementById("username1");
		var inputPassword = document.getElementById("password1");
		var username = inputUsername.value;
		var password = inputPassword.value;
		var foundUserName = (username == localStorage.getItem('username'));
		var foundPassword = (password == localStorage.getItem('password'));
		//if ((username == localStorage.getItem('username')) && (password == localStorage.getItem('password'))) {
		if(foundUserName && foundPassword)
		{
		 alert(localStorage.getItem('username') + " login successfully");
			window.location = "index.html";
		// addMessage("Success" + localStorage.getItem('username') );
		  } else {
		   alert("Please try again");
		//addMessage("failed");
		}
	});
		/*function addMessage(message){
			var p = document.createElement("p");
			p.textContent=message;
			document.body.appendChild(p);
			console.log(message);
		}*/
	
});

