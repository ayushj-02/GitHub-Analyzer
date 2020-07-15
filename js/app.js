// Init Github
const github=new GitHub;
const ui=new UI;

// Search Input
document.getElementById('searchUser').addEventListener('keyup',(e)=>{
  // Get Input Text
  const userText=e.target.value;
  if(userText!==''){
    // Make HTTP call

    github.getUser(userText)
    .then(data=>{
      if(data.profile.message==='Not Found'){
        // Show Alert
        ui.showAlert('User not found','alert alert-danger')

      }else{
        // Show Profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
      }
    })
  }
  else{
    ui.clearProfile()
  }
})
