// Service class definition
class Service {
  constructor(icon, title, description) {
    this.icon = icon;
    this.title = title;
    this.description = description;
  }
}

// Service data array
const servicesData = [
  new Service(
    '<i class="fa-solid fa-chart-simple"></i>',
    "Business Consulting",
    "Solution for every business related problems, readilyand skillfully."
  ),
  new Service(
    '<i class="fa-regular fa-bell"></i>',
    "Risk Management",
    "Calculate every possible risk in your business, take control over them."
  ),
  new Service(
    '<i class="fa-regular fa-lightbulb"></i>',
    "Market Research",
    "Know the market before taking any step, reduce risks before you go."
  ),
  new Service(
    '<i class="fa-solid fa-headset"></i>',
    "Quality Services",
    "Experience unparalleled service, from beginning to final construction."
  ),
];

function renderServices() {
  const container = document.getElementById("servicesContainer");
  if (!container) {
    console.error("servicesContainer not found!");
    return;
  }

  container.innerHTML = servicesData
    .map(
      (service) => `
      <div class="service-content">
        <div class="service-icon">${service.icon}</div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
      </div>
    `
    ).join('')
    ; 
}

renderServices();



// service support 


const SupportContent = [
  {
    icon: `<i class="fa-solid fa-comment-dots"></i>`,
    title: "We Are Professional",
    para: "We resource, train, speak, mentor and encourage; marketplace leaders, business owners and career professionals to be effective in the workplace.",
  },
  {
    icon: `<i class="fa-solid fa-palette"></i>`,
    title: "We Are Creative",
    para: "With so many factors to consider when deciding how to characterize your company , wouldn't it be great to have a group of forward-thinking, well-informed individuals on board who know what they're doing?",
  },
  {
    icon: `<i class="fa-solid fa-stopwatch-20"></i>`,
    title: "24/7 Great Support",
    para: "Design clever and compelling marketing strategies, improve product positioning, and drive conversion rates, Elixir is all time available to guide you.",
  },
];

function renderSupport() {
  const Support = document.getElementById("service-support");
  Support.innerHTML = SupportContent.map(
    (sup) => `
      <div class="support-item">
        <div class="support-icon">${sup.icon} <span>${sup.title}</span></div>
        <div class="support-para">${sup.para}</div>
      </div>
    `
  ).join("");
}

renderSupport();

