let totalTk = 0;
const total = document.querySelectorAll(".total");
total[0].innerHTML = `৳ ${totalTk}`;
total[1].innerHTML = `৳ ${totalTk}`;

const cat = document.getElementById("cat");
const cart = document.getElementById("cartBtn");

cat.addEventListener("click", () => {
  const catList = document.getElementById("catList");
  catList.classList.toggle("left-0"); 
  catList.classList.toggle("left-[-100%]");
});
cart.addEventListener("click", () => {
  const cartList = document.getElementById("cartList");
  cartList.classList.toggle("right-0"); 
  cartList.classList.toggle("right-[-100%]");
});

const CatagoryData = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => CatagoriesDisplay(json.categories));
};

const CatagoriesDisplay = (cat) => {
  const catagories1 = document.getElementById("catagories1");
  const catagories2 = document.getElementById("catagories2");

  for (let catagory of cat) {
    const btnHTML = `
      <li>
        <button onclick="CatDataDisplay(${catagory.id})" 
          class="catBtn cursor-pointer w-full text-left px-3 py-2 rounded hover:bg-green-100"
          data-id="${catagory.id}">
          ${catagory.category_name}
        </button>
      </li>
    `;

    catagories1.innerHTML += btnHTML;
    catagories2.innerHTML += btnHTML;
  }
};

CatagoryData();

const CatDataDisplay = (id) => {
  mngSpinner(1);
  if (id == 0) {
    AllTreesData();

    const catBtn = document.querySelectorAll(".catBtn");
    catBtn.forEach((btn) => {
      btn.classList.remove("active");
      btn.classList.add("in_active");
    });

    const catBtbData = document.querySelectorAll(`.catBtn[data-id="${id}"]`);
    catBtbData.forEach((btn) => {
      btn.classList.add("active");
      btn.classList.remove("in_active");
    });
    return;
  }
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((json) => {
      allTreesDisplay(json.plants);

      const catBtn = document.querySelectorAll(".catBtn");
      catBtn.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.add("in_active");
      });

      const catBtbData = document.querySelectorAll(`.catBtn[data-id="${id}"]`);
      catBtbData.forEach((btn) => {
        btn.classList.add("active");
        btn.classList.remove("in_active");
      });
    });
};

const AllTreesData = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => allTreesDisplay(json.plants));
};

const allTreesDisplay = (cat) => {
  //step1
  const allTrees = document.getElementById("allTrees");
  allTrees.innerHTML = "";
  //step2
  for (let card of cat) {
    //step3
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-white p-4 rounded-lg shadow flex flex-col h-full">
    <div class="flex-1">
      <div class="h-32  rounded">
        <img src="${card.image}" class="w-full h-full object-cover" >
      </div>
      <h3 onclick="Modal(${card.id})" class=" cursor-pointer inline-block mt-3 font-semibold">${card.name}</h3>
      <p class="text-sm text-gray-600">
      ${card.description}
      </p>
      <span class="inline-block mt-2 text-xs px-2 py-1 bg-green-100 text-green-700 rounded">${card.category}</span>
      <div class="flex justify-between items-center mt-3">
        <span class="font-bold">৳ ${card.price}</span>
      </div>
    </div>
    <button onclick="addCart('${card.name}', ${card.price})" class="mt-4 w-full bg-[#15803D] text-white py-2 rounded-full cursor-pointer">
      Add to Cart
    </button>
  </div>
    `;
    //step 4
    allTrees.append(div);
  }
  mngSpinner(0);
};

AllTreesData();

const Modal = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((json) => displayModal(json.plants));
  // console.log(`https://openapi.programming-hero.com/api/plant/${id}`);
};
const displayModal = (plant) => {
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <h3 class="text-lg font-bold mb-2">${plant.name}</h3>
  <img src="${plant.image}" class="w-full h-[200px] object-cover mb-3" >
  <p class="text-sm mb-2"><span class="font-bold">Category: </span>${plant.category}</p>
  <p class="text-sm mb-2"><span class="font-bold">Price: ৳</span>${plant.price}</p>
  <p class="text-sm mb-2">${plant.description}</p>
  <div class="modal-action">
      <form method="dialog">
        <button class="btn bg-green-600 text-white">Close</button>
      </form>
    </div>
  `;
  modalContent.append(div);
  const my_modal_5 = document.getElementById("my_modal_5");
  my_modal_5.showModal();
};

const mngSpinner = (status) => {
  const spinner = document.getElementById("spinner");
  const allCard = document.getElementById("allCard");
  if (status) {
    spinner.classList.remove("hidden");
    allCard.classList.add("hidden");
  } else {
    allCard.classList.remove("hidden");
    spinner.classList.add("hidden");
  }
};
mngSpinner(1);
//  1.get the container and empty
//  2.get into every lesson using for loop
//  3.create element
//  4.append into container

const addCart = (name, price) => {
  const items = document.querySelectorAll(".items");
  const div1 = document.createElement("div");

  div1.innerHTML = `
    <div class="bg-green-100 p-3 rounded flex justify-between items-center mb-2">
      <div>
        <p class="font-medium">${name}</p>
        <p class="text-sm text-gray-600">${price} × 1</p>
      </div>
      <button class="text-red-600 font-extrabold cursor-pointer">✕</button>
    </div>
  `;

 
  const div2 = div1.cloneNode(true);

  items[0].append(div1);
  items[1].append(div2);

  totalTk += price;
  total[0].innerHTML = `৳ ${totalTk}`;
  total[1].innerHTML = `৳ ${totalTk}`;


  const removeBoth = () => {
    div1.remove();
    div2.remove();
    totalTk -= price;
    total[0].innerHTML = `৳ ${totalTk}`;
    total[1].innerHTML = `৳ ${totalTk}`;
  };

  div1.querySelector("button").addEventListener("click", removeBoth);
  div2.querySelector("button").addEventListener("click", removeBoth);

};
