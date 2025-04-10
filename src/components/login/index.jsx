import { useState } from "react"
import CommonForm from "../common-form"
import { loginFormControls } from "../config"

const initialFormData = {
    email : '',
    password : ''
}

function LoginComponent() {

    const [loginFormData, setLoginFormData] = useState(initialFormData)

    const onHandleSubmit = (event) => {
        event.preventDefault();  
        console.log(loginFormData, 'loginFormData');

        setLoginFormData(initialFormData)
    }
    
    return (
        <>
            <div >
                <h1>Login Page</h1>
                <CommonForm 
                        formControls={loginFormControls} 
                        formData={loginFormData} 
                        setFormData={setLoginFormData}
                        buttonText={"Login"} 
                        onHandleSubmit={onHandleSubmit}
                    />
            </div>
        </>
    )
}

export default LoginComponent