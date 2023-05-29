<script setup lang="ts">
import { ref } from 'vue'

import { useModalActions } from '@/composables/modalOperations'

import AppIconSearch from '@/components/icons/AppIconSearch.vue'
import AppIconClose from '@/components/icons/AppIconClose.vue'

const { toggleHelpModal } = useModalActions()

const usernameSearchValue = ref('')

function submitHandler() {}
</script>
<template>
  <div class="h-full w-full flex justify-center items-center">
    <div class="h-max w-96 bg-white rounded p-2 font-inter relative">
      <span
        @click="toggleHelpModal('usernameJF')"
        class="cursor-pointer absolute -top-10 -right-10 text-2xl z-50 rounded-full p-2 bg-gray-100 hover:bg-gray-50 transition-colors"
      >
        <AppIconClose />
      </span>
      <div class="search">
        <div class="form__items">
          <form
            @submit.prevent="submitHandler"
            id="search"
            class="search__form"
          >
            <div class="search__form-outer-wrapper">
              <span class="search__form-icon"><AppIconSearch /></span>
              <span class="search__form-inner-wrapper">
                <input
                  type="search"
                  name="help-search"
                  placeholder="Type your name"
                  id="search"
                  v-model="usernameSearchValue"
                />
              </span>
              <!-- <span class="search__form-action">
              <input type="submit" value="Search" />
            </span> -->
            </div>
          </form>
        </div>
      </div>
      <div class="result__list">
        <div
          v-if="!usernameSearchValue.length"
          class="result__list-item text-gray-400 text-center py-3"
        >
          <div class="title">No Results</div>
        </div>
        <div v-else class="result__list-item">
          <div class="title">Result title</div>
          <div class="brief">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            recusandae!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../../../assets/styles/base';
.search__form {
  #{&}-outer-wrapper {
    background: #fff;
    display: flex;
    height: max-content;
    border: 1px solid white;
    border-radius: 0.3rem;
    padding-left: 0.3rem;

    outline: 2px solid #adadad;
  }
  #{&}-icon {
    display: grid;
    place-content: center;
    font-size: font-size('medium');
    padding-left: 0.5rem;
  }
  #{&}-inner-wrapper {
    width: 100%;

    & #search {
      height: 48px;
      width: 100%;
      padding: 0 0.8rem;
      font-size: font-size('medium');
      color: #555;
      &:focus {
        outline: none;
      }
    }
  }
  #{&}-action {
    background: #d4af37;
    transition: all 0.5s ease;

    &:hover {
      background: gold;
    }
    & input {
      height: 100%;
      padding: 0 1rem;
    }
  }
}

.result__list {
  height: 100%;
  // overflow-y: scroll;
  margin: 1rem;

  #{&}-item {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 0.3rem;
    background-color: #f0f5fd;
    box-shadow: 1px 5px 5px -2px rgba(200, 200, 200, 0.4);

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }

    & {
      & .title {
        font-size: font-size('regular');
        font-weight: font-weight('semibold');
      }
      & .brief {
        font-size: font-size('x-small');
        font-weight: font-weight('semilight');
      }
    }
  }
}
</style>
