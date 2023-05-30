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


function generateProductCards(data) {
    const productContainer = document.getElementById("sec_three");
    //here, you have to loop through so as to arrange each product in it's own collection
    data.forEach((product) => {
      // coming up with a card collection
      const card = document.createElement("div");
      card.classList.add("product-card");
      // Set the card content using the product data
      card.innerHTML = `
              <img src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
              <button>ADD TO CART</button>
              </div>
          `;
      // append the card to the product container
      productContainer.appendChild(card);
    });
  }
  function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Get the first 8 products from the data
        const returnedData = data.products.slice(0, 12);
        // call the function to generate cards
        generateProductCards(returnedData);
      });
  }
  fetchProducts()
  
  
  
  
  
  
