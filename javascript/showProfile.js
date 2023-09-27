var checkElement = setInterval(function(){
    var profileId=document.getElementById("id")
    if(profileId != null){
        showInformation()
    }
},500)
function showInformation(){
    clearInterval(checkElement);
    const allUserDataJSON = localStorage.getItem("userData");
    const totalUserData = JSON.parse(allUserDataJSON);
    var profileId=document.getElementById("id")
    console.log('profileId', profileId)
    console.log(allUserDataJSON);
    if(allUserDataJSON){
        for (const userData of totalUserData) {
            var showUserdata=` <h4>Hii , ${userData.name}</h4>
             <hr />
             <b>Your id :</b> ${userData.id} <br>
             <b>First name :</b> ${userData.name} <br>
             <b>Last name :</b> ${userData.lastName} <br>
             <b>Email :</b> ${userData.email} <br>
             <b>Address :</b> ${userData.address}<br>`
            profileId.innerHTML=showUserdata;

            console.log(userData);
        }
    };
    
}