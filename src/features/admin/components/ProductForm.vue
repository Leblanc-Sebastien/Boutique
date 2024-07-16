<script setup lang="ts">
import { Form, Field } from 'vee-validate';

const onSubmit = (values: string) => {
    console.log(values)
}
</script>

<template>
    <div class="product-form-container d-flex flex-column align-item-center justify-content-center">
        <h1>Admin</h1>
        <Form v-on:submit="onSubmit" class="product-form d-flex flex-column">

            <label for="title">Titre :</label>
            <Field name="title" type="text" id="title" />

            <label for="description">Description :</label>
            <Field name="description" type="text" id="description" />

            <label for="img">Image :</label>
            <Field name="img" type="text" id="img" />



            <button>Valider</button>
        </Form>
    </div>

</template>

<style lang="scss" scoped>
.product-form {
    gap: 10px;
    background-color: #fff;
    padding: 40px;
    border-radius: 5px;
    margin: 20px;
}
</style>