const productsData = [
  {
    name: "Sony Playstation 5",
    url: "images/playstation_5.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "images/samsung_galaxy.png",
    category: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "images/cannon_eos_camera.png",
    category: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "images/sony_a7_camera.png",
    category: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "images/lg_tv.png",
    category: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "images/nintendo_switch.png",
    category: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "images/xbox_series_x.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "images/samsung_tv.png",
    category: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "images/google_pixel.png",
    category: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "images/sony_zv1f_camera.png",
    category: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "images/toshiba_tv.png",
    category: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "images/iphone_14.png",
    type: "smartphones",
    price: 999.99,
  },
];

const productsContainer = document.querySelector(".products");

productsData.map((prod) => {
  productsContainer.innerHTML += `
    <div class="product">
         <div class="img-container">
            <img src=${prod.url} alt=${prod.name} />
            <div class="message">Add to cart</div>
          </div>
          <p class="product-name">${prod.name}</p>
          <p class="price">$${prod.price}</p>
        </div>
    `;
});

const checkBoxChange = (e) => {
  if (e.target.checked) {
    console.log(e.target)
    console.log("checked");
  } else {
    console.log("unchecked");
  }
}
const cameras = document.querySelector("#cameras").addEventListener('change',checkBoxChange)
const smartphones = document.querySelector("#smartphones").addEventListener('change',checkBoxChange)
const games = document.querySelector("#games").addEventListener('change',checkBoxChange)
const telivisions = document.querySelector("#telivisions").addEventListener('change',checkBoxChange)

