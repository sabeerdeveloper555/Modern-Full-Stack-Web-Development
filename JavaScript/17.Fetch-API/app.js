// let getProduct = async ()  => {
//     let apiFetchResponse = await fetch("https://dummyjson.com/products");

//     let finalRespones = await apiFetchResponse.json();

//     console.log(finalRespones);
//     console.log(finalRespones.products);
// }

// Using .then() and .catch()

let categoryList = document.querySelector("aside ul");
let productsEl = document.querySelector(".products");

let currentSlug = "";

/* ================================
   GET PRODUCTS
================================ */

let getProduct = async (catSlug = "") => {
  let apiUrl;

  if (catSlug === "") {
    apiUrl = "https://fakestoreapi.com/products";
  } else {
    apiUrl = `https://fakestoreapi.com/products/category/${catSlug}`;
  }

  fetch(apiUrl)
    .then((response) => response.json())

    .then((finalResponse) => {
      let products = finalResponse;

      let productList = "";

      products.forEach((object) => {
        productList += `
          <div class="productItems">

            <img
              src="${object.image}"
              alt="${object.title}"
            />

            <h3>${object.title}</h3>

            <div class="priceCart">

              <b>$${object.price}</b>

              <button>Add To Cart</button>

            </div>

          </div>
        `;
      });

      productsEl.innerHTML = productList;
    })

    .catch((error) => {
      console.log("Error:", error);

      productsEl.innerHTML = `
        <p>
          Something went wrong. Please try again.
        </p>
      `;
    });
};

/* ================================
   GET CATEGORIES
================================ */

let getCategory = async () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())

    .then((finalResponse) => {
      let catList = "";

      // All Products option
      catList += `
        <li
          class="${currentSlug === "" ? "activeCat" : ""}"
          data-slug=""
        >
          All Products
        </li>
      `;

      finalResponse.forEach((element) => {
        catList += `
          <li
            class="${element === currentSlug ? "activeCat" : ""}"
            data-slug="${element}"
          >
            ${element}
          </li>
        `;
      });

      categoryList.innerHTML = catList;
    })

    .catch((error) => {
      console.log("Category Error:", error);
    });
};

/* ================================
   CATEGORY CLICK
================================ */

categoryList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    currentSlug = e.target.getAttribute("data-slug");

    getProduct(currentSlug);

    getCategory();
  }
});

/* ================================
   INITIAL LOAD
================================ */

getCategory();

getProduct();
