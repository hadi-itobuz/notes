import {
    Input,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types"
const FormField = ({ fieldObj,register }) => {
    return (
        <>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                {fieldObj.name}
            </Typography>
            <Input
                type={fieldObj.type}
                defaultValue={fieldObj.val} {...register(`${fieldObj.name}`)}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />
            {/* {errors.fieldObj.name && <p>Erorr....</p>} */}
        </>
    )
}
FormField.propTypes = {
    fieldObj:PropTypes.object,
    register:PropTypes.func,
    errors:PropTypes.object
  }
  
export default FormField;