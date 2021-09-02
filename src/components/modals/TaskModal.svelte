<script lang="ts">
  import type { Task } from "../../store/task";
  import InputText from "../InputText.svelte";
  import BaseModal from "./BaseModal.svelte";
  import {editTask} from '../../store/task';
  import Button from "../buttons/Button.svelte";

  export let task: Task;
  export let open: boolean;

  const onClickEditTask = () => {
    editTask(task);
    open = false;
  }
</script>

<BaseModal bind:open={open}>
  <form>
    <InputText placeholder="title" bind:value={task.title} />
    <InputText placeholder="content" bind:value={task.content} />
    <Button onClick={onClickEditTask}>更新</Button>
  </form>
</BaseModal>
