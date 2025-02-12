import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import FormField from "./FormField";

const Form = ({ fields, onSubmit }) => {
    const onSubmitReset = (formData) => {//function to submit data and reset form
        onSubmit(formData);
        reset();
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <form className=" mx-auto mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 px-5 py-8 border-2 rounded border-gray-200" onSubmit={handleSubmit(onSubmitReset)} >
            <div className="mb-1 flex flex-col gap-6"> {/*Mapin form fiels*/}
                {fields.map((field) => <FormField key={field.name} fieldObj={field} register={register} errors={errors} />)}
            </div>
            <Button className="mt-6 bg-blue-700 p-2" type="submit" value="Submit" fullWidth>
                Submit
            </Button>
        </form>
    );
}

Form.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Form;