<template>
  <div>
    <PageHeader />
    <div class="page-contain">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/header/PageHeader.vue'
export default {
  components: { PageHeader },
}
</script>

<style scoped>
.page-contain {
  margin-top: 4rem;
}
</style>
