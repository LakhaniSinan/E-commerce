import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBPR9C5VkFZtItQi6VMQ3onBG0TxhjAcU4",
    authDomain: "clothing-77206.firebaseapp.com",
    databaseURL: "https://clothing-77206.firebaseio.com",
    projectId: "clothing-77206",
    storageBucket: "clothing-77206.appspot.com",
    messagingSenderId: "863393801851",
    appId: "1:863393801851:web:a5cfd3674bc776adc6e4de",
    measurementId: "G-C37QK6XRTK"
  };

export const UserProfile = async (userAuth,addition)=>{
  if(!userAuth) return;

  const userRef=firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  
  

  if(!snapShot.exists){
        const {displayName,email } = userAuth;
        const createdAt=new Date()

        try{
          await userRef.set({displayName,email,createdAt,...addition})
        }
        catch(error){
                console.log(error);
                
        }
  }
  return userRef  
}
  

firebase.initializeApp(config)


export const auth =firebase.auth()
export const firestore = firebase.firestore()

const Provider = new firebase.auth.GoogleAuthProvider()
Provider.setCustomParameters({prompt:'select_account'})
export const SignInWithGoogle = ()=>auth.signInWithPopup(Provider)

export default firebase
