const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone",
  );
  const data = await res.json();
  //   console.log(typeof data);
  // we need api object inside key data. Which value is an array.
  const phones = data.data;
  //   console.log(typeof phones);
  console.log(phones);
  displayPhone(phones);
};
// Dynamically add phone from API one by one
const displayPhone = (phones) => {
  // 1. get  the phone container
  const phoneContainer = document.getElementById("phone-container");
  
  phones.forEach((phone) => {
    // 2. create a div
    const phoneDiv = document.createElement("div");
    phoneDiv.classList = "card bg-base-100 w-96 shadow-sm";
    // 3. add others internal elements to phone div
    phoneDiv.innerHTML = `
        <figure>
            <img
            src="${phone.image}"
            alt="Shoes"
            />
        </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
    `;
    // 4. append different phone to the phone container
    phoneContainer.append(phoneDiv);
  });
};
loadPhone();
