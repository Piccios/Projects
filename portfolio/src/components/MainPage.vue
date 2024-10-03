<script>

</script>

<template>
  <div id="app">
    <header>
        <nav>
            <ul>
                <li v-for="link in links" :key="link.path">
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
  </div>
</template>