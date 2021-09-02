<script lang="ts">
  import {Input, Field} from 'svelte-chota';
  export let label = "";
  export let value: string;
  export let placeholder = ""
</script>

<Field label={label}>
  <Input type="text" placeholder={placeholder} bind:value={value} />
</Field>