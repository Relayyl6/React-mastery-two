import { useState } from "react"
import CommonForm from "../common-form"
import { registerFormControls } from "../config"


function RegisterComponent() {

    const initialRegisterData = {
        name : '',
        email : '',
        password : ''
    }

    const [registerFormData, setRegisterFormData] = useState(initialRegisterData)
 
    const onHandleRegisterSubmit = (event) => {
        event.preventDefault();
        
        console.log(registerFormData, "registerFormData");
        setRegisterFormData(initialRegisterData);
    }

    return (
        <>
            <div>
                <h1>Register Page</h1>

                <CommonForm 
                        formControls={registerFormControls}
                        formData={registerFormData}
                        setFormData={setRegisterFormData}
                        buttonText={"Register"}
                        onHandleSubmit={onHandleRegisterSubmit}
                    />
            </div>
        </>
    )
}

export default RegisterComponent