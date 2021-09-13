const complement = fn => (...args) => !fn(...args);
const isNullOrUndefined = value => [null, undefined].includes(value);
const isValidValue = complement(isNullOrUndefined);
// const isValidValue = (value) => !isNullOrUndefined(value);

const objectToFormData = object =>
  Object.entries(object).reduce((formData, [key, value]) => {
    console.log("*-**-*-*-*-*-*-*-*--*-*-*", formData)
    if (isValidValue(value)) {
      Array.isArray(value)
        ? value.forEach(element => formData.append(key + '[]', element))
        : formData.append(key, value);

    }
    return formData;
  }, new FormData());



const objectToFormDatas = object => {
  var formData = new FormData();
  Object.entries(object).map(keyValue => formData.append(keyValue[0], keyValue[1]))
  return formData
}


export const withFormData = fn => object => {
  //console.log("*-**-*-*-*-*-*-*-*--*-*-*", object)
  const formData = objectToFormData(object);
  for (var value of formData.values()) {
    console.log(value);
  }
  //console.log("*-**-*-*-*-*-*-*-*--*-*-*", formData.values)
  return fn(formData);
};
