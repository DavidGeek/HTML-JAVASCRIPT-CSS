document.addEventListener('DOMContentLoaded', function () {
  var messageInput = document.querySelector('#message_input');
  var messageBox = document.getElementById('message_box');
  var button = document.getElementsByTagName('button')[0];
  var messages=getMessages();
  
  messages.forEach(function (msg){
	var p=document.createElement('p');
	p.textContent=msg;
	messageBox.appendChild(p);
}};
   function getMessages(){
	if(localStorage.messages){
		return JSON.parse(localStorage.messages);
	}
	else{
		return[];
	}
}

  function addToMessageBox (msg) {
    var p = document.createElement('p');
    p.textContent = msg;
    messageBox.appendChild(p);
    messageInput.value = '';
    messageInput.focus();

    messages=getMessages();
    messages.push(msg);
    console.log("saving messages", messages);

    localStorage.setItem("messages" JSON.stringify(messages));
  };

  button.addEventListener('click', function () {
    addToMessageBox(messageInput.value);
  }, false);

  messageInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      addToMessageBox(messageInput.value);
    }
  });
});
function hover(element){
	element.setAttribute('src', '09e58e5.jpg');
}
function unhover(element){
	element.setAttribute('src', 'psyduck.gif');
}
var client = new WebSocket('ws://10.25.243.21:3001');
    client.addEventListener('open', function(){
        console.log('connected');
        getUserList();
    });
    client.addEventListener('close', function(){
        console.warn('we are disconnected');
    });
    client.addEventListener('message', function(event){
        console.log('Receive from server:', event.data);

        var data = JSON.parse(event.data);
        switch(data.type){
            case 'userlist':
                showUserList(data.content);
                break;
        }
    });