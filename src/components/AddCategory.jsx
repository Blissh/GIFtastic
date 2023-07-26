import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue("");
  };

  return (
    <form action="" onSubmit={onSubmit} className="h-max w-7/12 min-w-max">
      <input
        type="text"
        value={inputValue}
        placeholder="Search your topic :)"
        onChange={onInputChange}
        className="mt-8 h-12 w-full rounded-lg border border-white bg-slate-800 px-4 text-white caret-orange-600 shadow-lg shadow-slate-500/40 outline-orange-500 hover:shadow-orange-600/60"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func,
};
