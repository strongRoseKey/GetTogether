function showLoginPanel(){
  $(".registerpanel").css("display", "none");
  $(".loginpanel").css("display", "block");
  $("#welcome p").css("color", "transparent");
}
function hideLoginPanel(){

  $(".loginpanel").css("display", "none");
  $("#welcome p").css("color", "white");
}
function showRegisterPanel(){
  $(".loginpanel").css("display", "none");
  $(".registerpanel").css("display", "block");
  $("#welcome p").css("color", "transparent");
}
function hideRegisterPanel(){

  $(".registerpanel").css("display", "none");
  $("#welcome p").css("color", "white");
}

/*$('#regiterform').submit(function(){
  $.ajax(function(){
    method: "post",
    url: "/users/register",
    data: $('#regiterform').serialize(),
    success: function(){
      window.location.href="/activities";
    },
    error: function(){
      window.location.href="/";
    }
  })
});
$('#loginform').submit(function(){
  $.ajax(function(){
    method: "post",
    url: "/users/login",
    data: $('#loginform').serialize(),
    success: function(){
      window.location.href="/activities";
    },
    error: function(){
      window.location.href="/";
    }
  })
});
$('#aboutMeForm').submit(function(){
  $.ajax(function(){
    method: "post",
    url: "/users/profile",
    data: $('#aboutMeForm').serialize(),
    success: function(){
      window.location.href="/activities";
    },
    error: function(){
      window.location.href="/";
    }
  })
});

*/