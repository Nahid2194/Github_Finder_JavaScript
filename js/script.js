let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui =new UI();
//Addlistener

searchBtn.addEventListener('click',(e) =>{
    let userText = searchUser.value;
    if(userText != ''){
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json()).then(data =>{
            if(data.message == 'Not Found'){
             ui.showAlert("User not Found!!!","alert alert-danger");

            }else{
               console.log(data);
               ui.showProfile(data);
            }
        })
    }else{
      //  console.log('Profile blank')
        ui.clearProfile();

    }

})