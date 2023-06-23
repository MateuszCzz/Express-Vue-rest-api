<template>
  <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg max-h-fit" style="align-self: flex-start;">
    <form @submit.prevent="submit">
      <!-- Castle Name -->
      <div>
        <InputLabel for="name" value="Name" />
        <TextInput
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="name"
          required
          autofocus
          autocomplete="off"
        />
        <InputError class="mt-2" :message="nameError" />
      </div>

      <!-- Castle Location -->
      <div class="mt-4">
        <InputLabel for="location" value="Location" />
        <TextInput
          id="location"
          type="text"
          class="mt-1 block w-full"
          v-model="location"
          required
          autocomplete="off"
        />
        <InputError class="mt-2" :message="locationError" />
      </div>

      <!-- Castle Description -->
      <div class="mt-4">
        <InputLabel for="description" value="Description" />
        <TextInput
          id="description"
          type="text"
          class="mt-1 block w-full"
          v-model="description"
          required
          autocomplete="off"
        />
        <InputError class="mt-2" :message="descriptionError" />
      </div>

      <!-- Castle Image -->
      <div class="mt-4">
        <InputLabel for="image" value="Image" />
        <TextInput
          id="image"
          type="text"
          class="mt-1 block w-full"
          v-model="image"
          required
          autocomplete="off"
        />
        <InputError class="mt-2" :message="imageError" />
      </div>

      <!-- Castle Year Built -->
      <div class="mt-4">
        <InputLabel for="yearBuilt" value="Year Built" />
        <TextInput
          id="yearBuilt"
          type="number"
          class="mt-1 block w-full"
          v-model.number="yearBuilt"
          required
          autocomplete="off"
        />
        <InputError class="mt-2" :message="yearBuiltError" />
      </div>

      <!-- Castle Architectural Style -->
      <div class="mt-4">
        <InputLabel for="architecturalStyle" value="Architectural Style" />
        <TextInput
          id="architecturalStyle"
          type="text"
          class="mt-1 block w-full"
          v-model="architecturalStyle"
          required
          autocomplete="off"
        />
        <InputError class="mt-2" :message="architecturalStyleError" />
      </div>

      <!-- Castle Opening Hours -->
      <div class="mt-4">
        <InputLabel for="openingHours" value="Opening Hours" />
        <TextInput
          id="openingHours"
          type="text"
          class="mt-1 block w-full"
          v-model="openingHours"
          required
          autocomplete="off"
        />
        <InputError class="mt-2" :message="openingHoursError" />
      </div>

      <!-- Castle Admission Fee -->
      <div class="mt-4">
        <InputLabel for="admissionFee" value="Admission Fee" />
        <TextInput
          id="admissionFee"
          type="number"
          class="mt-1 block w-full"
          v-model.number="admissionFee"
          required
          autocomplete="off"
        />
        <InputError class="mt-2" :message="admissionFeeError" />
      </div>

      <!-- Submit Button -->
      <div class="flex items-center justify-end mt-4">
        <PrimaryButton class="ml-4">
          Create Castle
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import InputError from './elements/InputError.vue';
import InputLabel from './elements/InputLabel.vue';
import PrimaryButton from './elements/PrimaryButton.vue';
import TextInput from './elements/TextInput.vue';

export default {
  components: {
    InputError,
    InputLabel,
    PrimaryButton,
    TextInput,
  },
  setup() {
    // Data properties
    const name = ref('');
    const location = ref('');
    const description = ref('');
    const image = ref('');
    const yearBuilt = ref(0);
    const architecturalStyle = ref('');
    const openingHours = ref('');
    const admissionFee = ref(0);

    // Error properties
    const nameError = ref(null);
    const locationError = ref(null);
    const descriptionError = ref(null);
    const imageError = ref(null);
    const yearBuiltError = ref(null);
    const architecturalStyleError = ref(null);
    const openingHoursError = ref(null);
    const admissionFeeError = ref(null);

    // Submit function
    const submit = async () => {
      // Clear previous errors
      clearErrors();

      // Validate form inputs
      let isValid = true;
      if (!name.value) {
        nameError.value = 'Please enter the castle name.';
        isValid = false;
      }
      if (!location.value) {
        locationError.value = 'Please enter the castle location.';
        isValid = false;
      }
      if (!description.value) {
        descriptionError.value = 'Please enter the castle description.';
        isValid = false;
      }
      if (!image.value) {
        imageError.value = 'Please enter the castle image URL.';
        isValid = false;
      }
      if (!yearBuilt.value || yearBuilt.value < 0) {
        yearBuiltError.value = 'Please enter a valid year the castle was built.';
        isValid = false;
      }
      if (!architecturalStyle.value) {
        architecturalStyleError.value = 'Please enter the castle architectural style.';
        isValid = false;
      }
      if (!openingHours.value) {
        openingHoursError.value = 'Please enter the castle opening hours.';
        isValid = false;
      }
      if (!admissionFee.value || admissionFee.value < 0) {
        admissionFeeError.value = 'Please enter a valid admission fee.';
        isValid = false;
      }

      if (isValid) {
        try {
          const response = await axios.post('http://localhost:3000/castles', {
            name: name.value,
            location: location.value,
            description: description.value,
            image: image.value,
            yearBuilt: yearBuilt.value,
            architecturalStyle: architecturalStyle.value,
            openingHours: openingHours.value,
            admissionFee: admissionFee.value,
          });

          console.log('Castle created:', response.data);
          // Optionally, you can redirect the user to a success page or perform other actions

          // Clear form inputs
          name.value = '';
          location.value = '';
          description.value = '';
          image.value = '';
          yearBuilt.value = 0;
          architecturalStyle.value = '';
          openingHours.value = '';
          admissionFee.value = 0;
        } catch (error) {
          console.error('Castle creation error:', error);
          // Handle error, display an error message, etc.
        }
      }
    };

    // Helper function to clear form errors
    const clearErrors = () => {
      nameError.value = null;
      locationError.value = null;
      descriptionError.value = null;
      imageError.value = null;
      yearBuiltError.value = null;
      architecturalStyleError.value = null;
      openingHoursError.value = null;
      admissionFeeError.value = null;
    };

    return {
      name,
      location,
      description,
      image,
      yearBuilt,
      architecturalStyle,
      openingHours,
      admissionFee,
      nameError,
      locationError,
      descriptionError,
      imageError,
      yearBuiltError,
      architecturalStyleError,
      openingHoursError,
      admissionFeeError,
      submit,
    };
  },
};
</script>

<style>
/* Add any necessary styling here */
</style>
