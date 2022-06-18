<template>
  <section class="my-5">
    <div class="card">
      <div class="card-header">
        <h2>List of Category  <router-link to="/admin/category/create" class="btn btn-sm btn-info text-light">+</router-link></h2>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead class="bg-dark text-light">
            <tr>
              <th scope="col">Category name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category) in categories" :key="category._id">
              <td>{{category.name}}</td>
              <td v-if="category.cat_status == 0">inActive</td>
              <td v-else>Active</td>
              <td> 
                <router-link class="btn btn-sm btn-success" :to="{ path: '/admin/category/edit/' + category._id }">Edit</router-link> 
                <button class="btn btn-sm btn-info text-light" @click="status(category._id)">Status</button>
                <button class="btn btn-sm btn-danger" @click="CategoryDelete(category._id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios'
const token = localStorage.getItem('token')
export default {
    data () {
        return {
            categories: []
        }
    },
    methods:{
        AllCategory(){
            axios.get("admin/category" , { headers: {"Authorization" : `Bearer ${token}`} })
            .then((response) => {
                console.log(response.data.data);
                this.categories = response.data.data
            });
        },

        status(id){
            axios
        .get("admin/category/status/" + id ,{ headers: {"Authorization" : `Bearer ${token}`} })
        .then((response) => {
          console.log(response);
          this.AllCategory()
        });
        },
        CategoryDelete(id){
          axios.delete("/admin/category/" + id, {
            headers: {"Authorization" : `Bearer ${token}`}
          }).then((response) => {
            console.log(response)
            this.AllCategory()
          })
        }
    },
    mounted(){
        this.AllCategory(); this.status(); this.CategoryDelete()
    }
}
</script>