import {
  Auth,
  AuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { FireBaseAuthService } from "src/types/Firebase";
import { firebaseApp } from "./firebase";

export default class AuthService implements FireBaseAuthService {
  private auth: Auth = getAuth(firebaseApp);

  private googleProvider: GoogleAuthProvider;

  constructor() {
    this.googleProvider = new GoogleAuthProvider();
  }

  login(providerName: string): Promise<UserCredential> {
    const provider: AuthProvider = this.getProvider(providerName);
    return signInWithPopup(this.auth, provider);
  }

  logout(): void {
    signOut(this.auth);
  }

  private getProvider(providerName: string): AuthProvider {
    switch (providerName) {
      case "google":
        return this.googleProvider;
      // case: github, phone number etc...
      default:
        throw new Error("provider error");
    }
  }

  onAuthChange(onUserChanged: Function): void {
    onAuthStateChanged(this.auth, (user: User | null) => {
      onUserChanged(user);
    });
  }
}
