<script context="module" lang="ts">
  export const prerender = true;
</script>

<script>
  import PostList from "../lib/Post/PostList.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class={"list-container"}>List</div>
  <div class="post-container"><PostList /></div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: row;

    .list-container {
      flex: 1;
    }

    .post-container {
      flex: 1;
    }
  }
</style>
