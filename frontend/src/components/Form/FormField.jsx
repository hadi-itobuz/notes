import {
    Input,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import PropTypes from "prop-types"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormField = ({ fieldObj, register }) => {

    const [type, setType] = useState(fieldObj.type);
    const handleToggle = () => {//toggle password visibility 
        if (type === 'password')setType('text');
        else setType('password');   
    }

    return (
        <>
            <Typography variant="h6" color="white" className="-mb-3">
                {fieldObj.name}
            </Typography>
            <div className="flex">
                <Input
                    type={type}
                    defaultValue={fieldObj.val} {...register(`${fieldObj.name}`, { required: true })}
                    size="lg"
                    placeholder={fieldObj.val}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white p-3"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
                {/* Showing icons only for password field */}
                {(fieldObj.type === 'password') && <span className=" z-50 -ml-8 flex justify-around items-center" onClick={handleToggle}>
                    {(type==='password')?<FaEye color={"white"} />:<FaEyeSlash color={"white"} />}
                </span>}
            </div>

        </>
    )
}
FormField.propTypes = {
    fieldObj: PropTypes.object,
    register: PropTypes.func,
    errors: PropTypes.object
}

export default FormField;