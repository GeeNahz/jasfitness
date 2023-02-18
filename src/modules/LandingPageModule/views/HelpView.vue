<template>
  <div class="help_container font-inter">
    <div class="header">
      <h1>How may we help you</h1>
      <div class="form__items">
        <form @submit.prevent="submitHandler" id="search" class="search__form">
          <div class="search__form-outer-wrapper">
            <span class="search__form-icon"><AppIconSearch /></span>
            <span class="search__form-inner-wrapper">
              <input
                @keyup="submitHandler"
                type="search"
                name="help-search"
                placeholder="Start your search"
                id="search"
                v-model="searchValue"
              />
            </span>
            <!-- <span class="search__form-action">
              <input type="submit" value="Search" />
            </span> -->
          </div>
        </form>
        <div v-if="searchValue.length" class="result__list">
          <div
            v-if="!searchedItems.length"
            class="font-regular text-gray-500 text-sm md:text-base text-center"
          >
            No match found
          </div>
          <div
            v-else
            v-for="(item, i) in searchedItems"
            :key="i"
            @click="item.action()"
            class="result__list-item"
          >
            <div class="title">{{ item.title }}</div>
            <div class="brief">
              {{ item.body }}
            </div>
          </div>
          <!-- <div class="result__list-item">
            <div class="title">Result title</div>
            <div class="brief">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              recusandae!
            </div>
          </div>
          <div class="result__list-item">
            <div class="title">Result title</div>
            <div class="brief">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              recusandae!
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="content">
      <div
        v-for="(item, index) in helpItems"
        :key="'item' + index + 1"
        @click="item.action()"
        class="card-wrapper hover:bg-gray-50 transition-colors p-3 shadow-md w-96 grid grid-cols-3 place-items-center hover:cursor-pointer"
      >
        <div class="icon col-span-1 text-7xl">
          <VIcon :icon="item.icon" />
        </div>
        <div class="text col-start-2 col-span-2">
          <p class="mb-1 font-semibold">{{ item.title }}</p>
          <p class="font-normal text-[#555] text-sm">
            {{ item.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import { useModalOperations } from '@/composables/modalOperations.js'

import VIcon from '@/components/VIcon.vue'
import AppIconSearch from '@/components/AppIconSearch.vue'
import AppIconAccount from '@/components/AppIconAccount.vue'

const helpItems = [
  {
    action: () => {
      toggleLandingpageModal('usernameJF')
    },
    icon: AppIconAccount,
    title: 'Find your username',
    body: 'Find your username as long as you are a member of JasFitness gym'
  }
]

const searchedItems = computed(() => {
  let arr = []
  helpItems.forEach((item) => {
    if (
      searchValue.value !== '' &&
      item.title.toLowerCase().includes(searchValue.value.toLowerCase())
    ) {
      arr.push(item)
    } else if (searchValue.value === '') {
      arr = []
    }
  })
  return arr
})

const { toggleLandingpageModal } = useModalOperations()
const searchValue = ref('')

function submitHandler() {}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

.help_container {
  padding-top: 6rem;

  @include responsive('sm') {
    padding-top: 5rem;
  }

  & .header {
    width: 100%;
    height: 40vh;
    background: linear-gradient(0.35turn, #e9e9e9, #c5bfb0);

    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    & h1 {
      font-size: 32px;
      line-height: 1;
      font-weight: font-weight('semibold');
      color: #303030;
    }

    @include responsive('mobile-landscape-width') {
      & h1 {
        text-align: center;
        font-size: 28px;
        white-space: pre-line;
      }
    }
  }

  & .content {
    @include container() {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    width: 100%;
    height: max-content;

    // background: #d4af37;
    // background: linear-gradient(to bottom, #d4af37 0%, #c5a028 100%);
    // background: -webkit-gradient(
    //   linear,
    //   left top,
    //   left bottom,
    //   color-stop(0%, #d4af37),
    //   color-stop(100%, #c5a028)
    // );
    // background: -webkit-linear-gradient(top, #d4af37 0%, #c5a028 100%);
    // background: -moz-linear-gradient(top, #d4af37 0%, #c5a028 100%);
    // background: -o-linear-gradient(top, #d4af37 0%, #c5a028 100%);
    // background: -ms-linear-gradient(top, #d4af37 0%, #c5a028 100%);
    // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D4AF37', endColorstr='#C5A028', GradientType=0);
    // border: 1px solid #b69119;
    // box-shadow: inset 0 1px 0 #e3be46;
    // -webkit-box-shadow: inset 0 1px 0 #e3be46;
    // -moz-box-shadow: inset 0 1px 0 #e3be46;
  }
}

.search__form {
  #{&}-outer-wrapper {
    background: #fff;
    display: flex;
    width: fit-content;
    height: max-content;
    border: 1px solid white;
    border-radius: 0.3rem;
    padding-left: 0.3rem;

    outline: 2px solid #adadad;
    outline-offset: 0px;
  }
  #{&}-icon {
    display: grid;
    place-content: center;
    font-size: font-size('medium');
    padding-left: 0.5rem;
  }
  #{&}-inner-wrapper {
    background: green;

    & #search {
      height: 48px;
      width: 380px;
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
.form__items {
  position: relative;
  width: min-content;
  & .result__list {
    position: absolute;
    background-color: #fefffe;
    box-shadow: 0 10px 10px -5px rgba(200, 200, 200, 0.8),
      0 5px 10px 0px rgba(200, 200, 200, 0.4);
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    width: 100%;
    // height: 48px;
    height: fit-content;

    & .result__list-item {
      padding: 0.3rem 0.5rem;
      border-bottom: 1px solid #ccc;
      &:hover {
        cursor: pointer;
      }
      &:first-child {
        border-top: 1px solid #ccc;
      }

      & .title {
        font-weight: font-weight('semibold');
        font-size: font-size('regular');
      }

      & .brief {
        font-weight: font-weight('semilight');
        font-size: font-size('x-small');
        color: #555;
      }
    }
  }
}
</style>
