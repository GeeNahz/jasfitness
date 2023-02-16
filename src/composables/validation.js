export function validation() {
  function useIsValidateTextInputs(values) {
    for (let value of values) {
      if (value.trim() === '') return false
    }
    return true
  }

  function useValidateNumericInputs(values) {
    for (let value of values) {
      if (value === '' || isNaN(value)) return false
    }
    return true
  }

  function useIsValidHybridInputs(values) {
    for (let value of values) {
      if (typeof value == 'string') {
        if (value.trim() === '') return false
      }
      if (typeof value == 'number') {
        if (value == '' || isNaN(value)) return false
      }
      return true
    }
  }

  function useIsPasswordConfirmed(password1, password2) {
    if (password1 !== '') return password1.trim() === password2.trim()
    return false
  }

  return {
    useIsValidateTextInputs,
    useValidateNumericInputs,
    useIsPasswordConfirmed,
    useIsValidHybridInputs
  }
}
