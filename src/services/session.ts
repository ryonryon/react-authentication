import User from "../models/User";

class Session {
  user: User | null = null;

  logIn(email: string, password: string): void {
    this.user = new User(email, password); // sample login;
  }

  SignIn(email: string, password: string): void {
    this.user = new User(email, password); // sample sign in;
  }

  logOut() {
    this.user = null;
  }

  isLoggeddIn(): User {
    return this.user;
  }
}

export default Session;
