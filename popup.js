window.onload = imageLoading;

function menuShow() {
    let popup = document.querySelector('.nav');
    popup.classList.toggle('sidenav');
    let links = document.querySelector('.links');
    if (popup.classList.contains('sidenav'))
        links.style.display = 'block';
    else
        links.style.display = 'none';
}

function imageLoading() {
    productsLoading();
    let bar = document.querySelector(".showbar");
    let items = [
        { "name": "Men's Clothes", "image": "images/men's.jpeg",id:2},
        { "name": "Women's Clothes", "image": "images/women'sclothes.jpeg",id:20},
        { "name": "Jewellery", "image": "images/jewellery.jpeg" ,id:6},
        { "name": "Electronics", "image": "images/electronics.jpeg",id:13},
        { "name": "Bags", "image": "images/bags.jpeg" ,id:1},
    ];
    let itemhtml = items.map((data) => {
        return `<div class="item m-2">
            <a href="product.html?id=${data.id}" class="text-decoration-none">
             <img src="${data.image}" alt="image" />
              <p class="text-center mt-1">${data.name}</p>
            </a>
           </div>`;
    }).join('');

    bar.innerHTML = itemhtml;
}



async function productsLoading() {
    
    
    let products = await fetch('http://localhost:5000/products');
    let res = await products.json();
   
    let productsHtml = document.querySelector('.products');
    let item = res.map((data) => {
        return (
            `<div class='product'>
                <a class="text-decoration-none" href="product.html?id=${data.id}" onclick="storeProductId(${data.id})">
                    <img src='${data.image}' alt="image" />
                    <div class='text-start title'>Name: ${data.title}</div>
                    <div class='text-start price'>Price: $${data.price}</div>
                </a>  

            </div>`
        );
    }).join('');
    productsHtml.innerHTML = item;
}