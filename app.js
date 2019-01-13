// Initialiaze Github class
const github = new Github;

// Initialiaze UI class
const ui = new UI;

// input for search user
const searchUser = document.getElementById("searchUser");


// check data that user enter in the input
searchUser.addEventListener("keyup", (e) => {
        const userText = e.target.value;

        if (userText !== "") {

            // Make HTTP call
            github.getUser(userText)
                .then(data => {
                    if (data.profile.message === "Not Found") {
                        ui.showAlert("This user not found", "alert alert-danger");
                    } else {
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repo);
                    }
                })
        } else {
            // Clear profile data on page
            clearProfile();
        }
    }

)