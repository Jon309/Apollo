<template>
  <div id="app">
    <Header></Header>
    <Logo></Logo>
    

    <Block1></Block1>
    <Block2></Block2>
    <Block3></Block3>

    <ContactUs></ContactUs>

    <Footer></Footer>
    </div>
</template>

<script>
import Logo from '@/components/logo.vue';
import Header from '@/components/header.vue';
import Block1 from '@/components/blocks/block1.vue';
import Block2 from '@/components/blocks/block2.vue';
import Block3 from '@/components/blocks/block3.vue';
import ContactUs from '@/components/contact-us.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'App',
  components: { Logo, Header, Block1, Block2, Block3, ContactUs, Footer },
};
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
