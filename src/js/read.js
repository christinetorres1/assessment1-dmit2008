import {ref as dataRef, get, set, update, remove} from 'firebase/database';
import {ref as storageRef, deleteObject} from "firebase/database";
import {db} from './libs/firebase/firebaseConfig';
import {card} from './templates/card';

pageInit()





async function pageInit() {
    const chocolateRef = dataRef(db, 'chocolates/');
    const chocolateSnapShot = await get(chocolateRef);
    const chocolateData = chocolateSnapShot.val();

    const chocolateCards = Object.values(chocolateData).map(chocolate => {
        const chocolateCard = card(chocolate)
        
        document.querySelector('.widget').append(chocolateCard)

        return chocolateCard 
    })


   
}




async function deleteChocolate(e) {
    
    document.querySelector(".btn-delete").addEventListener("click", deleteChocolate)
    
    const key = sessionStorage.getItem("key");

    const chocolateRef = dataRef(db, `chocolates/${key}`);
    const chocolateSnapShot = await get(chocolateRef);

    if (chocolateSnapShot.exists()) {
        const chocolateInfo = chocolateSnapShot.val();

        const chocolateImgRef = storageRef(storage, chocolateInfo.storagePath);
        deleteObject(chocolateImgRef)

            .then(() => {
                remove(chocolateRef)
            

                .then(() => {
                    const card = document.querySelector(`#chocolateCard${key}`);
                    card.remove();

                    sessionStorage.removeItem("key");

                
                });
            
            });
    }
}