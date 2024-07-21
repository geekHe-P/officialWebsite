import { createPinia, defineStore } from 'pinia'
import { ref } from 'vue'

const pinia = createPinia()

export default pinia

export const state = defineStore(
  'state',
() => {
    const isDialog = ref(false)

    const getIsDialog = () => isDialog.value
    const setIsDialog = (newIsDialog) => {isDialog.value = newIsDialog}

    return {
      getIsDialog,
      setIsDialog
    }
  }
)
