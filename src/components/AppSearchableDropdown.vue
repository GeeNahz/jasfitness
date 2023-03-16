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
        <li class="text-gray-400">No item available</li>
        <li v-if="customItem.isActive" class="flex items-center p-2">
          <input
            @keyup.enter.self="submitCustomMedicalCondition"
            type="text"
            name="custom"
            id="custom"
            v-model="customItemValue"
            :placeholder="customItem.value"
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
          @click="submitHandler(content)"
          :class="{ 'disabled ': isDisabledItems }"
        >
          {{ content.content }}
        </li>
        <li v-if="customItem.isActive" class="flex items-center p-2">
          <input
            @keyup.enter.self="submitCustomMedicalCondition"
            type="text"
            name="custom"
            id="custom"
            v-model="customItemValue"
            :placeholder="customItem.value"
            class="w-full h-full outline-none bg-transparent my-2 px-1"
            :class="{ 'disabled ': isDisabledItems }"
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
import { ref, computed, watch } from 'vue'
import { v4 as uuid } from 'uuid'

import AppIconSearch from './AppIconSearch.vue'
import AppIconMenuUpOutline from './icons/AppIconMenuUpOutline.vue'
import AppIconCheckOutline from './icons/AppIconCheckOutline.vue'

const emit = defineEmits(['selectedItem'])
const props = defineProps({
  contents: { type: Array, required: false, default: () => [] },
  title: { type: String, default: 'Dropdown' },
  placeholder: { type: String, default: 'Search...' },
  customItem: { type: Object, default: () => {} },
  selectedItems: { type: Array, default: () => [] },
  masterItem: { type: String, default: 'none' },
  onDisableFields: {
    type: Function,
    default: function () {
      return false
    }
  } // use this to implement your custom fields disabler
})

const searchItems = computed(() => {
  const matchedItems = []
  for (let content of props.contents) {
    if (content.content.toLowerCase().includes(searchKey.value.toLowerCase())) {
      matchedItems.push(content)
    }
  }
  return matchedItems
})

const searchKey = ref('')

const showDropdown = ref(false)
const toggleDropdown = () => (showDropdown.value = !showDropdown.value)

const isDisabledItems = ref(false)
const disabledItems = ({ value = false }) => (isDisabledItems.value = value)
function setDisabledItems({ item = '' }) {
  if (item.toLowerCase() === ('none' || 'false')) {
    disabledItems({ value: true })
  } else {
    disabledItems({ value: false })
  }
}
function isInSelectedItems({ value }) {
  for (let item of props.selectedItems) {
    if (item.content.toString().toLowerCase() === value.toLowerCase())
      return true
  }
  return false
}
function submitHandler(selectedItem) {
  setDisabledItems({ item: selectedItem.content })
  emit('selectedItem', selectedItem)
}
const customItemValue = ref('')
function submitCustomMedicalCondition() {
  if (customItemValue.value !== '') {
    let id = uuid()
    let content = customItemValue.value
    emit('selectedItem', { id, content })
    customItemValue.value = ''
  }
}
/*set the enrollee-id field to show only when an HMO has been selected.*/
watch(props.selectedItems, () => {
  if (!isInSelectedItems({ value: props.masterItem })) {
    disabledItems({ value: false })
  }
  if (props.onDisableFields()) {
    disabledItems({ value: true })
  }
})
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
        @media screen and (max-width: 639px) {
          margin-bottom: 0.5rem;
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

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
