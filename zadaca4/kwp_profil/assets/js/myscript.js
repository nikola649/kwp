function logIn()
{
    var username = document.getElementById("usr").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);  
       

};

function personal(){
    var korisnik = document.getElementById("korisnik");
    var email = document.getElementById("email")
    var username1 = localStorage.getItem('username');
    var email1 = localStorage.getItem('email');
    korisnik.innerHTML = username1;
    email.innerHTML = email1;
};


var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
      localStorage.setItem('naslovna', dataURL);
    };
    reader.readAsDataURL(input.files[0]);
    
    
    
  };

  
var openFileprofil = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('profilna');
      output.src = dataURL;
      localStorage.setItem('profil', dataURL);
    };
    reader.readAsDataURL(input.files[0]);
  };



  $('.fileuploader-btn').on('click', function(){
$('#insert').click();
});

$('.fileuploader-btn2').on('click', function(){
    $('#insertprofil').click();
    });

    function countChars(countfrom,displayto) {
        var len = document.getElementById(countfrom).value.length;
        document.getElementById(displayto).innerHTML =500-len +" characters left";
        if(len>500){
            document.getElementById("unesi").disabled = true;
            document.getElementById(displayto).innerHTML ="Message to long- unable to submit";
        }
      };
    