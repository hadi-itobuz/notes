import { Card, Button } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import FormField from "./FormField";


const Form = ({ fields, handleSubmit }) => {
    return (
        <Card color="transparent" className="p-5" shadow={false}>
            <form className=" mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    {fields.map((field) => <FormField key={field.name} fieldObj={field} />)}
                </div>
                <Button className="mt-6 bg-black p-2" type="submit" value="Submit" fullWidth>
                    Submit
                </Button>
            </form>
        </Card>
    );
}

Form.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;