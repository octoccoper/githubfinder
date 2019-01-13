// Initialiaze Github class
const github = new Github;

// input for search user
const searchUser = document.getElementById("searchUser");

let profileData = document.getElementById("profile");

// check data that user enter in the input
searchUser.addEventListener("keyup", (e) => {
        const userText = e.target.value;

        if (!userText == "") {

            // Make HTTP call
            github.getUser(userText)
            .then( data => {
                if(data.profile.message === "Not Found") {
                    profileData.innerHTML = "This user doesn't exist";
                } else {
                    profileData.innerHTML = JSON.stringify(data);
                }
            } )
        }
    }

)