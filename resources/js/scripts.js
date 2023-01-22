export async function fetchResource(url){
    const location = "https://api.rss2json.com/v1/api.json?rss_url=" + url
    try{
      const resource = await fetch(location)
      if (resource.status >=400){
        throw "Client or Server error"
      }else{
        return await resource.json()
      }
    }catch(err){
      return null
    }
    }

 async function createCard(img,title,description){
    const card = document.createElement("div")
    card.setAttribute("class","card")
    card.innerHTML = `<div class="card">
    <img src="${img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p> 
    </div>
  </div>`
  return card
}

export async function makeCarousel(items,carouselInner){
    
    items.forEach((item)=>{
      const carouselItem = document.createElement("div")
    carouselItem.setAttribute("class","carousel-item")
      carouselItem.innerHTML = `<a href="${item.link}" target="_blank" class="c-link"> <div class="card">
      <img src="${item.enclosure.link}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.author} <i class="fa-solid fa-circle fa-2xs "></i> ${item.pubDate.split(" ")[0]}</h6>
        <p class="card-text">${item.description}</p>
      </div>
    </div></a>`

    carouselInner.append(carouselItem)
    })
    carouselInner.firstChild.classList.add("active")
  

}