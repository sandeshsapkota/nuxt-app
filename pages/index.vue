<template>
  <div>
    <AuthHOC/>
    <section class="bg-gray-50">
      <div class="flex flex-col gap-4 items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <logo/>
        <div class="w-full bg-white rounded-lg shadow sm:max-w-md">
          <div class="p-6 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl font-mons">
              Sign in to your account
            </h1>
            <div v-if="error" class="py-4 px-3 bg-red-100 text-red-500 font-mons font-medium text-sm"
                 v-text="'Credentials does not match . Please try again.'"/>
            <FormKit
                type="form"
                :config="{ preserveErrors: true }"
                :actions="false"
                @submit="handleSubmit"
            >
              <!--  User Name -->
              <FormKit
                  type="text"
                  label="Username"
                  name="username"
                  validation="required|length:4,15|alphanumeric"
                  autocomplete="off"
              />
              <!--  Password Name -->

              <FormKit
                  type="password"
                  name="password"
                  label="Password"
                  validation="required"
              />
              <div class="grid gap-6">
                <!-- Remember me And Forgot Password -->
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox"
                             class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      >
                    </div>
                    <div class="ml-2 text-sm">
                      <label for="remember" class="text-gray-500">Remember me</label>
                    </div>
                  </div>
                  <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                </div>

                <!--  Sign In Btn -->
                <FormKit
                    type="submit"
                    label="Sign In">
                </FormKit>

                <!--  Forgot to Login-->
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet ? <a href="#" class="pl-1 font-medium text-primary-600 hover:underline">
                  Sign
                  up</a>
                </p>
              </div>
            </FormKit>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {navigateTo} from "nuxt/app";
import Auth from "../components/services/auth"
import Logo from "../components/ui/logo";
import AuthHOC from "../components/hoc/AuthHOC"
import {usePush} from "notivue";

export default {
  components: {Logo, AuthHOC},
  setup() {
    const error = ref(false);
    const push = usePush();

    const handleSubmit = (data) => {
      const {username, password} = data;
      if ((username === 'user' && password === 'user') || (username === 'admin' && password === 'admin')) {
        navigateTo('/dashboard');
        Auth.login(username, () => push.success('Login successfully'))
      } else {
        error.value = true
      }
    }

    return {
      handleSubmit,
      error
    }
  }

}

</script>
