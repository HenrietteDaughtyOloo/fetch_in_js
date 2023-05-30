// let productContainer= document.getElementById('sec_three')
// const getProducts=()=>{
//    return fetch ('https://dummyjson.com/products?limit=8')
//     .then(response =>response.json())
//     .then(response => response)
//     .catch(error=> error.message)
// }
// getProducts()
// const displayProducts=async()=>{
//     const products=await getProducts();
//     console.log(products.products)
//     products.products.map(item=>{ 
//        let div=document.createElement('div');
//        div.className='products';
       
//        let img=document.createElement('img');
//        let title=document.createElement('h2');
//        let description=document.createElement('p');
//        let price= document.createElement('h3');

 
//        img.src=item.images;
//        title.innerHTML=item.title;
//        description.innerHTML=item.description;
//        price.innerHTML=item.price
//        div.appendChild(img);
//        div.appendChild(title);
//        div.appendChild(description);
//        productContainer.appendChild(div)
//     })
// }
// displayProducts()


function collectionOfProducts(info) {
    const productCollection = document.getElementById("thirdSection");
    //here, you have to loop through so as to arrange each product in it's own collection
    info.forEach((product) => {
      // coming up with a card collection
      const oneCollection = document.createElement("div");
      oneCollection.classList.add("product-card");
      // Include the product data per collection
      oneCollection.innerHTML = `
              <img src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
              <button>ADD TO CART</button>
              </div>
          `;
      // now you have to push that is append it to the holding collection made earlier
      productCollection.appendChild(oneCollection);
    });
  }
  function displayProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((info) => {
        // to access the first 6 products
        const collectionInfo = info.products.slice(0, 6);
        // the function therefore must be called to display the collection
        collectionOfProducts(collectionInfo);
      });
  }
  displayProducts()
  
  
  
  
  
  
