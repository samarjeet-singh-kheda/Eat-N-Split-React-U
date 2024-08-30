import { useState } from "react";
import Button from "./Button";

/**
 * !    "https://i.pravatar.cc/48"  --->  always generate a new image on each refresh.
 *      But, to keep the image same on each refresh we attach a unique string it after it, like this --> "https://i.pravatar.cc/48?u=118836" or "https://i.pravatar.cc/48?u=ssdsf"
 *
 */

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(`https://i.pravatar.cc/48`);

  function handleClick(e) {
    e.preventDefault();

    if (!name || !image) return;

    /**
     * ?  "crypto" is a browser API, that is used to generate unique IDs via ".randomUUID()" method.
     *    e.g. =>  crypto.randomUUID() gives "8831ffdc-affd-47e2-806f-31731f0f1836"
     *    It do not work in old browsers
     *
     */
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: name[0].toUpperCase() + name.slice(1).toLowerCase(),
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage(`https://i.pravatar.cc/48`);
  }

  return (
    <form className="form-add-friend">
      <label>👫 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setName(e.target.value)}
      />

      <Button onClick={handleClick}>Add</Button>
    </form>
  );
}
