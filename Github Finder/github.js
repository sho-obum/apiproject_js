class Github {
    constructor(){
        this.client_id = 'f0ee2d1ae225ec0657c2';
        this.clientt_secret = 'b031b23864e4e5a0ef64a2530e4bfbe6a7fd6856';
    }
    async getUser(user){
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.clientt_secret}`);
        const profile = await profileResponse.json();

        return{
            profile
        }
        
    }
}