<template>
  <div>
    <table class="table table-striped table-bordered table-sm">
      <thead>
        <tr class="d-flex">
          <th scope="col" class="col-5">ID</th>
          <th scope="col" class="col-7">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr class="d-flex" @click="selectPerson(person._id)" :key="person._id" v-for="person in persons">
          <td class="col-5">{{ person._id }}</td>
          <td class="col-7">{{ person.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PersonList',
  props: {
    persons : { type: Array }
  },
  methods: {
    selectPerson: function(id) {
      this.$emit('person-selected', id)
    }
  }
}
</script>

<style scoped>
</style>
