import { useAlertStore } from "@/stores/alerts";

export function useModalActions() {
  const store = useAlertStore()
  function toggleDasboardModal(id: string) {
    store.toggleModal(id)
  }
  function toggleHelpModal(id: string) {
    store.toggleModal(id)
  }
  
  return { toggleHelpModal, toggleDasboardModal }
}