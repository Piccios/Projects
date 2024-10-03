<script>
    import links from './assets/menuLinks.json'

    export default {
        name: "App",
        data() {
            return{
                links: []
            };
        },
        created(){
            this.links =links;
        }
    };
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
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped lang="scss">
nav {
        padding: 1rem;
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        color: white;
    }
    a {
        text-decoration: none;
        color: #333;

        &:hover {
        color: #007bff;
        }
    }
    }
</style>
