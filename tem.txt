import { createContext } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database';

// context api
const newContext = createContext();
export const Context = newContext;
// ########################################

// Firebase database connections
const firebaseConfig = {
    apiKey: "AIzaSyDRPfRNZUdUuMEhPwdot_Zbl3MHGJ6LsgQ",
    authDomain: "shopypi.firebaseapp.com",
    databaseURL: "https://shopypi-default-rtdb.firebaseio.com",
    projectId: "shopypi",
    storageBucket: "shopypi.appspot.com",
    messagingSenderId: "76428485275",
    appId: "1:76428485275:web:866b18648217ee92381c3e",
    measurementId: "G-V50VHTKW6L"
};

const firebaseDB = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseDB);
const database = getDatabase(firebaseDB);

const singupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
}

const putData = (key, data) => set(ref(database, key), data);

const AppContext = (props) => {
    return (
        <Context.Provider value={{ singupUserWithEmailAndPassword, putData }}>
            {props.children}
        </Context.Provider>
    );
}

export default AppContext;
