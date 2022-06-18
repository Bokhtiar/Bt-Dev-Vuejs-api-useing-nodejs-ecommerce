<template>
    <div class="my-5">
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <h2>Category Edit Form</h2>
                </div>
            </div>

            <div class="card-body">
                <form action="" @submit.prevent="updateCategory" method="post">
                    <div class="form-gorup">
                    <div class="form-gorup">
                        <label for="">Category Name</label>
                        <input type="text" name="name" v-model="form.name" class="form-control" placeholder="type here category name" id="">
                    </div>
                    <div class="form-gorup">
                        <button class="btn btn-success"> Submit </button>
                    </div>
                </div>
                </form>
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
      name: ""
    }),
  }),
    methods:{
           single_category() {
            var id = this.$route.params.id;
            axios
            .get("/admin/category/" + id, { headers: {"Authorization" : `Bearer ${token}`} })
                .then(response => {
                this.form.name = response.data.data.name;
                });
            },

            updateCategory(){
                var id = this.$route.params.id;
                axios.put("/admin/category/" +id, {
                    name : this.form.name
                },{
                     headers: {"Authorization" : `Bearer ${token}`},
                }).then((response) => {
                    console.log(response)
                    this.$router.push('/admin/category')
                })
            }
    },
    mounted(){
        this.single_category()
    }
}
</script>