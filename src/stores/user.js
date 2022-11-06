import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    toke:null,
    role: 'public',
    info:null,
  }),

  actions: {
    async fetchUser() {

        this.$axios.get('https://localhost:3000/user').then(res => (this.info = res))
        this.user=this.info.user;
        this.token=this.info.token;
        this.role=this.info.role;

        
      
      const res = await fetch("https://localhost:3000/user");

      const user = await res.json();
      this.user = user.id;
      this.token = user.token;
      this.role = user.role;
    },
    async signUp(email, password) {
      const res = await fetch("https://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json()
      this.user = user.id;
      this.token = user.token;
      this.role = user.role;
    },
    async signIn(email, password) {
      const res = await fetch("https://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json();
      this.user = user.id;
      this.token = user.token;
      this.role = user.role;
    },
  },
});