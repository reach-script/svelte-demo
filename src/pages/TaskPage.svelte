<script lang="ts">
  import {Card} from 'svelte-chota';
  import {onMount, onDestroy} from 'svelte'
  import Link from "../components/Link.svelte";
  import InputText from "../components/InputText.svelte";
  import Button from "../components/buttons/Button.svelte";
  import {tasksState, addTask, removeTask} from '../store/task';
  import type {Task} from '../store/task';
  import TaskModal from '../components/modals/TaskModal.svelte';
  import IconButton from '../components/buttons/IconButton.svelte';

  let title = "";
  let content = "";
  let tasks: Task[];
  let modalOpen = false;
  let editTargetTask = {} as Task;

  const unsubscribe = tasksState.subscribe(value => {
    tasks = value;
  });

  // useEffect(() => { ... }, [])
  onMount(() => {
    return () => {
      console.log("un mounted");
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });
  onDestroy(() => {
    unsubscribe();
  });

  const onClickAddTask = (e) => {
    e.preventDefault();
    addTask({title, content});
    title = ""
    content = "";
  }

  // useEffect(() => { ... }, [title, content])
  $ : {
    // console.log(title, content);
  }

  const onClickEdit = (id: string) => {
    const found = tasks.find(item => item.id === id)
    if(found){
      editTargetTask = found
      modalOpen = true;
    }
  }

  const onClickDelete = (id: string) => {
    removeTask(id);
  }
  </script>
  
  <h2>This is Task Page!</h2>
  <div>
    <Card class="justify-center">
      <form>
        <InputText placeholder="title" bind:value={title} />
        <InputText placeholder="content" bind:value={content} />
        <Button onClick={onClickAddTask}>登録</Button>
      </form>
    </Card>

    <hr />

    <div class="justify-center">
      <table>
        <thead>
          <tr>
            <th>edit</th>
            <th>del</th>
            <th>title</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          {#each tasks as task}
            <tr>
              <td><IconButton type="success" name="edit" onClick={() => onClickEdit(task.id)} /></td>
              <td><IconButton type="error" name="delete" onClick={() => onClickDelete(task.id)} /></td>
              <td>{task.title}</td>
              <td>{task.content}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <TaskModal task={editTargetTask} bind:open={modalOpen} />
  </div>
  <Link href="/">Home</Link>

  <style>
    .justify-center {
      display: flex;
      justify-content: center;
    }

  </style>