<template>
    <div class="form-section">
      <div class="form-container text-dark rounded p-4">
        <div class="header text-center">
        
          <h2>SECTION I [15 points]</h2>
        </div>
        
        <!-- Radio Button Group 1 -->
        <div class="radiobtn mb-4">
          <h4>Lorem ipsum dolor sit amet</h4>
          <div v-for="(option, index) in radioOptions1" :key="index" class="custom-radio form-check">
            <input
              type="radio"
              :id="'radio1-' + index"
              class="form-check-input"
              v-model="selectedRadio1"
              :value="option">
            <label
              :for="'radio1-' + index"
              class="form-check-label"
              :class="{'selected-option': selectedRadio1 === option}">
              {{ option }}
            </label>
          </div>
        </div>
  
        <!-- Dropdown -->
        <div class="dropdown mb-4">
          <h4>Lorem ipsum dolor sit amet</h4>
          <select v-model="selectedDropdown" class="form-select">
            <option v-for="(option, index) in dropdownOptions" :key="index" :value="option">{{ option }}</option>
          </select>
        </div>
  
        <!-- Radio Button Group 2 -->
        <div class="radiobtn mb-4">
          <h4>Lorem ipsum dolor sit amet</h4>
          <div v-for="(option, index) in radioOptions2" :key="index" class="custom-checkbox form-check">
            <input
              type="checkbox"
              :id="'checkbox-' + index"
              class="form-check-input"
              v-model="selectedCheckboxes"
              :value="option">
            <label
              :for="'checkbox-' + index"
              class="form-check-label"
              :class="{'selected-option': selectedCheckboxes.includes(option)}">
              {{ option }}
            </label>
          </div>
        </div>
  
        <!-- Submit Button -->
        <div class="submitbtn text-center">
            <button class="submit-btn btn text-center" @click="submitForm">SUBMIT</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Options for radio and dropdown
        radioOptions1: ['Radio Button Option 1', 'Radio Button Option 2', 'Radio Button Option 3', 'Radio Button Option 4'],
        dropdownOptions: ['Drop Down Option 1', 'Drop Down Option 2', 'Drop Down Option 3'],
        radioOptions2: ['Radio Button Option 1', 'Radio Button Option 2', 'Radio Button Option 3', 'Radio Button Option 4'],
  
        // Selected values
        selectedRadio1: '',
        selectedDropdown: '',
        selectedCheckboxes: [],
      };
    },
    methods: {
      submitForm() {
        console.log('Selected Radio 1:', this.selectedRadio1);
        console.log('Selected Dropdown:', this.selectedDropdown);
        console.log('Selected Checkboxes:', this.selectedCheckboxes);
        alert('Form Submitted!');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom styling for the header, button, and form layout */
  .header {
    text-align: center;
    padding: 20px;
    font-weight: 600;
    margin-bottom: 75px;
    color: #01818C;
  }
  .form-section {
    display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 100vh; /* Make sure the form takes up the full viewport height */
    max-width:auto;
    margin: auto;
    padding: 20px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
    background-color: #fff; 
    

  }
  .form-container{
    max-width: 80%;
  width: 100%; /* Make sure it doesn't exceed the defined max-width */
  padding: 20px;
  margin-top: 40px;
  background-color: #fff;

   
  } 

  .submitbtn{
    width: 100%;
  }
  .submit-btn {
    background-color: #01818C;
    text-align: center;
    color: #fff;
    font-weight: bold;
    height: 50px;
    max-width: 150px;
    width: 100%;
  }
  .submit-btn:hover {
    background-color: rgb(2, 152, 134);
  }
  .custom-radio, .custom-checkbox {
    margin-bottom: 10px;
    cursor:grab;
  }
  .form-check-label{
    color: #455A64;
  }
  .form-check-label:hover{
    cursor:grab;
    color: #01818C;
  }
  .selected-option {
  color: #01818C; /* Change color when selected */
}
.form-select{
    color: #01818C; 
}
.radiobtn h4,.dropdown{
    color: #455A64;
}
  </style>
  