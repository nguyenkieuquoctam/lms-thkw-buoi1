const product = {
                    name: "hoa hồng pháp",
                    price:  "200k/túi",
                    description: "hoa hồng pháp là loài hoa đến từ nước pháp xinh đẹp",
                    image: "../assets/image/hoa.ipg",
                    linkProduct: "https://www.dienmayxanh.com/kinh-nghiem-hay/hieu-ro-y-nghia-hoa-hong-giup-ban-chinh-phuc-nang-1321035?srsltid=AfmBOopSAPRVOjbvX7iLQBlWUdL36NSbheHg9xRw4syXPlt4m3qk3Ruk" 
                }

function createItem(obj)//obj là đối đối tượng quản lý thông tin sản phẩm 
{
    const item = document.createElement("div");
    item.setAttribute("class","container-item");

    //tạo thêm 2 con trong khung chứa : image và info
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class","container-image");

    //tọa hình ảnh và đưa khung chứ image
    const iamge = document.createElement("img");
    image.setAttribute("src", obj.image);
    image.setAttribute("alt", obj.name);
    containerImage.appendChild(image);


    const containerinfo = document.createElement("div");
    containerinfo.setAttribute("class","container-info");
    
    //tạo 3 đối tượng <p> và 1 <a>
    const name = document.createElement("p");
    name.innerHTML = obj.name;

    const price = document.createElement("p");
    price.innerHTML = obj.price;

    const description = document.createElement("p");
    description.innerHTML = obj.description;

    const link = document.createElement("a");
    link.innerHTML = "xem chi tiết";
    link.setAttribute("href", obj.linkProduct);

    //đưa 4 vào khung chứa container-info
    containerinfo.appendChild(name);
    containerinfo.appendChild(price);
    containerinfo.appendChild(description);
    containerinfo.appendChild(link);

    //chèn 2 khung chứa vào container-item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    //đưa item vào product-list
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
                         <h4 class="card-title">${obj.name}/h4>
                         <h5 class ="card-text">${obj.price}</h5>
                         <p class ="card-text"> ${obj.description}</p>
                         <a href ="${obj.linkProduct}" class="card-link"> xem chi tiết</a>
                        </div>
                 </div>
        </div>
  `;
}
 function loadAllproducts(array)
 {
    let i = 0;
    while(i<array.legth)
    {
        createItemv2(array[i]);
        i++;
    }

 }