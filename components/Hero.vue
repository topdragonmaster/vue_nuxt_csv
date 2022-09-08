<template>
  <div
    class="p-12 flex flex-col items-center border rounded-xl shadow bg-white"
  >
    <logo class="mb-16" />
    <h1 class="text-4xl text-bold mb-8">Interview Challenge</h1>
    <div class="full">
      <strong>Story:</strong>As a user, I would like to be able to have an
      application where I upload CSV files and view them in a table layout.
    </div>
    <div class="full">
      <strong>Acceptance Criteria </strong>
      <div>
        <ul>
          <li>
            1. Upload CSV files (Only accept files with .csv extension, Display
            newly uploaded files in Table upon upload)
          </li>
          <li>
            2. View a list of uploaded files in sidebar (Persist in local
            storage, Ability to remove any given file)
          </li>
          <li>
            3. Display in table (Sort by clicking column header, search by
            keywork across table)
          </li>
        </ul>
      </div>
    </div>
    <div class="full">
      <strong>Note:</strong>
      <ul>
        <li>
          You can take comma separate CSV to upload and show thee data within
          table. Number of column and rows should be dynamically generate based
          on the column and row in csv file.
        </li>
        <li>
          If user type a search input, look for that input across all the
          columns. Filter the column and only show matched row/column data.
        </li>
        <li>
          3. Display in table (Sort by clicking column header, search by keywork
          across table)
        </li>
        <li>
          3. Once ready remove the .nuxt and node_folder, zip the code and send
          back to us. for any question
        </li>
        <li>3. Any questions? send email too anilesh.lakhtakia@rms.com</li>
      </ul>
    </div>
    <div class="solution"></div>
    <h2 class="text-2xl text-bold">Good Luck! 💪</h2>
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  components: { Logo },
}
</script>
<style scoped>
.full {
  width: 100%;
}
.solution {
  background: url('../assets/solution.png') no-repeat;
  width: 40rem;
  height: 35rem;
  background-size: contain;
}
</style>
