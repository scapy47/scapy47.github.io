<script lang="ts">
</script>

<div class="flex overflow-scroll">
  {#each Array.from({ length: 6 }) as _, index}
    <div class="card min-w-2/6 max-w-4/6 min-h-2/6 max-h-4/6">
      {index} card
    </div>
  {/each}
</div>
