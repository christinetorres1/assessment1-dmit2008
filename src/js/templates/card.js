import {ref as dataRef, get, set, update, remove} from 'firebase/database';
import {ref as storageRef, deleteObject} from "firebase/database";
import {db} from '../libs/firebase/firebaseConfig';

function card ({key, name, price, pieces, urlPath}){
    const template = `
        
    <aside class="chocolate-menu" id="chocolateCard${key}">
  
    <figure>
    <img src="${urlPath}" width="160" alt="chocolate">
        <figcaption> <h2>${name}</h2></figcaption>
        <figcaption> <h2>Price: ${price}</h2></figcaption>
        <figcaption> <h2>Piece(s): ${pieces}</h2></figcaption>
    </figure>
  
    <footer>
        <button id="edit" data-key="${key}" >Edit</button>
        <button class="btn-delete" id="delete" data-key="${key}" >Delete</button>
    </footer>
  
  </aside>
    `
    const element = document.createRange().createContextualFragment(template).children[0]
    addCardControls(element)
    return element
  }
  
  function addCardControls(chocolate){
    chocolate.querySelector('#edit').addEventListener('click', onEditChocolate)
    chocolate.querySelector('#delete').addEventListener('click', onRemoveChocolate)
  }
  
  
  function onEditChocolate(e){
      const key = e.target.dataset.key 
      sessionStorage.setItem('key', key)
      window.location.assign('update.html')
  }
  
//   async function deleteChocolate(e) {
    
//     const key = sessionStorage.getItem("key");

//     const chocolateRef = dataRef(db, `chocolates/${key}`);
//     const chocolateSnapShot = await get(chocolateRef);

//     if (chocolateSnapShot.exists()) {
//         const chocolateInfo = chocolateSnapShot.val();


//         const chocolateImgRef = storageRef(db, chocolateInfo.storagePath);
//         deleteObject(chocolateImgRef)

//             .then(() => {
//                 remove(chocolateRef)
            

//                 .then(() => {
//                     const card = document.querySelector(`#chocolateCard${key}`);
//                     card.remove();

//                     sessionStorage.removeItem("key");

                
//                 });
            
//             });
//     }
// }

  function onRemoveChocolate(e){
      const key = e.target.dataset.key 
      sessionStorage.setItem('key', key)

      document.querySelector(".confirm-delete-overlay").classList.remove("hidden");
     
  }

  export {card}