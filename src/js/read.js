import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {card} from './templates/card'

async function pageInit() {
    const chocolateRef = dataRef(db, 'chocolates/');
    const chocolateSnapShot = await get(chocolateRef)
    const chocolateData = { ...chocolateSnapShot.val()}
    const chocolates = Object.keys(chocolateData).map(chocolate => {
        return chocolateData[chocolate]
    })

    console.log(chocolates)
}

pageInit()
