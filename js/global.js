const Global = document.getElementById("global-container");

const Leaders = [
  {
    src: "./asset/jpg/portrait-3.jpg",
    name: "Reenal Scott",
    profession: "Advertising Consultant",
    para: "Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.",
  },
  {
    src: "./asset/jpg/portrait-4.jpg",
    name: "Lily Anderson",
    profession: "Activation Consultant",
    para: "Lily leads Elixir UK and oversees the company's Customer Operations teams supporting millions of users.",
  },
  {
    src: "./asset/jpg/portrait-6.jpg",
    name: "Legartha Mantana",
    profession: "Brand Management Consultant",
    para: "As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.",
  },
  {
    src: "./asset/jpg/portrait-1.jpg",
    name: "John Snow",
    profession: "Business Analyst",
    para: "John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.",
  },
  {
    src: "./asset/jpg/portrait-7.jpg",
    name: "Thomas Anderson",
    profession: "Change Management Consultant",
    para: "As the VP of People, Thomas's focus lies in the development and optimization of talent retention.",
  },
  {
    src: "./asset/jpg/portrait-5.jpg",
    name: "Ragner Lothbrok",
    profession: "Business Consultant",
    para: "Ragner, SVP of Engineering, oversees Elixir's vast engineering organization which drives the core programming.",
  },
];

const LeadersGlobe = () => {
  Global.innerHTML = `
    <div class="leaders-container">
      ${Leaders.map(
        (lead) => `
        <div class="leader-card">
          <div class="leader-image-container">
            <img src="${lead.src}" alt="${lead.name}" class="leader-image">
          </div>
          <h3 class="leader-name">${lead.name}</h3>
          <p class="leader-profession">${lead.profession}</p>
          <p class="leader-para">${lead.para}</p>
        </div>
      `
      ).join('')}
    </div>
  `;
};


LeadersGlobe();
