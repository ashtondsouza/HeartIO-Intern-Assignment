  <template>
    <div class="contain mt-5">
      <div class="header text-center">
        <h2>SECTION II [20 points]</h2>
      </div>
      <div class="accordion">
        <div
          class="card-main"
          v-for="section in sections"
          :key="section.id"
        >
          <div class="card-header" :id="'heading' + section.id">
            <h2 class="acc-btn mb-0">
              <button
                class="btn"
                type="button"
                :data-bs-toggle="'collapse'"
                :data-bs-target="'#collapse' + section.id"
                :aria-expanded="activeSection === section.id ? 'true' : 'false'"
                :aria-controls="'collapse' + section.id"
                @click="toggleSection(section.id)"
              >
                {{ section.title }}
                <span class="ms-2">
                  <svg
                    v-if="activeSection !== section.id"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <!-- Down arrow SVG -->
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .354.854l-6 6a.5.5 0 0 1-.708 0l-6-6A.5.5 0 0 1 1.5 6.5z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <!-- Up arrow SVG -->
                    <path
                      fill-rule="evenodd"
                      d="M1.5 9.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .354-.854l-6-6a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 9.5z"
                    />
                  </svg>
                </span>
              </button>
            </h2>
          </div>
          <div
            :id="'collapse' + section.id"
            class="accordion-collapse collapse"
            :class="{ show: activeSection === section.id }"
            :aria-labelledby="'heading' + section.id"
            data-bs-parent="#accordionExample"
          >
            <div class="card-body-main">
              <div class="row">
                <div
                  class="col-md-4 mb-3"
                  v-for="(card, index) in section.cards"
                  :key="index"
                >
                  <h2 class="card-main-title">
                    {{ card.type }}
                  </h2>
                  <div
                    class="card"
                    :style="{
                      borderColor: card.backgroundColor || '#ddd',
                      borderWidth: '3px',
                      borderStyle: 'solid',
                    }"
                  >
                    <div class="card-body text-center">
                      <h5 class="card-title">{{ card.name }}</h5>
                      <p class="card-text" v-html="card.summary"></p>
                      <p class="price">
                      <span class="oldprice">Price:</span> <span class="oldpricenum text-muted text-decoration-line-through"
                      >{{ card.oldPrice }}</span><br>
                     <span    :style="{ color: card.backgroundColor }"> {{ card.newPrice }}</span>
                    </p>
                    </div>
                    <div
                      :class="`card-footer text-white text-center`"
                      :style="{ backgroundColor: card.backgroundColor || '#455A64' }"
                    >
                      <button class="btn text-white">Click</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  <script>
  export default {
    data() {
      return {
        activeSection: 1, // Tracks the currently open section
        sections: [
          { id: 1, title: "Thriller", cards: [], colors: ["#2B7397", "#32959D", "#9C7777"] },
          { id: 2, title: "Sports", cards: [], colors: ["#2B7397", "#32959D", "#9C7777"] },
          { id: 3, title: "Action", cards: [], colors: ["#2B7397", "#32959D", "#9C7777"] },
          { id: 4, title: "Shooting", cards: [], colors: ["#2B7397", "#32959D", "#9C7777"] },

        ],
      };
    },
    mounted() {
      this.fetchSectionData();
    },
    methods: {
      toggleSection(sectionId) {
        this.activeSection = this.activeSection === sectionId ? null : sectionId;
      },
      async fetchSectionData() {
        const baseUrl = "http://api.tvmaze.com/search/shows?q=";
        for (let section of this.sections) {
          try {
            const response = await fetch(`${baseUrl}${section.title}`);
            const data = await response.json();
            // Map data to the card format used in the template
            section.cards = data.slice(0, 3).map((item, index) => {
                const oldPrice = Math.floor(Math.random() * (12999 - 4999 + 1)) + 4999; // Random price between ₹4,999 and ₹12,999
                const discount = Math.random() * 0.3; // Random discount up to 30%
              const newPrice = Math.floor(oldPrice * (1 - discount)); // Calculate new price after discount
              return {
                name: item.show.name,
                type: item.show.type,
                summary: item.show.summary || "No description available.",
                url: item.show.url,
                backgroundColor: section.colors[index % section.colors.length],
                oldPrice: `${oldPrice.toLocaleString()}/-`,
                newPrice: `${newPrice.toLocaleString()}/-`, 
              };
            });
          } catch (error) {
            console.error(`Error fetching data for ${section.title}:`, error);
          }
        }
      },
    },
  };
  </script>
  

  <style scoped>
   .header {
    text-align: center;
    padding: 20px;
    font-weight: 600;
    margin-bottom: 35px;
    color: #01818C;
  }
  .card-main-title{
    color: #2B7397;
    font-size: 18px;
    margin-top: 10px;
    font-weight: 600;
    text-align: center;
  }
  .price {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
    
  }
  .contain{
    background-color: #ffffff;
    border: none;
  }
  .accordion{
    width: 100%;
  }
  .card-body-main{
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    width: 100%; 
    height: auto;
    margin-bottom: 50px;
    background-color:#F4FBFF;

}
.card-body-main .card-footer{
   width: 100%;
   border-radius:0 0 0 0 ;
}
  .card-main{
    border: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 20px;
  }
  .card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  width: 350px;
  height: 100%; /* Allow dynamic height */
}
.card-header{
    background-color:#F4FBFF;
    border: none;
    margin-bottom: 10px;
    height: 60px;
    width: 40%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card-header .btn{
    color: #455A64;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: 300;

}
.card-header .acc-btn{
    width: 100%;
    height: 100%;
}
.accordion-collapse{
    max-width: 100%;
    width: 100%;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content at the top */
  margin: 10px;
  margin-top: 20px;
  width: 100%;
  flex-grow: 1; /* Ensure it takes available space */
  min-height: 200px; /* Minimum height for consistency */
}
.card-text {
  margin-bottom: 10px; /* Space between summary and price */
  flex-grow: 1; /* Allow text to expand if needed */
  color: #455A64;
}
.card-title {
  font-size: 1.1em;
  font-weight: bold;
  color: #2B7397;
  font-size: 18px;
  margin-bottom: 20px; /* Space between title and summary */
}
.card-footer {
  width: 100%;
  border-radius: 0 0 0 0;
  padding: 10px 0; /* Padding for better spacing */
  margin-top: auto; /* Push the button down */
}
.row{
    width: 80%;
}
.oldprice{
    color: #455A64;
    font-size: 16px;
}
.oldpricenum{
    color: #455A64;
    font-size: 16px;
}
  </style>
  