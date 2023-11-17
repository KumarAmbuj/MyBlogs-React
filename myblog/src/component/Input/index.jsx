import "./input.css";
function Input(props) {
  const { placeholder, type, name, onChange } = props;
  return (
    <div className="inputField">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required
      ></input>
    </div>
  );
}
export default Input;
