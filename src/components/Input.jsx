const Input = (props) => {
  return (
    <>
      <div className="flex flex-row gap-4 border-b-2 pb-2">
        <img src={props.img} className="w-4 h-4"></img>
            <input type="text" placeholder={props.text} className="placeholder-gray-400 text-sm cursor-text"/>
      </div>
    </>
  );
};

export default Input;
