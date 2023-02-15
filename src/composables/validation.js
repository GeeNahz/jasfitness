export function validation() {
  function useValidateInputs(values) {
    for (let value of values) {
      if (value.trim() === '') return false
    }
    return true
  }

  function useIsPasswordConfirmed(password1, password2) {
    if (password1 !== '') return password1.trim() === password2.trim()
    return false
  }

  return { useValidateInputs, useIsPasswordConfirmed }
}
