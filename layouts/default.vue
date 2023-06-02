<template>
    <div id="page-header" class="relative">
        <LayoutsPageHeader/>
    </div>
    <div class="mb-2 pb-2">
        <slot></slot>
    </div>
</template>

<style scoped>
#page-header{
    @apply pt-6 pb-6 sticky bg-white z-50 top-0;
}
</style>