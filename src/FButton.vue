<template>
    <div>
        <input :value="title" type="button">
    </div>
</template>

<script>
export default {
    name: 'f-button',
    props: {
        title: String
    }
}
</script>