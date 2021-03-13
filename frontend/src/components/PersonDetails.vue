<template>
  <div>
    <table class="table table-bordered table-sm">
      <thead>
        <tr class="d-flex">
          <th scope="col" class="col-4">ID</th>
          <th scope="col" class="col-2">Name</th>
          <th scope="col" class="col-2">Street</th>
          <th scope="col" class="col-2">City</th>
          <th scope="col" class="col-2">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr class="d-flex">
          <td class="col-4">{{ selected._id }}</td>
          <td class="col-2">{{ selected.name }}</td>
          <td class="col-2">{{ selected.street }}</td>
          <td class="col-2">{{ selected.city }}</td>
          <td class="col-2">{{ selected.country }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PersonDetails',
  props: {
    selected : { type: Object }
  }
}
</script>

<style scoped>
</style>
