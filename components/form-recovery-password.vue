<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Recuperar mi contraseña
        </h2>
      </div>
      <form 
        class="mt-8 space-y-6" 
        @submit="checkForm">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only"
              >Correo electrónico</label
            >
            <input
              id="email-address"
              v-model="email"
              name="user"
              type="email"
              autocomplete="email"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Correo electrónico"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-blue-600
              hover:bg-blue-600
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Recuperar
          </button>
        </div>
        <div class="text-center">
          <NuxtLink
            to="/"
            class="font-medium text-indigo-600 hover:text-indigo-500 "
            >Cancelar</NuxtLink
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.$axios.post('recovery-password', { email: this.email })
      .then(resp => {
        console.log('resp --->', resp);
      })
      .catch(err => {
        console.log('err --->', err);
      });
    }
  }
}
</script>