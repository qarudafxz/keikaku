export const useForm = (form: Task):boolean => {
 //check if the form is valid
 if(!form) {
  return false;
 }
 //if the form is not empty
 return true;
}