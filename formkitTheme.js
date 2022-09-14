// Create some re-useable definitions because
// many input types are identical in how
// we want to style them.
const textClassification = {
  label:
    'block mb-1 md:mb-2 mx-2 md:mx-3 font-bold font-inter text-xs md:text-sm formkit-invalid:text-red-500',
  inner: `
    flex
    items-center
    max-w-md
    border
    border-gray-400
    formkit-invalid:border-red-500
    rounded-lg
    mb-1
    overflow-hidden
    focus-within:border-blue-500
  `,
  input:
    'w-full h-9 md:h-10 px-3 border-none text-sm md:text-base font-inter text-gray-700 placeholder-gray-400',
  suffixIcon: 'w-5 md:w-6 mx-2 md:mx-3 text-gray-400'
}
const boxClassification = {
  fieldset: 'max-w-md border font-inter border-gray-400 rounded-md px-2 pb-1',
  legend: 'font-bold text-sm font-inter ',
  wrapper: 'flex items-center mb-1 cursor-pointer',
  help: 'mb-2',
  input:
    'form-check-input appearance-none h-5 w-5 mr-2 border border-gray-500 rounded-sm font-inter bg-white checked:bg-blue-500 focus:outline-none focus:ring-0 transition duration-200',
  label: 'text-sm text-gray-700 font-inter mt-1'
}
const buttonClassification = {
  wrapper: 'mb-1',
  input:
    'w-full h-9 md:h-10 px-3 md:px-4 py-1 md:py-2 border-none font-semibold font-quicksand text-sm md:text-base text-white disabled:opacity-75 bg-yellow-600 enabled:hover:bg-yellow-500 transition duration-75 ease-out shadow-xl enabled:hover:shadow-yellow-100 rounded'
}

// export our definitions using our above
// templates and declare one-offs and
// overrides as needed.
export default {
  // the global key will apply to all inputs
  global: {
    outer: 'mb-3 md:mb-6 formkit-disabled:opacity-50 font-inter',
    help: 'text-xs text-gray-500 font-inter',
    messages: 'list-none p-0 mt-1 mb-0',
    message: 'text-red-500 mb-1 text-xs font-inter'
  },
  button: buttonClassification,
  color: {
    label: 'block mb-1 font-bold font-inter text-sm',
    input:
      'w-12 md:w-16 h-7 md:h-8 appearance-none cursor-pointer border border-gray-300 font-inter rounded-md mb-1 md:mb-2 p-1'
  },
  date: textClassification,
  'datetime-local': textClassification,
  checkbox: boxClassification,
  email: textClassification,
  file: {
    label: 'block mb-1 font-bold font-inter text-sm',
    inner: 'max-w-md cursor-pointer',
    input:
      'text-gray-600 text-sm font-inter mb-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600',
    noFiles: 'block text-gray-800 text-sm mb-1',
    fileItem: 'block flex text-gray-800 text-sm font-inter mb-1',
    fileRemove: 'ml-auto text-blue-500 text-sm font-inter'
  },
  month: textClassification,
  number: textClassification,
  password: textClassification,
  radio: {
    ...boxClassification,
    input: boxClassification.input.replace('rounded-sm', 'rounded-full')
  },
  range: {
    inner: 'max-w-md',
    input:
      'form-range appearance-none font-inter w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none'
  },
  search: textClassification,
  select: textClassification,
  submit: buttonClassification,
  tel: textClassification,
  text: textClassification,
  textarea: {
    ...textClassification,
    input:
      'block w-full h-32 px-3 border-none text-base text-gray-700 font-inter placeholder-gray-400 focus:shadow-outline'
  },
  time: textClassification,
  url: textClassification,
  week: textClassification
}
