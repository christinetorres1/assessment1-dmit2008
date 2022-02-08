import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";

document.querySelector("#chocolateImage").addEventListener("change", onImageSelected);
document.forms["chocolateForm"].addEventListener("submit", onAddChocolate);

function onAddChocolate(e) {
    e.preventDefault();
    uploadNewChocolate();
}


function onImageSelected(e) {

    let file = e.target.files[0];

    document.querySelector(".display img").src = URL.createObjectURL(file);
}

// async function uploadImage(file) {
//     const image = URL.createObjectURL(file);
//     const storageRef = ref(storage, file.name);
//     const temp = await uploadBytes(storageRef, file);
//     console.log(temp);
// }



async function uploadNewChocolate() {
    const name = document.querySelector('#chocolateName').value.trim();
    const price = document.querySelector('#chocolatePrice').value.trim();
    const pieces = document.querySelector('#chocolatePieces').value.trim();
    const file = document.querySelector('#chocolateImage').files[0];

    const imageRef = storageRef(storage, `images/${file.name}`);
    const dataRef = databaseRef( db, 'chocolates')

    const uploadResult = await uploadBytes(imageRef, file);

    const urlPath = await getDownloadURL(imageRef);

    const storagePath = uploadResult.metadata.fullPath;

    const itemRef = await push(dataRef);

    set(itemRef,{
        key:itemRef.key,
        sku: `ctc-${itemRef.key}`,
        urlPath,
        storagePath,
        name,
        price,
        pieces
    })

}