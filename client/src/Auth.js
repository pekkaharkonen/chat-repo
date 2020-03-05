import { isAuthenticated } from './services/authClient';

const Auth = {
  async isAuth() {
    let bool = await isAuthenticated();
    if (bool === true) {
      this.isLogged = !this.isLogged;
    }
    return bool;
  }
};

export default Auth;
