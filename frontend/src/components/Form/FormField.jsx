import {
    Input,
    Typography,
} from "@material-tailwind/react";
const FormField = ({ fieldObj }) => {
    return (
        <>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                {fieldObj.name}
            </Typography>
            <Input
                type={fieldObj.type}
                value={fieldObj.val} onChange={(e) => fieldObj.setVal(e.target.value)}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />
        </>
    )
}
export default FormField;