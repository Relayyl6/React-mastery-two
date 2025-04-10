import { useState } from 'react';

function FormComponent() {

    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [formData, setformData] = useState({
        name : '',
        email : '',
    })

    // const handleInputChange = (event) => {
    //     const { value } = event.target
    //     // console.log(event);
        
    //     setNameValue(value)
    // } 

    const handleSubmit = (event) => {
        event.preventDefault();
         
        // console.log(nameValue, "nameValue", emailValue, "emailValue");
    }
    // const handleEmailChange = (event) => {
    //     const { value } = event.target
    //     // console.log(event);
        
    //     setEmailValue(value)
    // }

    const handleOnChange = (event) => {
        // console.log(event.target.name);

        const { name, value } = event.target;
        
        setformData({
            ...formData,
            [name] : value,
        })
        
    }

    console.log(formData);
    

    return( 
        <div className="formint">
            <h1>Form</h1>

            <form onSubmit={handleSubmit}>
                {/* <label htmlFor='name'>{value}</label> */}
                <input  value={formData.name}
                        name="name"
                        type="name"
                        id="name"
                        placeholder="Enter your Name"
                        onChange={handleOnChange}
                    />
                <input  value={formData.email}
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter your Email"
                        onChange={handleOnChange}
                    />
                <button type="submit">submit</button>
            </form>
            
        </div>
    )
}

export default FormComponent