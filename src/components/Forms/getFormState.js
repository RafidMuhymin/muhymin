export default function getFormState(form) {
  const data = Object.fromEntries(new FormData(form));
  const errs = {};
  for (const key of data.keys()) {
    if (form[key].required && data[key] === "") {
      errs[key] = "This field is required";
    }
  }
  return { data, errs };
}
