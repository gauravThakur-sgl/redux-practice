/* eslint-disable react/prop-types */
function TextArea(props) {
    const {title, placeHolder, variant = "default", size = "default" } = props;
    const textAreaColors = {
      default: " border-gray-300 focus-border-blue-500",
      error: "border-red-500 focus:border-red-600"
    };
    const textAreaSize =  {
      default: "h-24 text-base",
      sm: "h-16 text-sm",
      lg: "h-32 text-lg"
    };
    const baseClasses = "w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none shadow-inner"
    const sizeClasses = textAreaSize[size] || textAreaSize.default;
    const variantClasses = textAreaColors[variant] || textAreaColors.default;
  
  
    return <div>
        <label>{title}</label>
      <textarea placeholder={placeHolder} className={`${variantClasses} ${baseClasses} ${sizeClasses}`} />
    </div>;
}

export default TextArea