const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const validate = (email, password, username) => {
    let invalid = []
    const nameValid = username.length > 1
    if(!nameValid) invalid.push("Name should have atleast 2 characters.")
    const emailValid = emailRegex.test(email)
    if(!emailValid) invalid.push("Invalid email")
    const passwordValid = passwordRegex.test(password)
    if(!passwordValid) invalid.push("Invalid password")
    return {
        valid :(emailValid && passwordValid && nameValid), 
        msg : (invalid.join(". "))
    }
} 