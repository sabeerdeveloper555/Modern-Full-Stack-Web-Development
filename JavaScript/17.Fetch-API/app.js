// let getProduct = async ()  => {
//     let apiFetchResponse = await fetch("https://dummyjson.com/products");

//     let finalRespones = await apiFetchResponse.json();

//     console.log(finalRespones);
//     console.log(finalRespones.products);
// }

// Using .then() and .catch()

let categoryList = document.querySelector("aside ul");

let productsEl = document.querySelector(".products");

let getProduct = async () => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((finalResponse) => {
      let { products } = finalResponse;
      let productList = "";
      products.forEach((object) => {
        productList += `<div class="productItems">
              <img
                src="${object.thumbnail}"
                alt="Powder Canister"
              />
              <div class="priceCart">
                  <b>${object.price}</b>
                  <button>Add To Cart</button>
                </div>
                <h3>${object.title}</h3>
            </div>`;
      });

      productsEl.innerHTML = productList;
      console.log(products);
    });
};

let getCategory = async () => {
  fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((finalResponse) => {
      let catList = "";
      finalResponse.forEach((element) => {
        catList += `<li>${element.name}</li>`;
      });
      categoryList.innerHTML = catList;
    });
};

getCategory();
getProduct();
