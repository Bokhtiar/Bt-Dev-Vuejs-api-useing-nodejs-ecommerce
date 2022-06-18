<template>
    <div class="my-5">
        <div class="card">
            <div class="card-header">
                <h2>Product Create Page</h2>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <form action="" method="post" @submit.prevent = "Update" class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">Product Title</label>
                                <input type="text" name="title" v-model="form.title" class="form-control" placeholder="type here product title" id="">
                            </div>
                            <div class="col-md-6">
                                <label for="">Product Price</label>
                                <input type="text" name="price" v-model="form.price" class="form-control" placeholder="type here product Price" id="">
                            </div>

                            <div class="col-md-12">
                                <label for="">Product Image</label>
                                <input type="text" name="image" v-model="form.image" class="form-control" placeholder="type here product Image" id="">
                            </div>

                            <div class="col-md-12">
                                <label for="">Product Color</label>
                                <input type="color" name="color" v-model="form.color" class="form-control" placeholder="type here product color" id="">
                            </div>

                            <div class="col-md-12">
                                <label for="">Product Description</label>
                                <textarea name="description" id="" cols="30" class="form-control" rows="10" v-model="form.description"></textarea>
                            </div>

                            <div class="form-group my-3">
                                <button class="btn btn-success">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        form: new Form({
            title: "",
            price: "",
            description: "",
            color: "",
            image: "",
        })
    }),

    methods:{
        edit(){
            var id = this.$route.params.id
            axios.get("/admin/product/" + id, {  headers: {"Authorization" : `Bearer ${token}`}})
            .then((res) => {
                console.log(res.data.data.title)
                this.form.title = res.data.data.title,
                this.form.price = res.data.data.price,
                this.form.description = res.data.data.description,
                this.form.color = res.data.data.color,
                this.form.image = res.data.data.image
            })
        },
        Update(){
            var id = this.$route.params.id;
            axios.put("/admin/product/" + id, {
                title: this.form.title,
                price: this.form.price,
                description: this.form.description,
                color: this.form.color,
                image: this.form.image
            },{
                 headers: {"Authorization" : `Bearer ${token}`}
            }).then((res) =>{
                console.log(res)
                this.$router.push("/admin/product")
            })
        }
    },
    mounted() {
        this.edit()
    }
}
</script>