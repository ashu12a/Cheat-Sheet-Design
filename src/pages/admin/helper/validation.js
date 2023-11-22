export async function FormValidation(values){
    const errors  = usernameVerify({},values);
    return errors;
}

    // Code Validation 
function usernameVerify(error={},values){
     let x= values.code.toString();
     return x;

}