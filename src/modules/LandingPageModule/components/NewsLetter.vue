<template>
  <div class="container font-inter">
    <div class="wrapper space-y-3">
      <h1 class="wrapper__head__heading">Subscribe for our newsletter</h1>
      <p class="wrapper__head__subheading">
        Subscribe to our periodic newsletter and never miss out on any news,
        events, etc.
      </p>
      <form
        class="wrapper__form lg:flex lg:space-x-5"
        @submit.prevent="submitHandler"
      >
        <input
          class="form-input"
          v-for="(input, index) in inputFields"
          :key="'input' + index + 1"
          :id="input.id"
          :type="input.type"
          :name="input.name"
          :placeholder="input.placeholder"
        />
        <button class="form-action lg:h-11" type="submit">Subscribe</button>
      </form>
      <p class="wrapper__disclaimer">
        We ask for your name and email so that you can receive our newsletter
        for exlusive news and updates. You can unsubscribe at any time. By click
        subscribe, you acknowledge that the information you provide will be
        transferred to us for processing. We respect your privacy and will not
        share any information you give us with any one as stated in our Privary
        policy and Terms.
      </p>
    </div>
  </div>
</template>

<script setup>
const inputFields = [
  {
    type: 'text',
    id: 'name',
    name: 'name',
    placeholder: 'Name'
  },
  {
    type: 'text',
    id: 'email',
    name: 'email',
    placeholder: 'Email'
  }
]
function submitHandler(event) {
  for (var input of inputFields) {
    console.log(event.target.elements[input.name].value)
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

.container {
  @include container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @include responsive('mobile-landscape-width') {
      margin-top: 6rem;
      margin-bottom: 6rem;
    }
    @include responsive('mobile-width') {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
}

.wrapper {
  padding: 0 0.5rem;

  #{&}__head__heading {
    font-size: 20px;
    font-weight: font-weight('bold');
    text-transform: capitalize;
    color: #1f1f1f;
  }

  #{&}__head__subheading {
    font-size: font-size('medium');
    color: #1f1f1f;
  }

  #{&}__form {
    & .form-input {
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.8rem;
      border-radius: 3px;
      background-color: #ececec;
      font-size: font-size('small');
      font-weight: font-weight('medium');

      &::placeholder {
        color: #afafaf;
        font-size: font-size('small');
        font-weight: font-weight('semibold');
      }
      &:focus {
        border: none;
        outline: 2px #fba500 solid;
        outline-offset: 1px;
      }
    }

    & .form-action {
      padding: 0.5rem 1rem;
      border-radius: 3px;
      background-color: color('accent');
      color: color('primary');
      width: max-content;

      @include responsive('lg') {
        width: 100%;
      }
    }
  }

  #{&}__disclaimer {
    font-size: font-size('x-small');
  }
}
</style>
