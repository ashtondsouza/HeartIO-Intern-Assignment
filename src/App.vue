<template>
  <div id="app">
    <nav>
      <img src="./assets/logo.svg" alt="heart it out">
    </nav>
    <FormSection />
    <SectionTwo />
    <SectionThree />
  </div>
</template>

<script>
import FormSection from './components/FormSection.vue';
import SectionTwo from './components/SectionTwo.vue';
import SectionThree from './components/SectionThree.vue';

export default {
  components: {
    FormSection,
    SectionTwo,
    SectionThree
  }
};
</script>

<style>
/* Global Styles */
nav{
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-shadow:  0 4px 10px rgba(0, 0, 0, 0.283);
  text-align: center;
  position: fixed;
  z-index: 1000;
  
}
nav img{
  padding: 10px;
}
body {
  /* background-color: #333; */
  color: #fff;
font-family: Roboto;
}
</style>
