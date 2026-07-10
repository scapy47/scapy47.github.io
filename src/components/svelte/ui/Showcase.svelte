<script lang="ts">
</script>

<section class="h-lvh overflow-scroll flex">
  {#each Array.from({ length: 6 }) as _, index}
    <div class="card min-w-2/6 max-w-4/6 min-h-2/6 max-h-4/6 ">
      {index} card
    </div>
  {/each}
</section>
