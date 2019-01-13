class Github {
    constructor() {
        this.client_id = "0eb39d26063ebc34694c";
        this.client_secret = "090e795b717f5195903180999b4b26fac3871bed";
    }

    async getUser(user) {
        const profilerResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}?client_secret=${this.client_secret}`);
        const profile = await profilerResponse.json();
        return {
            profile
        }
    }

}