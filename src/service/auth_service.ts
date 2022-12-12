import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { firebaseApp } from "./firebase";

export default class AuthService {
  firebaseAuth: any;

  googleProvider: GoogleAuthProvider;

  githubProvider: GithubAuthProvider;

  constructor() {
    this.firebaseAuth = getAuth(firebaseApp);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName: any) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  // logout
  logout() {
    this.firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged: (arg0: any) => void) {
    this.firebaseAuth.onAuthStateChanged((user: any) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName: any) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`Not supported provider :${providerName}`);
    }
  }
}
