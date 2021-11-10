<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
.one-txt-cut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.txt-cut {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
a:link,
a:active,
a:visited,
a:hover {
  background: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
</style>
