const links = document.querySelectorAll('ul li');
const pages = document.querySelectorAll('.page');
const allBtns = document.querySelectorAll('.close-btn');
const send =document.querySelector('.btn')
  


let selectedPageBtn = "";
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(event){
        event.preventDefault();
        for(let i = 0; i < pages.length; i++){
            pages[i].style.display = "none";
        }
        pages[i].style.display = "block";
        selectedPageBtn = i;
        document.querySelector('header').style.filter = "blur(2px)";
    });
}

for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener('click', function(){
        allBtns[i].parentElement.style.display = "none";
        document.querySelector('header').style.filter = "blur(0px)";
    });
}
// function sendemail() {
//     var userid = "bIM5F5f_AFw8lfRT2"
//     emailjs.init(userid);
//     var name = document.getElementById('name').value;
//     var Email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
//     var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//     if (thename == "") {
//       alert("Please Enter Name");
//     }
//     else if (Email == "" || Email.match(!validmail)) {
//       alert("Please Enter Valid Email");
//     }

//     else if (message == "") {
//       alert("Please Enter Message");
//     }
//     else {
//       var contactdetail = {
//         from_name: name,
//           from_email: Email,
//           message: message
//         };

//         emailjs.send('service_bswf2a7', 'template_atzmzlq', contactdetail).then(function (res) {
//           alert("Email Sent Successfully");
//         },
//           reason => {
//             alert("Error Occur");
//           })
//       }
//     }