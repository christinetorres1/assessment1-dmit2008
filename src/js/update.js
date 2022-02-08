import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, set, get} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";


function pageInit () {
    const key = sessionStorage.getItem('key');
    const chocolateRef = databaseRef(db, `chocolates/${key}`)
    const chocolateSnapShot = await get(chocolateRef)
    const chocolate = chocolateSnapShot.val()

    if(chocolate.exists())
    {
        setFieldValues(chocolateSnapShot.val())        
    }

}


function setFieldValues(chocolate) {
    const chocolateForm = document
}