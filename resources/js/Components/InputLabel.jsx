export default function InputLabel({ value, className, forInput = '', children, ...props }) {
    return (
        <label {...props}

            htmlFor={forInput}
            className={`text-base block mb-2 ` + className}>
            {value ? value : children}
        </label>
    );
}
