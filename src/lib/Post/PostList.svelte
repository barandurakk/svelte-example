<script context="module" lang="ts">
  export const prerender = true;
  import { onMount } from "svelte";
  import { getPokemonList, getPokemonByName } from "../../apis/post";
</script>

<script lang="ts">
  let pokemonList: any[] = [];
  let loading = false;

  // Get the data from the api, after the page is mounted.
  onMount(async () => {
    loading = true;
    const res = await getPokemonList();
    pokemonList = res;
    loading = false;
  });
</script>

<div>
  <ul class="pokemonList">
    {#if loading}
      <span>Loading...</span>
    {:else}
      {#each pokemonList as pokemon}
        <li>
          <label for="pokemon" class="pokeName">
            {pokemon.name}
          </label>
        </li>
      {/each}
    {/if}
  </ul>
</div>

<style lang="scss">
</style>
