const loadPhone = async (phone = 13, isShowAll) => {
  // This is dynamic api response according to phone name.
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${phone}`,
  );
  const data = await res.json();
  // console.log(data);
  // we need api object inside key data. Which value is an array.
  const phones = data.data;
  // console.log(typeof phones);
  // console.log(phones);
  displayLoadPhone(phones, isShowAll);
};

// Dynamically display items from API one by one
const displayLoadPhone = (phones, isShowAll) => {
  // 1. get  the phone container
  const phoneContainer = document.getElementById("phone-container");

  // initially phone container must set empty
  phoneContainer.textContent = " ";

  // Handle show all button. If there are more than 12 items.
  if (phones.length > 12 && !isShowAll) {
    document.getElementById("show-btn").classList.remove("hidden");
  } else {
    document.getElementById("show-btn").classList.add("hidden");
  }
  // when item is more than 12 and isShowAll false
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }
  phones.forEach((phone) => {
    // 2. create a div
    const phoneDiv = document.createElement("div");
    phoneDiv.className = "card p-4 bg-base-100 shadow-sm";
    // 3. add others internal elements to phone div
    phoneDiv.innerHTML = `
        <figure>
            <img
            src="${phone.image}"
            alt="Shoes"
            />
        </figure>
        <div class="card-body">
          <h2 class="card-title justify-center">${phone.phone_name}</h2>
          <p class = "text-center">
            A card component has a figure, a body part, and inside body
            there are title and actions parts
          </p>
           <h1 class = "text-center font-[poppins] font-bold text-3xl">$999</h1>
          <div onclick = "handleShowDetail('${phone.slug}')" class="card-actions justify-center mt-1">
            <button class="btn btn-primary">Show Details</button>
          </div>
        </div>
    `;
    // 4. append different phone to the phone container
    phoneContainer.append(phoneDiv);
  });

  // when data load and display finished loading spinner will gone
  toggleSpinner(false);
};

// Control search functionality to display items from API. When click on search btn.
const searchLoadPhone = (isShowAll) => {
  // show spinner when click on search btn.
  toggleSpinner(true);

  const inputValue = document.getElementById("input-value");
  const inputFieldValue = inputValue.value;
  loadPhone(inputFieldValue, isShowAll);
};

// control toggle spinner
const toggleSpinner = (check) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (check) {
    loadingSpinner.classList.remove("hidden");
  } else loadingSpinner.classList.add("hidden");
};

// show-all button functionality bengal system
const showAll = () => {
  searchLoadPhone(true);
};

// Handle show details
const handleShowDetail = async (knowProduct) => {
  /*
  Know about individual product when user click on 'know details' button. I will send a request to an
  API to fetch that perticuller product. API will response me data.
  */
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${knowProduct}`,
  );
  const data = await res.json();
  const phone = data.data;
  detailsPhone(phone);
  // console.log("Product I Click", knowProduct);
  // console.log("Show Individuals product", data.data);
};

const detailsPhone = (phone) => {
  const detailsAboutPhone = document.getElementById("details-about-each-phone");
  detailsAboutPhone.innerHTML = `
            <div class ="flex justify-center items-center" ><img src="${phone.image}" alt="phone Images" /></div>
            <div class = "mt-4 space-y-2">
              <h1 class = "font-[poppins] text-3xl font-bold text-[#403f3f]">${phone.name}</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <h3><span class="text-[#403f3f] text-xl font-semibold font-[poppins]">Storage : </span> ${phone.mainFeatures?.storage}</h3>
              <h3><span class="text-[#403f3f] text-xl font-semibold font-[poppins]">Display Size : </span> ${phone.mainFeatures?.displaySize}</h3>
              <h3><span class="text-[#403f3f] text-xl font-semibold font-[poppins]">Chipset : </span> ${phone.mainFeatures?.chipSet}</h3>
              <h3><span class="text-[#403f3f] text-xl font-semibold font-[poppins]">Memory : </span> ${phone.mainFeatures?.memory}</h3>
              <h3><span class="text-[#403f3f] text-xl font-semibold font-[poppins]">Slug : </span> ${phone.slug}</h3>
              <h3><span class="text-[#403f3f] text-xl font-semibold font-[poppins]">Release Date : </span> ${phone.releaseDate}</h3>
              <h3><span class="text-[#403f3f] text-xl font-semibold font-[poppins]">Brand : </span> ${phone.brand}</h3>
              <h3><span class="text-[#403f3f] text-xl font-semibold font-[poppins]">GPS : </span> ${phone.mainFeatures?.sensors}</h3>
              
            </div>
  `;
  show_phone_detail.showModal();
};

 loadPhone("iphone");
