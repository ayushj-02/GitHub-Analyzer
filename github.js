class GitHub{
  constructor(){
      this.client_id='91f178c1d836e3b161ae';
      this.client_secret='deb8489ea05ad23b9deb3f28123d2d16780cd62d';
      this.repos_count=5;
      this.repos_sort='created: asc'
  }
  async getUser(user){
    const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    


    const profile=await profileResponse.json();
    const repos=await repoResponse.json();

    return{
      profile,
      repos
    }
  }
}