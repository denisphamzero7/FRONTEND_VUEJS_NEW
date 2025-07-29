<template>
  <div>
    <div class="text-2xl mb-4">General</div>

    <form action="" class="space-y-4 mx-auto" @submit.prevent="save">

      <div>

        <label for="">
          Username
        </label>
        <input type="text" v-model="general.username">
      </div>
      <div>

        <label>
          Email
        </label>
        <input type="text" v-model="general.email">
      </div>
      <div>

        <label>
          About me
        </label>
        <textarea v-model="general.about"></textarea>
      </div>
      <div>
        <label>Gender</label>
        <div>
          <label>
            <input type="radio" name="gender" value="male" v-model="general.gender" />
            <span>Male</span>
          </label>
          <label>
            <input type="radio" name="gender" value="female" v-model="general.gender" />
            <span>Female</span>
          </label>
          <label>
            <input type="radio" name="gender" value="other" v-model="general.gender" />
            <span>Other</span>
          </label>
        </div>
      </div>

      <div>

        <label for="">
          country
        </label>
        <select v-model="general.country">
          <option>Usa</option>
          <option>vietnam
          </option>
          <option>usa</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">submit</button>
    </form>


  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/Composables/useSetting';
import {useNotification} from '@/Composables/usenNotification'
const { general } = useSettings()
const {addNotification} =useNotification()
const save = ()=>{
  addNotification('Thành coong rồi')}

</script>
