import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {card} from './templates/card';

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

pageInit()
