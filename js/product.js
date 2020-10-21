const getProducts = async () => {
  const res = await fetch("products.json");
  const data = await res.json();
  const products = data.products;
  return products;
};

// Display Product
const displayProducts = (products, center) => {
  let display = products.map(
    ({ title, image, price }) => `<div class="product">
          <div class="product__header">
            <img src=${image} alt="product">
          </div>
          <div class="product__footer">
            <h3>${title}</h3>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="product__price">
              <h4>$${price}</h4>
            </div>
          </div>
          <ul>
            <li>
              <a href="#">
                <i class="far fa-eye"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="far fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-sync"></i>
              </a>
            </li>
          </ul>
        </div>`
  );

  display = display.join("");
  center.innerHTML = display;
};

// Filtering
const catContainer = document.querySelector(".sort-category");
const filterBtns = [...document.querySelectorAll(".filter-btn")];

if (catContainer) {
  catContainer.addEventListener("click", async e => {
    const target = e.target.closest(".section__title");
    if (!target) return;
    const id = target.dataset.id;
    const products = await getProducts();

    if (id) {
      filterBtns.forEach(btn => {
        btn.classList.remove("active");
      });
      target.classList.add("active");
      const menuCat = products.filter(product => product.category === id);
      productCenter.classList.add("animate__animated", "animate__backInUp");
      setTimeout(() => {
        productCenter.classList.remove(
          "animate__animated",
          "animate__backInUp"
        );
      }, 1000);
      displayProducts(menuCat, productCenter);
    }
  });
}

const productCenter = document.querySelector(".product__center");
const latestCenter = document.querySelector(".latest__center");
const relatedCenter = document.querySelector(".related__center");

const filterArray = async type => {
  const products = await getProducts();
  return products.filter(product => product.category === type);
};

window.addEventListener("DOMContentLoaded", async () => {
  const defaultProducts = await filterArray("trend");
  const latestProducts = await filterArray("latest");
  const relatedProducts = await filterArray("related");
  displayProducts(defaultProducts, productCenter);
  displayProducts(latestProducts, latestCenter);
  displayProducts(relatedProducts, relatedCenter);
});

// Latest
