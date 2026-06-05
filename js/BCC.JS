 const product = {
                    name: "hoa hồng pháp",
                    price:  "200k/túi",
                    description: "hoa hồng pháp là loài hoa đến từ nước pháp xinh đẹp",
                    image: "../assets/image/hoa.ipg",
                    linkProduct: "chi-tiet.html" 
                }

 
 
 
 
 function inBCC() {
            let n = document.getElementById("txtSo").value;
            let result = "";

            for (let i = 1; i <= 10; i++) {
                result += `${n} x ${i} = ${n * i}<br>`;
            }
            document.getElementById("result").innerHTML = result;
}



function createItem{obj}//obj là đối đối tượng quản lý thông tin sản phẩm 
{
    const item = document.createElement("div")
    item.setAttribute("class","container-item")

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