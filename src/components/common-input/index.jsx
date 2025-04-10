 

function CommonInput({ label, name, id, type, placeholder, value, onChange }) {

    return(
        <>
            <div>
                <label htmlFor={name}>{label}</label>
                <input name={name}
                       id={id}
                       placeholder={placeholder || 'Enter value here'} 
                       value={value}
                       type={type || 'text'}
                       onChange={onChange} 
                    />
            </div>
        </>
    )
}

export default CommonInput