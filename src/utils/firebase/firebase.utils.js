import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDcqYWSpBZeEnLdhuxktD83ULShFA0fz-0',
  authDomain: 'crwn-clothing-db-b6bd6.firebaseapp.com',
  projectId: 'crwn-clothing-db-b6bd6',
  storageBucket: 'crwn-clothing-db-b6bd6.appspot.com',
  messagingSenderId: '519267384389',
  appId: '1:519267384389:web:743e05bf748128ee32772c'
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
