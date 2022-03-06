import validator from 'validator'

const nameValidator = (name) => {
    if(name === undefined || name.length < 2 || name === null)
        return false
    return true
}

const emailValidator = (email) => {
    if(email === null || email === undefined || email === "")
        return false
    if(validator.isEmail(email))
        return true
    return false
}

const passwordValidator = (password) => {
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(password.match(passw))
        return true
    return false
}


export { nameValidator ,emailValidator ,passwordValidator }