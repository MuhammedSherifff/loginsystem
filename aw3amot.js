var signbutton = document.querySelector(".btjs");
var nameinput = document.querySelector(".namein");
var emailinput = document.querySelector(".emailin");
var passwordinput = document.querySelector(".passwordin");
var elerror = document.querySelector(".finalpoint");

var users =[]
if(localStorage.getItem("users") !=null){
users = JSON.parse(localStorage.getItem("users"))
}
var emails =[]
var nameregex = /^[A-Za-z\s]{2,50}$/;
var emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

signbutton.addEventListener("click", function () {
  if (
    nameinput.value == "" ||
    emailinput.value == "" ||
    passwordinput.value == ""
  ) {
    elerror.innerHTML = `<p class="mb-0 ss"> All Inputs is Required </p>`;
  } else {
    if (nameregex.test(nameinput.value) == false) {
      elerror.innerHTML = `<p class="mb-0 ss"> Name In Wrong Format </p>`;
    } else if (emailregex.test(emailinput.value) == false) {
      elerror.innerHTML = `<p class="mb-0 ss"> email In Wrong Format </p>`;
    } else if (passwordregex.test(passwordinput.value) == false) {
      elerror.innerHTML = `<p class="mb-0 ss"> Password In Wrong Format </p>`;
    } else {
      elerror.innerHTML = `<p class="mb-0 sss"> Done Successfully </p>`;
      var userdetails ={
        name : nameinput.value,
        email: emailinput.value,
        password :passwordinput.value
      }
      if (users.length!=0){
        emails = users.map(function (user) {
           return user.email;
         });
      }
     if (users.length!=0){

        if(emails.includes(emailinput.value)==true)
        {
            elerror.innerHTML = `<p class="mb-0 ss"> Email Exists </p>`;
        }

        else{
            users.push(userdetails)
            localStorage.setItem("users" ,JSON.stringify(users))
        }
     }
     else{
         users.push(userdetails)
         localStorage.setItem("users" ,JSON.stringify(users))
     }


    }
  }
});
