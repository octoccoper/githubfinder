class Github {
    constructor() {
        this.client_id = "0eb39d26063ebc34694c";
        this.client_secret = "090e795b717f5195903180999b4b26fac3871bed";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        
        const profilerResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profilerResponse.json();
        const repo = await repoResponse.json();

        return {
            profile,
            repo
        }




    }

}