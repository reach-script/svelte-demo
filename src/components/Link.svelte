<script lang="ts">
  import {link} from 'svelte-spa-router'
  export let href: string;
</script>

<a href={href} use:link ><slot /></a>