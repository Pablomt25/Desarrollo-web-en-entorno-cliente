import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { getDocs, getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { getAuth, signInWithPopup,GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, Auth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth; 

  firestore = inject(Firestore);
  datosFS: any[] = [];

  constructor(private http: HttpClient) {
    this.auth = getAuth();  
  }

  obtenerDatosFirestrore() {
    getDocs(collection(this.firestore, 'todos')).then((response) => {
      this.datosFS = response.docs.map((doc) => doc.data());
      console.log(this.datosFS);
    });
  }

  iniciarSesionGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  iniciarSesionFacebook() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  iniciarSesionEmailPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  iniciarSesionGitHub() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  registrarUsuario(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  cerrarSesion() {
    return signOut(this.auth);
  }
}