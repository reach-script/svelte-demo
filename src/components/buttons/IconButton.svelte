<script lang="ts">
  import {Button} from 'svelte-chota';
  import { mdiPencil, mdiDelete } from '@mdi/js';
  export let onClick: () => void;
  export let name: "edit" | "delete";
  export let type: "" | "error" | "success" = ""

  const icon = (() => {
    switch(name) {
      case "edit": return mdiPencil;
      case "delete": return mdiDelete;
    }
  })();
</script>

<Button icon={icon} success={type==="success"} error={type==="error"} on:click={onClick} />
