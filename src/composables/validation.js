export function validation() {
  function useValidateTextInputs(values) {
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

  function validateHybridInputs(values) {
    for (let value of values) {
      if (typeof value === String) {
        if (value.trim() === '') return false
      }
      if (typeof value === Number) {
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
    useValidateTextInputs,
    useValidateNumericInputs,
    useIsPasswordConfirmed,
    validateHybridInputs
  }
}
