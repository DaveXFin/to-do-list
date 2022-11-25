import React, {useState, useEffect,useRef} from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value: '');


  const inputTarget = useRef(null)

  useEffect(()=> {
    inputTarget.current.focus()
  })


  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    setInput('');
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
    {props.edit ? (<><input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputTarget} /><button className="todo-button edit">update</button></>) :
    (<><input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputTarget} /><button className="todo-button">Add todo</button></>)}
    </form>
  
  );
}

export default TodoForm;
