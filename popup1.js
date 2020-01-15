function generatePassword() {
  var length = 12,
    charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+|}{}ABCDEFGHIJKLM^&*()_+|NOPQRSTUVWXYZ0123456789!@#$%^&*()_+|}{}",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function showPassCreatePassword() {
  const createPassword = document.getElementById('createPassword');
  if (createPassword.type === 'password') {
    createPassword.type = 'text';
  } else {
    createPassword.type = 'password';
  }
}


document.addEventListener('DOMContentLoaded', function() {
  $("#createPass").click(function(){

    showPassCreatePassword();
    });
  });

function showPassLoginPassword() {
  const createPassword = document.getElementById('loginPassword');
  if (createPassword.type === 'password') {
    createPassword.type = 'text';
  } else {
    createPassword.type = 'password';
  }
}


document.addEventListener('DOMContentLoaded', function() {
  $("#loginPass").click(function(){
    showPassLoginPassword();
    });
  });







$(document).ready(function() {

  window.onload = function() {
    const createPassword = document.getElementById('createPassword');
    createPassword.value = generatePassword();
  };


  // var strength = $("#password-strength-meter").val();



  $(".mainCA_nav_X").click(function() {
    win = window.close();
  });

  chrome.storage.sync.get(['websiteP'], function(items) {


    document.getElementById("CreateTitlee").innerText = "Create an account on " + items.websiteP;
    if (items.websiteP == "amazon" || items.websiteP == "www.amazon.com" || items.websiteP == "amazon.safaie.ca") {
      // alert("amazon page is called...");
      $(".fnameSection").removeClass("off");
      $(".lnameSection").removeClass("off");
      $(".datebirthSection").removeClass("off");
      $('.mainCA').css('height', '65%');
      $('.mainCA').css('margin-top', '4%');
      $('.mainCA_top').css('height', '10%');
      $('.mainCA_bottom_main_top_btn').css('height', '13%');
      $('.mainCA_bottom_main_top_main').css('height', '86%');
    } else {

    }

  });

  var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


       $('div').on('click', function(e) {

           var newItem =
           {
            'class': $(this).attr('class'),
            'content': "",
            'timestamp': Date.now()
           };

            oldItems.push(newItem);

            localStorage.setItem('itemsArray', JSON.stringify(oldItems));
            // alert();
            // e.stopPropagation();
       });

});



$(document).ready(function() {
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function emailValidate() {
    // var $result = $("#result");
    var email = $("#masterEmail").val();
    $result.text("");

    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }





  $(".mainCA_nav_X").click(function() {
    win = window.close();
  });

  chrome.storage.sync.get(['websiteP'], function(items) {
    document.getElementById("LoginTitlee").innerText = "Login to " + items.websiteP;
  });

  var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


       $('div').on('click', function(e) {

           var newItem =
           {
            'class': $(this).attr('class'),
            'content': "",
            'timestamp': Date.now()
           };

            oldItems.push(newItem);

            localStorage.setItem('itemsArray', JSON.stringify(oldItems));
            // alert();
            // e.stopPropagation();
       });

});
