const News = document.getElementById("News-container");

const NewsAnchor = [
  {
    src: "./asset/jpg/9.jpg",
    title: "Tax impacts of lease accounting change",
    name: "By Paul O'Sullivan",
    para: "HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...",
    a: "Learn More ⟶",
  },
  {
    src: "./asset/jpg/10.jpg",
    title: "What brexit means for data protection law",
    name: "By Enrico Ambrosi",
    para: "Assuming that the referendum is not ignored completely, there are two possible futures for the UK..",
    a: "Learn More ⟶",
  },
  {
    src: "./asset/jpg/11.jpg",
    title: "The growing meanace of social engineering fraud",
    name: "By Robson",
    para: "Social engineering involves the collection of information from various sources about a target...",
    a: "Learn More ⟶",
  },
];

const renderNewsCards = () => {
  News.innerHTML = `
    <div class="news-container">
      ${NewsAnchor.map(
        (item) => `
        <div class="news-card">
          <div class="news-image-container">
            <img src="${item.src}" alt="${item.title}" class="news-image">
          </div>
          <div class="news-content">
            <h3 class="news-title">${item.title}</h3>
            <p class="news-author">${item.name}</p>
            <p class="news-para">${item.para}</p>
            <a href="#" class="news-link">${item.a}</a>
          </div>
        </div>
      `
      ).join("")}
    </div>
  `;
};

renderNewsCards();
