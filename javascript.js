// Is this the correct setup for a Validation Form? How do I connect it to my HTML/CSS?

// function ValidationForm() {
//     let username = document.forms["RegForm"]["Name"];
//     let email = document.forms["RegForm"]["Email"];
//     if (username.value == "") {
//       alert("Please enter your name.");
//       username.focus();
//       return false;
//     }
//     if (email.value == "") {
//       alert("Please enter a valid e-mail address.");
//       email.focus();
//       return false;
//     }
//     if (email.value.indexOf("@", 0) < 0) {
//       alert("Please enter a valid e-mail address.");
//       email.focus();
//       return false;
//     }
//     if (email.value.indexOf(".", 0) < 0) {
//       alert("Please enter a valid e-mail address.");
//       email.focus();
//       return false;
//     }
//     return true;
//   } 