let title = document.getElementById("cardtitle");
const loadData = () => {
  //   const url = `https://openapi.programming-hero.com/api/plants`;
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => display(json.plants));
};

const display = (cat) => {
  const obj = cat[0];
//   const img = document.createElement("img");
    title.innerHTML = `<img src="${obj.image}" class="w-full h-full object-cover" >`;
};

loadData();

// console.log("djfgdjfg");


const cat = document.getElementById("cat");
// let tgl = 0;
cat.addEventListener("click", () =>{
    const catList = document.getElementById("catList");
    catList.classList.toggle("left-[100%]");
});
