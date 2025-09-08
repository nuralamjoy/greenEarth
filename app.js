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
const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => Cdisplay(json.categories));
};

const Cdisplay = (cat) => {
  //1
  const catagories1 = document.getElementById("catagories1");
  const catagories2 = document.getElementById("catagories2");
  //2
  for (let catagory of cat) {
    //3
    const list = document.createElement("li");
    list.innerHTML = `<li>
    <button class=" cursor-pointer w-full text-left px-3 py-2 rounded hover:bg-green-100">
      ${catagory.category_name}
    </button>
  </li>
    `;
    //4
    catagories1.append(list);
    catagories2.append(list.cloneNode(true));
  }
};

loadData();

//  1.get the container and empty
//  2.get into every lesson using for loop
//  3.create element
//  4.append into container
