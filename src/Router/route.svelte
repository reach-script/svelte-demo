<script>
  import Router from 'svelte-spa-router'
  import HomePage from '../pages/HomePage.svelte'
  import AboutPage from '../pages/AboutPage.svelte';
  import CounterPage from '../pages/CounterPage.svelte';
  import FormPage from '../pages/FormPage.svelte';
  import TaskPage from '../pages/TaskPage.svelte';

  const routes = {
      '/':  HomePage,
      '/about': AboutPage,
      '/conter': CounterPage,
      '/form': FormPage,
      '/task': TaskPage,
  }
</script>
  
<Router {routes}/>