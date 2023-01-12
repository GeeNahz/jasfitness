export function useSeparateSnakeCase() {
  function separatedValue(snake_case_value) {
    return snake_case_value.split('_')[0]
  }
  return { separatedValue }
}

export function useCapitalize() {
  function capitalizeValue(snake_case_value) {
    const { separatedValue } = useSeparateSnakeCase(snake_case_value)
    return separatedValue
  }
  console.log(capitalizeValue)
  return { capitalizeValue }
}
