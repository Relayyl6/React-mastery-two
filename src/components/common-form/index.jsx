import CommonInput from "../common-input";


function CommonForm({ formControls = [], formData, setFormData, buttonText, onHandleSubmit }) {

    const formType = {
        INPUT : 'input',
        SELECT : 'select',
        TEXTAREA : 'textarea'
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const renderFormElement = (getCurrentFormElement) => {
        
        let content = null;

        if (!getCurrentFormElement) {
            console.error("the current element is undefined");
            return null;
        }

        switch (getCurrentFormElement?.componentType) {
            case formType.INPUT:

                content = <CommonInput 
                                label={getCurrentFormElement?.label}
                                name={getCurrentFormElement?.name}
                                id={getCurrentFormElement?.id}
                                type={getCurrentFormElement?.type}
                                placeholder={getCurrentFormElement?.placeholder}
                                // formData, It likely holds the current state of the form's data, where each key corresponds to the name of a form element, and the value is the data entered by the user for that element.
                                value={formData[getCurrentFormElement?.name]} // formData[getCurrentFormElement.name] is used to dynamically access a value from the fomrData object, based on the property name
                                onChange={handleOnChange}
                                />
                
                break;
            default:
                content = <CommonInput 
                                label={getCurrentFormElement?.label}
                                name={getCurrentFormElement?.name}
                                id={getCurrentFormElement?.id}
                                type={getCurrentFormElement?.type}
                                placeholder={getCurrentFormElement?.placeholder}
                                // formData, It likely holds the current state of the form's data, where each key corresponds to the name of a form element, and the value is the data entered by the user for that element.
                                value={formData[getCurrentFormElement?.name]} // formData[getCurrentFormElement.name] is used to dynamically access a value from the fomrData object, based on the property name
                                onChange={handleOnChange}
                                />
                break;
        }
        return content;
    }

    return (
        <>
            <form onSubmit={onHandleSubmit}>
                {
                    formControls?.length ? 
                        formControls.map((singleFormControlItem, index) => 
                           <div key={singleFormControlItem?.id || singleFormControlItem?.name || index }>
                             {renderFormElement(singleFormControlItem)}
                           </div>
                        )
                    : null
                }
                <div style={{ marginTop : '12px' }}>
                    <button type='submit'>{buttonText || 'submit'}</button>
                </div>
            </form>
        </>
    )
}

export default CommonForm