const numberInput = document.getElementById('number'),
      textInput = document.getElementById('msg'),
      scheduleSelect = document.getElementById('schedule'),
      button = document.getElementById('button'),
      response = document.querySelector('.response');

button.addEventListener('click', send, false);

function send() {
  const number = numberInput.value.replace(/\D/g, '');
  const text = textInput.value;
  
  fetch('/feedback',{
      method: 'post',
      headers: {
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({number: number, text: text})
  })
  .then(function(res){
      console.log(res);
  })
  .catch(function(err){
      console.log(err);
  });
  
}