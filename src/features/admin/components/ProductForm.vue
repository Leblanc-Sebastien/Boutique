<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import z from 'zod';
import { toTypedSchema } from '@vee-validate/zod'
// import type { ProductInterface } from '@/interfaces/Product.interface';


const required = { required_error: "Champ obligatoire !" }

const validationSchema = toTypedSchema(
    z.object({
        title: z.string(required).min(1, { message: 'Titre trop court !' }).max(10, { message: 'Titre trop long' }),
        description: z.string(required).min(1, { message: 'Description trop courte !' }).max(50, { message: 'Description trop longue !' }),
        image: z.string(required).min(1, { message: "Url trop courte !" }),
        price: z.number(required).gte(1, { message: "Prix trop bas !" }).lte(10000, { message: "Prix trop élevé !" }),
        category: z.string(required)
    })
)

const { handleSubmit, isSubmitting } = useForm({
    validationSchema
})

const title = useField('title')
const description = useField('description')
const image = useField('image')
const price = useField('price')
const category = useField('category')

const trySubmit = handleSubmit((formValues) => {
    console.log(formValues)
    console.log(isSubmitting.value)
})
</script>

<template>
    <div class="product-form-container d-flex flex-column align-item-center justify-content-center">
        <h1>Admin</h1>
        <form action="" @submit="trySubmit" class="product-form d-flex flex-column justify-content-center">
            <label for="title">Titre de l'article:</label>
            <input type="text" v-model="title.value.value" id="title">
            <small v-if="title.errorMessage.value" class="form-error">{{ title.errorMessage.value }}</small>

            <label for="description">Description de l'article:</label>
            <textarea name="description" id="description" v-model="description.value.value"></textarea>
            <small v-if="description.errorMessage.value" class="form-error">{{ description.errorMessage.value }}</small>

            <label for="image">Image de l'article:</label>
            <input type="text" v-model="image.value.value" id="image">
            <small v-if="image.errorMessage.value" class="form-error">{{ image.errorMessage.value }}</small>

            <label for="price">Prix de l'article:</label>
            <input type="number" v-model="price.value.value" id="price">
            <small v-if="price.errorMessage.value" class="form-error">{{ price.errorMessage.value }}</small>

            <label for="category">Categorie de l'article</label>
            <select name="category" id="category" v-model="category.value.value">
                <option value>Choisir une categorie</option>
                <option value="desktop">Desktop</option>
                <option value="streaming">Streaming</option>
                <option value="gamer">Gamer</option>
            </select>
            <small v-if="category.errorMessage.value" class="form-error">{{ category.errorMessage.value }}</small>

            <button :disabled="isSubmitting">Valider</button>
        </form>


        <!-- <pre>{{ values }}</pre>
        <pre>{{ errors }}</pre> -->
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

.form-error {
    background-color: var(--danger-1);
    padding: 5px;
    border-radius: 5px;
    color: #fff;
}
</style>