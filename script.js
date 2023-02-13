document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    
    if (username == '' || password == '') {
      alert('Please enter a username and password');
    } else {
      // Call the authentication function here
    }
  });
  