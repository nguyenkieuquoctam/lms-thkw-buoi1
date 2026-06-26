const product = {
                    name: "hoa hồng pháp",
                    price:  "200k/túi",
                    description: "hoa hồng pháp là loài hoa đến từ nước pháp xinh đẹp",
                    image: "../assets/images/hoa.jpg",
                    linkProduct: "...." 
                }


function createItem(obj)
{
    const item = document.createElement("div");
    item.setAttribute("class","container-Item");

    
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class","container-image");

   
    const image = document.createElement("img");
    image.setAttribute("src", obj.image);
    image.setAttribute("alt", obj.name);
    containerImage.appendChild(image);


    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class","container-Info");
    
   
    const name = document.createElement("p");
    name.innerHTML = obj.name;

    const price = document.createElement("p");
    price.innerHTML = obj.price;

    const description = document.createElement("p");
    description.innerHTML = obj.description;

    const link = document.createElement("a");
    link.innerHTML = "xem chi tiết";
    link.setAttribute("href", obj.linkProduct);

  
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(link);

   
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    
    document.getElementById("product-list").appendChild(item);

}              


function createItemv2(obj)
{
  const list = document.getElementById("product-list");
  list.innerHTML +=`
     <div class="col">
                    <div class="card product-Item">
                        <div class="product-Image">
                            <img class="card-img-top" src="${obj.image}" alt="${obj.name}">
                        </div>
                        <div class="card-body product-Info">
                         <h4 class="card-title">${obj.name}</h4>
                         <h5 class ="card-text">${obj.price}</h5>
                         <p class ="card-text"> ${obj.description}</p>
                        <a href="chi tiết.html?masp=${obj.id}" class="card-link">xem chi tiết</a>
                        </div>
                 </div>
        </div>
  `;
}
 function loadAllproducts(array)
 {
    let i = 0;
    while(i < array.length)
    {
        createItemv2(array[i]);
        i++;
    }

 }