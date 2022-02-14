import {ref as dataRef, get, remove} from 'firebase/database';
import {ref as storageRef} from "firebase/database";
import {db, storage} from './libs/firebase/firebaseConfig';
import {card} from './templates/card';




pageInit()


async function pageInit() {

    document.querySelector(".btn-delete-confirm").addEventListener("click", deleteChocolate);
    document.querySelector(".btn-delete-cancel").addEventListener("click", onCancel)


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
    
    const key = sessionStorage.getItem("key");

    const chocolateRef = dataRef(db, `chocolates/${key}`);
    const chocolateSnapShot = await get(chocolateRef);


    // console.log(chocolateRef);

    if (chocolateSnapShot.exists()) {
        const chocolateInfo = chocolateSnapShot.val();

        const chocolateImgRef = storageRef(storage, chocolateInfo.storagePath);
        
        // console.log(chocolateImgRef)
        
        deleteObject(chocolateImgRef)

            .then(() => {
                remove(chocolateRef)
            

                .then(() => {
                    const card = document.querySelector(`#chocolateCard${key}`);
                    card.remove();

                    sessionStorage.removeItem("key");

                    e.target.closest(".confirm-delete-overlay").classList.add("hidden");
                });
            
            });
    }
}


function onCancel (e) {
    sessionStorage.removeItem("key");

    e.target.closest(".confirm-delete-overlay").classList.add("hidden");
}
