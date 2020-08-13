<template>
  <Container class="mt-24">
    <div class="flex flex-wrap">
      <div class="w-full text-center">
        <h1 class="font-bold text-8xl">{{ error.statusCode }}</h1>
        <h4 class="font-medium text-4xl">{{ error.message }}</h4>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['error'],
  layout: 'default',
}
</script>
