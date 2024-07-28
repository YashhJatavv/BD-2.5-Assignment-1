let express = require("express");
let cors = require("cors");

let app = express();
let port = 3000;

app.use(cors());

//Data.
let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

//Home
app.get("/", (req, res) => {
  res.send("Welcome to Flip Deal Product Listing Page...");
});

//Endpoint 1: Get the products sorted by popularity.
//Express code snippet to sort products based on their individual ratings (high to low).
function sortProductsByRating(product1_object, product2_object){
  return product2_object.rating - product1_object.rating;
};

app.get("/products/sort/popularity", (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByRating);
  res.json({products : sortedProducts});
});

//Endpoint 2: Get the products sorted by “high-to-low” price.
//Express code snippet to sort products based on their individual pricing.
function sortProductsByHighToLowPrice(product1_object, product2_object){
  return product2_object.price - product1_object.price;
};

app.get("/products/sort/price-high-to-low", (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByHighToLowPrice);
  res.json({products : sortedProducts});
});

//Endpoint 3: Get the products sorted by “low-to-high” price.
//Express code snippet to sort products based on their individual pricing.
function sortProductsByLowToHighPrice(product1_object, product2_object){
  return product1_object.price - product2_object.price;
};

app.get("/products/sort/price-low-to-high", (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByLowToHighPrice);
  res.json({products : sortedProducts});
});

//Endpoint 4: Filter the products based on the “RAM” option.
//Express code snippet to filter products based on the selected RAM option.
function filterByRam(products, ram){
  return products.ram === ram;
};

app.get("/products/filter/ram", (req, res) => {
  let ram = parseFloat(req.query.ram);
  let sortedProducts = products.filter(product => filterByRam(product, ram));
  res.json({products : sortedProducts});
});

//Endpoint 5: Filter the products based on the “ROM” option.
//Express code snippet to filter products based on the selected ROM option.
function filterByRom(products, rom){
  return products.rom === rom;
};

app.get("/products/filter/rom", (req, res) => {
  let rom = parseFloat(req.query.rom);
  let sortedProducts = products.filter(product => filterByRom(product, rom));
  res.json({products : sortedProducts});
});

//Endpoint 6: Filter the products based on the “Brand” option.
//Express code snippet to filter products based on the selected Brand option.
function filterByBrand(products, brand){
  return products.brand.toLowerCase() === brand;
};

app.get("/products/filter/brand", (req, res) => {
  let brand = (req.query.brand).toLowerCase();
  let sortedProducts = products.filter(product => filterByBrand(product, brand));
  res.json({products : sortedProducts});
});

//Endpoint 7: Filter the products based on the “OS” option.
//Express code snippet to filter products based on the selected OS option.
function filterByOs(products, os){
  return products.os.toLowerCase() === os;
};

app.get("/products/filter/os", (req, res) => {
  let os = (req.query.os).toLowerCase();
  let sortedProducts = products.filter(product => filterByOs(product, os));
  res.json({products : sortedProducts});
});

//Endpoint 8: Filter the products based on the “Price” option.
//Express code snippet to filter products based on the selected price option.
function filterByPrice(products, price){
  return products.price <= price;
};

app.get("/products/filter/price", (req, res) => {
  let price = req.query.price;
  let sortedProducts = products.filter(product => filterByPrice(product, price));
  res.json({products : sortedProducts});
});

//Endpoint 9: Send original array of products.
//Express code snippet to send all available products.
function allProducts(products){
  return products;
}

app.get("/products", (req, res) => {
  res.json(allProducts(products));
});


app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
})