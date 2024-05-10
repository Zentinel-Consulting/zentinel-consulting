<script lang="ts">
	import Header from '../components/Header.svelte';
</script>
  
<div class="main-content">
    <Header />
    <main class="content">
        <slot />
    </main>
</div>


<style>
    .main-content {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        color: white;
    }

    .content {
        flex: 1;
    }


</style>
