

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
  
  function onRemoveChocolate(e){
      const key = e.target.dataset.key 
      sessionStorage.setItem('key', key)
     
  }

  export {card}