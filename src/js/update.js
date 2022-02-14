// import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import {ref as databaseRef, set, get} from 'firebase/database'
// import { db, storage  } from "./libs/firebase/firebaseConfig";


// const chocolateForm = document.forms['chocolateForm']

// async function pageInit () {
//     const key = sessionStorage.getItem('key');
//     const chocolateRef = databaseRef(db, `chocolates/${key}`)
//     const chocolateSnapShot = await get(chocolateRef)
//     // const chocolate = chocolateSnapShot.val()

//     if(chocolateSnapShot.exists()) {
//         setFieldValues(chocolateSnapShot.val())        
//     }

//     chocolateForm.addEventListener('submit', onUpdateChocolate)

// }

// function onUpdateChocolate(e) {
//     e.preventDefault();
//     // const name = e.target.elements['chocolateName'].value.trim();
//     // const price = e.target.elements['chocolatePrice'].value.trim();
//     // const pieces = e.target.elements['chocolatePieces'].value.trim();
//     // const file = e.target.elements['chocolateImage'].files

//     updateChocolateData();
// }


// function setFieldValues({name, price, pieces, urlPath}) {
//     const name = chocolateForm.elements['chocolateName'].value
//     const urlPath = document.querySelector('#uploadImage').src
// }

// function updateChocolateData(){
//     const name = chocolateForm.elements['chocolateName'].value.trim();
//     const price = chocolateForm.elements['chocolatePrice'].value.trim();
//     const pieces = chocolateForm.elements['chocolatePieces'].value.trim();
//     const file = chocolateForm.elements['chocolateImage'].files

//     if(file.length !== 0) {
//         const imageRef = storageRef(storage, `images/${file.name}`)
        
//     }

//     const key = sessionStorage.getItem('key');
//     const dataRef = databaseRef(db, `chocolates/${key}`)

//     set (dataRef, {
//         urlPath,
//         name,
//         price,
//         pieces
//     })
// }

// pageInit()