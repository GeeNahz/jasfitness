export function validation() {
  function useIsValidTextInputs(values: string[]) {
    for (const value of values) {
      if (value.trim() === '') return false
    }
    return true
  }

  function useIsValidNumericInputs(values: number[]) {
    for (const value of values) {
      if (value.toString() === '' || isNaN(value)) return false
    }
    return true
  }

  function useIsValidHybridInputs(values: (number | string)[]) {
    for (const value of values) {
      if (typeof value == 'string') {
        if (value.trim() === '') return false
      }
      if (typeof value == 'number') {
        if (value.toString() == '' || isNaN(value)) return false
      }
    }
    return true
  }

  function useIsWithinRange({ value = 0, minRange = 0, maxRange = 10 }) {
    return value >= minRange && value <= maxRange
  }

  function useIsPasswordConfirmed(password1: any, password2: any) {
    if (password1 !== '') return password1.trim() === password2.trim()
    return false
  }

  return {
    useIsValidTextInputs,
    useIsValidNumericInputs,
    useIsPasswordConfirmed,
    useIsWithinRange,
    useIsValidHybridInputs
  }
}
