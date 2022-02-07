function card ({key, name, urlPath}){
    const template = `
        
    <aside class="vacation-rentals">
  
    <figure>
    <img src="${urlPath}" width="160" alt="chocolate">
        <figcaption> <h2>${name}</h2></figcaption>
    </figure>
  
    <footer>
        <button id="edit" data-key="${key}" >edit</button>
        <button id="delete" data-key="${key}" >delete</button>
    </footer>
  
  </aside>
    `
    const element = document.createRange().createContextualFragment(template).children[0]
    addCardControls(element)
    return element
  }
  
  function addCardControls(chocolate){
    chocolate.querySelector('#edit').addEventListener('click', onEditRental)
    chocolate.querySelector('#delete').addEventListener('click', onRemoveRental)
  }
  
  
  function onEditRental(e){
      const key = e.target.dataset.key 
      sessionStorage.setItem('key', key)
      window.location.assign('update.html')
  }
  
  function onRemoveChocolate(e){
      const key = e.target.dataset.key 
      sessionStorage.setItem('key', key)
      window.location.assign('delete.html')
  }
  export {card}