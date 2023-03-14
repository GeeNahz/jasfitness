<template>
  <div class="dropdown">
    <div @click.prevent="toggleDropdown" class="dropdown__button">
      <button class="text-xs md:text-sm">{{ title }}</button>
      <div
        class="icon transition-all duration-150 rotate-180"
        :class="{ 'rotate-0': showDropdown }"
      >
        <AppIconMenuUpOutline />
      </div>
    </div>
    <div
      class="dropdown__content shadow"
      :class="[showDropdown ? 'show' : 'hide']"
    >
      <div class="form-input">
        <div class="icon">
          <AppIconSearch />
        </div>
        <input
          type="search"
          name="search-dopdown"
          id="dropdown"
          :placeholder="placeholder"
          v-model="searchKey"
        />
      </div>
      <ul v-if="!searchItems.length" class="items text-sm">
        <li class="text-gray-400">No medical condition available</li>
        <li class="flex items-center p-2">
          <input
            @keyup.enter.self="submitCustomMedicalCondition"
            type="text"
            name="custom"
            id="custom"
            v-model="customField"
            :placeholder="customFieldPlaceholder"
            class="w-full h-full outline-none bg-transparent my-2 px-1"
          />
          <div
            @click="submitCustomMedicalCondition"
            class="p-2 text-xl text-gray-50 bg-emerald-400 rounded-full"
          >
            <AppIconCheckOutline />
          </div>
        </li>
      </ul>
      <ul v-else class="items text-sm">
        <li
          v-for="content in searchItems"
          :key="content.id"
          @click="$emit('selectedItem', content)"
        >
          {{ content.content }}
        </li>
        <li class="flex items-center p-2">
          <input
            @keyup.enter.self="submitCustomMedicalCondition"
            type="text"
            name="custom"
            id="custom"
            v-model="customField"
            :placeholder="customFieldPlaceholder"
            class="w-full h-full outline-none bg-transparent my-2 px-1"
          />
          <div
            @click="submitCustomMedicalCondition"
            class="p-2 text-xl text-gray-50 bg-emerald-400 rounded-full"
          >
            <AppIconCheckOutline />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { v4 as uuid } from 'uuid'

import AppIconSearch from './AppIconSearch.vue'
import AppIconMenuUpOutline from './icons/AppIconMenuUpOutline.vue'
import AppIconCheckOutline from './icons/AppIconCheckOutline.vue'

const emit = defineEmits(['selectedItem'])
const props = defineProps({
  contents: { type: Array, required: false, default: () => [] },
  title: { type: String, default: 'Dropdown' },
  placeholder: { type: String, default: 'Search...' },
  customFieldPlaceholder: { type: String, default: 'Custom item' }
})

const searchItems = computed(() => {
  const matchedItems = []
  for (let content of props.contents) {
    if (
      content.content
        .toLocaleLowerCase()
        .includes(searchKey.value.toLocaleLowerCase())
    ) {
      matchedItems.push(content)
    }
  }
  return matchedItems
})

const searchKey = ref('')

const showDropdown = ref(false)
const toggleDropdown = () => (showDropdown.value = !showDropdown.value)

const customField = ref('')
function submitCustomMedicalCondition() {
  if (customField.value !== '') {
    let id = uuid()
    let content = customField.value
    emit('selectedItem', { id, content })
    customField.value = ''
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  #{&}__button {
    border: 1px solid gray;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  #{&}__content {
    padding: 1rem 0.5rem;

    & .form-input {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 40px;
      padding-left: 0.5rem;
      border: 1px solid #aaa;
      border-radius: 0.4rem;
      overflow: hidden;
      margin-bottom: 1rem;
      font-size: 14px;
      font-weight: 500;
      background-color: #fff;

      & #dropdown {
        width: 100%;
        height: 100%;
        outline: none;
        padding-right: 0.5rem;
      }
    }

    & .items {
      max-height: 200px;
      min-width: max-content;
      overflow-y: scroll;
      & li {
        padding: 0.5rem 1rem;
        background: #f7f7f7;
        margin-bottom: 0.2rem;
        text-transform: capitalize;
        border-radius: 0.2rem;
        &:hover {
          background: #fefefe;
        }
      }
    }
  }
}
.show {
  display: block;
}
.hide {
  display: none;
}
</style>
