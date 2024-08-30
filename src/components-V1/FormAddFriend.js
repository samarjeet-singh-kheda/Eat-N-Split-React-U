import { useState } from "react";

export default function FormAddFriend({ onAdd, showForm }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick() {
    const id = `${Date.now()}`.slice(-6);
    const image = `https://i.pravatar.cc/48?u=${id}`;

    const newFriend = {
      id,
      name: name[0].toUpperCase() + name.slice(1).toLowerCase(),
      image,
      balance: 0,
    };

    onAdd(newFriend);

    showForm(false);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="add-friend-name">👫 Friend Name</label>
      <input
        type="text"
        className="add-friend-name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="add-friend-name">🌅 Image URL</label>
      <input
        type="text"
        className="add-friend-name"
        disabled
        defaultValue={`https://i.pravatar.cc/48?u=${`${Date.now()}`.slice(-6)}`}
      />
      <button className="button" type="submit" onClick={handleClick}>
        Add
      </button>
    </form>
  );
}
