import { useState } from "react";
import { Input } from "antd";

const AddFoodForm = ({ addFood }) => {
  const [info, setInfo] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleInput = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFood(info);
    setInfo({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <form>
      <Input
        placeholder='Insert food name'
        name='name'
        value={info.name}
        type='text'
        onChange={(event) => handleInput(event)}
      />
      <Input
        placeholder='Insert image url'
        name='image'
        value={info.image}
        type='text'
        onChange={(event) => handleInput(event)}
      />
      <Input
        placeholder='Insert calories number'
        name='calories'
        value={info.calories}
        type='number'
        onChange={(event) => handleInput(event)}
      />
      <Input
        placeholder='Insert servings amount'
        name='servings'
        value={info.servings}
        type='number'
        onChange={(event) => handleInput(event)}
      />
      <button type='submit' onClick={handleSubmit}>
        Create Food
      </button>
    </form>
  );
};

export default AddFoodForm;