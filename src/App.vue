<template>
    <div id="app">
        <h1>SSR Demo API Call</h1>
        <router-view/>
    </div>
</template>

<style lang="scss">
*, ::after, ::before {
    box-sizing: border-box;
}
body,
html {
    background-color: #f0f0f0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
        color: #42b983;
        }
    }
}
</style>
