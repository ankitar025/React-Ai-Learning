function InputBox({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Ask something..."
      value={value}
      onChange={onChange}
      className="border p-4 rounded-md min-w-[350px] "
    />
  );
}

export default InputBox;
