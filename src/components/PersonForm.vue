<template>
  <div>
    <h3>Payment</h3>
    <form novalidate>
      <div class="row">
        <div class="col-md-6">
          <div><strong>Shipping Information</strong></div>
          <form-group>
            <label for="name">Name</label>
            <input
              class="form-control"
              id="name"
              v-model="payment.name"
              type="text"
              placeholder="your name"
            />

            <label for="company">Company name</label>
            <input
              class="form-control"
              id="company"
              type="text"
              placeholder="your name"
              v-model="payment.company"
            />

            <label for="addrLine1">Address</label>
            <input
              class="form-control"
              id="addrLine1"
              type="text"
              placeholder="your name"
              v-model="payment.addrLine1"
            />

            <label for="addrLine2">Suite / Apt nbr</label>
            <input
              class="form-control"
              id="addrLine2"
              type="text"
              placeholder="your name"
            />
            <div class="form-row">
              <div class="form-row col-md-6">
                <label for="city">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="your city"
                  v-model="payment.city"
                />
              </div>

              <div class="form-group col-md-3">
                <label for="state-province">State/Province</label>
                <select
                  class="form-control"
                  id="stateProvince"
                  v-model="payment.state"
                >
                  <option v-for="s in states" :key="s.code">
                    {{ s.name }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="zipcode">Zip Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="zipcode"
                  placeholder="10101"
                  v-model="payment.zipcode"
                />
              </div>
            </div>
            <div class="button">
              <button
                class="btn btn-primary"
                data-bs-target="#collapseTarget"
                data-bs-toggle="collapse"
              >
                Save
              </button>

              <button
                class="btn btn-primary"
                data-bs-target="#collapseTarget"
                data-bs-toggle="collapse"
              >
                Reset
              </button>
            </div>
          </form-group>
        </div>
        <div class="col-md-6">
          <div><strong>Billing Information</strong></div>
        </div>
      </div>
      <div>
        <pre>{{ payment }}</pre>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const states = [
  { code: "CA", name: "California" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "MN", name: "Minnesota" },
  { code: "NY", name: "New York" },
  { code: "TX", name: "Texas" },
];

const payment = ref({
  name: "",
  company: "",
  addrLine1: "",
  addrLine2: "",
  city: "",
  state: "",
  zipcode: "75137",
});
</script>

<style lang="css">
.button {
  float: right;
}
</style>
