<template>
  <div
    v-click-outside="forceClose"
    class="w-full fixed z-50 top-0 py-2 bg-white border-b"
  >
    <Container>
      <div class="flex justify-between items-center">
        <n-link to="/">
          <h1 class="text-xl lg:text-2xl">{{ $config.appName }}</h1>
        </n-link>
        <div
          class="hidden md:flex md:justify-between md:items-center md:space-x-6"
        >
          <n-link to="/">Home</n-link>
          <n-link to="/about">About</n-link>
        </div>
        <div class="block md:hidden">
          <button @click="changeNavState">
            <MenuIcon />
          </button>
        </div>
      </div>
      <div class="md:hidden" :class="isOpened ? 'block' : 'hidden'">
        <div class="flex flex-col space-y-4 mt-2">
          <n-link to="/">Link 1</n-link>
          <n-link to="/about">About</n-link>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import { MenuIcon } from 'vue-feather-icons'

export default {
  name: 'Navbar',
  components: {
    MenuIcon,
  },
  data: () => ({
    isOpened: false,
  }),
  methods: {
    changeNavState() {
      this.isOpened = !this.isOpened
    },
    forceClose() {
      if (this.isOpened) {
        this.isOpened = false
      }
    },
  },
}
</script>
