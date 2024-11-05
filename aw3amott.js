var emailinput = document.querySelector(".emailin");
var passwordinput = document.querySelector(".passwordin");
var elerror = document.querySelector(".finalpoint");
var loginbutton = document.querySelector(".btjs");
var users =[]
var loginflag =false;
if(localStorage.getItem("users") !=null){
users = JSON.parse(localStorage.getItem("users"))
}


loginbutton.addEventListener("click", function () {
    if (
      emailinput.value == "" ||
      passwordinput.value == ""
    ) {
      elerror.innerHTML = `<p class="mb-0 ss"> All Inputs is Required </p>`;
    } else {
        
        for (var i=0 ; i< users.length;i++){
            if (emailinput.value ==users[i].email && passwordinput.value ==users[i].password)
            {
                loginflag = true;
                localStorage.setItem("currentuser",users[i].name)
                console.log("ahln")
            }
            
            // console.log( emailinput.value,users[i].password)
            // console.log(users[i].email ,users[i].password)
        }
        if (loginflag){

            window.location.href = "hello.html";
        }
        else
        {
        elerror.innerHTML = `<p class="mb-0 ss"> Incorrect email or password </p>`;

        }

    }
  });
