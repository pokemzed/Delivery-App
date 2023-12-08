export const validationReg = (values: { email: string, password: string, name: string }) => {
    const errors = {}
    if(!values.name){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        errors.name = 'Required'
    }

    if (!values.email) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        errors.email = 'Invalid E-Mail'
    }

    if (!values.password) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        errors.password = 'Required'
    }
    // else if (values.password.length < 5) {
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-expect-error
    //     errors.password = 'Invalid E-Mail'
    // }

    return errors
}