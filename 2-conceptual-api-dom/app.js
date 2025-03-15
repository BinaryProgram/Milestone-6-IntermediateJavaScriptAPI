// display news category
const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();

  //     for (const category of data.data.news_category) {
  //       console.log(category.category_name);
  //     }

  const barContainer = document.getElementById("category-bar-container");
  data.data.news_category.forEach((item) => {
    const box = document.createElement("div");
    box.innerHTML = `<button onclick = "loadNewsByCategory('${item.category_id}')">${item.category_name}</button>`;

    barContainer.append(box);
    // console.log(item);
  });
};

// display news by category
const loadNewsByCategory = async (category) => {
  // when to show loading spinner before fetching data
  document.getElementById("loading-spinner").style.display = "block";

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category}`,
  );
  const data = await res.json();
  const news = data.data;
  const newsContainer = document.getElementById("news-container");
  newsContainer.textContent = " ";
  news.forEach((singleNews) => {
    const div = document.createElement("div");
    div.classList.add("singleNews");
    div.innerHTML = ` 
        <div class="news-photo">
          <img
            src=${singleNews.image_url}
            alt=""
          />
        </div>
        <div class="news-info">
          <div class="news-header">
            <h4>${singleNews.title.slice(0, 20)}</h4>
            <p class="news-badge">
            ${singleNews.rating.badge} <sup> <h6 class="news-rating"> ${
              singleNews.rating.number
            }</h6></sup>
            </p>
          </div>
          <p>
          ${singleNews.details.slice(0, 200)}
          </p>

          <div class="news-footer">
            <div class="author">
              <div class="">
                <img
                  class="author-img"
                  src=${singleNews.author.img}
                  alt=""
                />
              </div>
              <div class="author-info">
                <h6> ${singleNews.author.name}</h6>
                <p>Date: ${singleNews.author.published_date}</p>
              </div>
            </div>
            <div class="Views author">
              <i class="fa-solid fa-eye"></i>
              <p>${singleNews.total_view}</p>
            </div>
            <div class="details-btn-container">
              <button onclick="handleDetails(${JSON.stringify({ name: "Saklain" })})" class="details-btn">Details</button>
            </div>
        </div>
      </div>`;
    newsContainer.append(div);
  });
  // Let's hide the loading spinner after fetching data. Bangla System
  document.getElementById("loading-spinner").style.display = "none";
};

// handle input value of search
const handleSearch = () => {
  const searchInput = document.getElementById("search-box");
  const searchValue = searchInput.value;
  if (searchValue) {
    loadNewsByCategory(searchValue);
  } else {
    alert("Please enter a valid news category ID");
  }
  // console.log(searchValue);
};
loadCategory();
loadNewsByCategory("01");


