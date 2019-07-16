import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import key from './key'

const firebaseConfig = {
  apiKey: key.firebase,
  authDomain: "crwn-db-ff01b.firebaseapp.com",
  databaseURL: "https://crwn-db-ff01b.firebaseio.com",
  projectId: "crwn-db-ff01b",
  storageBucket: "",
  messagingSenderId: "855311739943",
  appId: "1:855311739943:web:9abcbda440debfa5"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
  if(!userAuth){ return }

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log(`Error creating user`,error)
    }
  }

  console.log(snapShot)
  return userRef
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt:'select_account'
})
export const sighInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase