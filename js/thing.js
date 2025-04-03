class Things {
    constructor(icon , title ,para) {
        this.icon = icon ;
        this.title = title;
        this.para = para
    }
}

const ThingContent = [
  new Things(
    `<i class="fa-brands fa-creative-commons-share"></i>`,
    "Creative Support",
    "We transform brands, grow businesses, and tell brand and product stories in a most creative way."
  ),
  new Things(
    `<i class="fa-regular fa-envelope"></i>`,
    "Creating Experiences",
    "We cover a large range of creative platforms and digital projects with one purpose: to create experiences."
  ),
  new Things(
    `<i class="fa-brands fa-nfc-directional"></i>`,
    "Product Consulting",
    "We guide you through the pipelines that generate new products with higher potential and lower risk."
  ),
  new Things(
    `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-globe"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 4a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14.133 1.502a1 1 0 0 1 1.365 -.369a9.015 9.015 0 1 1 -10.404 14.622a1 1 0 1 1 1.312 -1.51a7.015 7.015 0 1 0 8.096 -11.378a1 1 0 0 1 -.369 -1.365z" /><path d="M11 16a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4a1 1 0 0 1 1 -1z" /><path d="M15 20a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" /></svg>`,
    "Business Boosting",
    "We provide energy-efficient and environmentally conservative solutions to our clients to boost their business."
  ),
  new Things(
    `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-database-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" /><path d="M4 6v6c0 1.657 3.582 3 8 3c.415 0 .822 -.012 1.22 -.035" /><path d="M20 10v-4" /><path d="M4 12v6c0 1.657 3.582 3 8 3c.352 0 .698 -.009 1.037 -.025" /><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M19 21v1m0 -8v1" /></svg>`,
    "Strategic Approach",
    "Based on solid strategic framework and real, relevant research, we create prototypes, not presentations."
  ),
  new Things(
    `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-histogram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3v18h18" /><path d="M20 18v3" /><path d="M16 16v5" /><path d="M12 13v8" /><path d="M8 16v5" /><path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" /></svg>`,
    "Logistic Consulting",
    "We work buy side and sell side to give our clienrts hard hitting answers and focus hard on best opportunities."
  ),
];


function Thing() {
  const Thing = document.getElementById("thing-container");
  Thing.innerHTML = ThingContent.map(
    (ThingItem) => `
      <div class="Thing-content">
        <div class="Thing-icon">${ThingItem.icon}</div>
        <h3 class="Thing-title">${ThingItem.title}</h3>
        <p class="Thing-description">${ThingItem.para}</p>
      </div>`
  ).join("");
}

Thing();
