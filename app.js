// let title = document.getElementById("cardtitle");
// const loadData = () => {
//   //   const url = `https://openapi.programming-hero.com/api/plants`;
//   fetch("https://openapi.programming-hero.com/api/plants")
//     .then((res) => res.json())
//     .then((json) => display(json.plants));
// };

// const display = (cat) => {
//   const obj = cat[0];
// //   const img = document.createElement("img");
//     title.innerHTML = `<img src="${obj.image}" class="w-full h-full object-cover" >`;
// };

// loadData();

const cat = document.getElementById("cat");
const cart = document.getElementById("cartBtn");
// let tgl = 0;
cat.addEventListener("click", () => {
  const catList = document.getElementById("catList");
  catList.classList.toggle("left-0"); // visible
  catList.classList.toggle("left-[-100%]");
});
cart.addEventListener("click", () => {
  const cartList = document.getElementById("cartList");
  cartList.classList.toggle("right-0"); // screen e asbe
  cartList.classList.toggle("right-[-100%]");
});

//============Apiiiiiiiiiiiii=======
const CatagoryData = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => CatagoriesDisplay(json.categories));
};

const CatagoriesDisplay = (cat) => {
  //1
  const catagories1 = document.getElementById("catagories1");
  const catagories2 = document.getElementById("catagories2");
  //2
  for (let catagory of cat) {
    //3
    const list = document.createElement("li");
    list.innerHTML = `
    <button class=" cursor-pointer w-full text-left px-3 py-2 rounded hover:bg-green-100">
      ${catagory.category_name}
    </button>
  
    `;
    //4
    catagories1.append(list);
    catagories2.append(list.cloneNode(true));
  }
};

CatagoryData();

const AllTreesData = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => allTreesDisplay(json.plants));
};

const allTreesDisplay = (cat) => {
  //1
  const allTrees = document.getElementById("allTrees");
  //2
  for (let card of cat) {
    //3
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-white p-4 rounded-lg shadow flex flex-col h-full">
    <div class="flex-1">
      <div id="cardtitle" class="h-32  rounded">
        <img src="${card.image}" class="w-full h-full object-cover" >
      </div>
      <h3 class="mt-3 font-semibold">${card.name}</h3>
      <p class="text-sm text-gray-600">
      ${card.description}
      </p>
      <span class="inline-block mt-2 text-xs px-2 py-1 bg-green-100 text-green-700 rounded">${card.category}</span>
      <div class="flex justify-between items-center mt-3">
        <span class="font-bold">৳ ${card.price}</span>
      </div>
    </div>
    <button class="mt-4 w-full bg-[#15803D] text-white py-2 rounded-full">
      Add to Cart
    </button>
  </div>
    `;
    //4
    allTrees.append(div);
    // catagories2.append(list.cloneNode(true));
  }
};

AllTreesData();




//  1.get the container and empty
//  2.get into every lesson using for loop
//  3.create element
//  4.append into container
