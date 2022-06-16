<template>
  <div>
    <div class="my-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form action="" method="post">
                <div class="form-gorup">
                  <label for="">Enter Your Email</label>
                  <input type="text" placeholder="Email" class="form-control" name="email" />
                </div>
                <div class="form-gorup">
                  <label for="">Enter Your Password</label>
                  <input
                  class="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>

                <input type="submit" class="btn btn-outline-info btn-dark my-3 ml-auto" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>