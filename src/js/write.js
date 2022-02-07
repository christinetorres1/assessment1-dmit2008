import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";

document.forms["chocolateForm"].addEventListener("submit", onAddChocolate);
document
    .querySelector("#chocolateImage")
    .addEventListener("change", onImageSelected);

function onImageSelected(e) {
    let file = e.target.files[0];
    document.querySelector(".display img").src = URL.createObjectURL(file);
}

async function uploadImage(file) {
    const image = URL.createObjectURL(file);
    const storageRef = ref(storage, file.name);
    const temp = await uploadBytes(storageRef, file);
    console.log(temp);
}

function onAddChocolate(e) {
    e.preventDefault();
    uploadNewChocolate();
}

async function uploadNewChocolate() {
    const name = document.querySelector('#chocolateName').value.trim();
    const price = document.querySelector('#chocolatePrice').value.trim();
    const pieces = document.querySelector('#chocolatePieces').value.trim();

    const file = document.querySelector('#chocolateImage').files[0]

    const imageRef = storageRef(storage, `images/${file.name}`);
    const dataRef = databaseRef( db, 'chocolates')
    const uploadResult = await uploadBytes(imageRef, file);
    const path = await getDownloadURL(imageRef);
    const imagePath = uploadResult.metadata.fullPath;
    const itemRef = push(dataRef)

    set(itemRef,{
        key:itemRef.key,
        image:imagePath,
        path,
        name,
        price,
        pieces
    })

}