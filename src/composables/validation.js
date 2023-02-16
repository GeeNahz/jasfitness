export function validation() {
  function useValidateTextInputs(values) {
    for (let value of values) {
      if (value.trim() === '') return false
    }
    return true
  }

  function useIsPasswordConfirmed(password1, password2) {
    if (password1 !== '') return password1.trim() === password2.trim()
    return false
  }

  return { useValidateTextInputs, useIsPasswordConfirmed }
}
