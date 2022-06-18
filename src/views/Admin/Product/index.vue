<template>
    <div class="my-5">
       <div class="card">
           <div class="card-header">
               <h2>Product List <router-link to="/admin/product/create" class="btn btn-sm btn-success">+</router-link> </h2>
           </div>
           <div class="card-body">
               <table class="table table-striped">
                <thead class="bg-dark text-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="product._id">
                    <th scope="row">{{ index+1}}</th>
                    <td>{{ product.title }}</td>
                    <td>{{ product.price }} Tk</td>
                    <td v-if="product.product_status == 1">Active</td>
                    <td v-else>Inative</td>
                    <td>
                        <router-link :to="{ path: '/admin/product/edit/' + product._id }" class="btn btn-sm btn-success">Edit</router-link>
                        <button @click="destroy(product._id)" class="btn btn-sm btn-info">Delete</button>
                    </td>
                    </tr>
                </tbody>
                </table>
           </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            products: [],
        }
    },

    methods:{
        allProduct() {
            axios.get('/admin/product', {
                headers: {"Authorization" : `Bearer ${token}`}
            }).then((res) => {
                this.products = res.data.data
            })
        },

        destroy(id){
           axios.delete('/admin/product/' + id, {
                headers: {"Authorization" : `Bearer ${token}`}
           }).then((res) => {
               console.log(res)
               this.allProduct()
           })
        }
    },
    mounted() {
        this.allProduct()
    }
}
</script>