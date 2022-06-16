<template>
  <div>
    <div class="my-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form @submit.prevent="login()" action="" method="post">
                <div class="form-gorup">
                  <label for="">Enter Your Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    v-model="form.email"
                    class="form-control"
                    name="email"
                  />
                </div>
                <div class="form-gorup">
                  <label for="">Enter Your Password</label>
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    v-model="form.password"
                  />
                </div>

                <input
                  type="submit"
                  class="btn btn-outline-info btn-dark my-3 ml-auto"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
export default {
  data: () => ({
    form: new Form({
      email: "",
      password: "",
    }),
  }),
  methods: {
    login() {
      axios
        .post("admin/login", {
          // headers: {
          // 'Content-type': 'application/x-www-form-urlencoded',
          // },
          email: this.form.email,
          password: this.form.password,
        })
        .then((response) => {
            console.log(response.data.token);
           localStorage.setItem('token', response.data.token);
            this.$router.push("/");
            console.log('done login')
        });
    },
  },
};
</script>