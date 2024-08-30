import { useState } from "react";

export default function FormSplitBill({
  friend,
  friendList,
  setFriendList,
  setIsSplitBillVisible,
}) {
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [pay, setPay] = useState("You");

  function handleSubmit(e) {
    e.preventDefault();

    if (pay === "You") {
      setFriendList((friendList) =>
        friendList.map((fr) =>
          fr.id === friend.id
            ? {
                ...friend,
                balance:
                  friend.balance + (Number(billValue) - Number(myExpense)),
              }
            : fr
        )
      );
    } else {
      setFriendList((friendList) =>
        friendList.map((fr) =>
          fr.id === friend.id
            ? { ...friend, balance: friend.balance - Number(myExpense) }
            : fr
        )
      );
    }

    setBillValue(0);
    setMyExpense(0);
    setPay("You");
    setIsSplitBillVisible(false);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label htmlFor="bill-value">💰 Bill value</label>
      <input
        type="number"
        className="bill-value"
        required
        value={billValue === 0 ? undefined : billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />

      <label htmlFor="my-expense">💁 Your expense</label>
      <input
        type="number"
        className="my-expense"
        required
        value={myExpense === 0 ? undefined : myExpense}
        onChange={(e) => setMyExpense(e.target.value)}
      />

      <label htmlFor="friend-expense">👭 {friend.name}'s expense:</label>
      <input
        type="number"
        className="friend-expense"
        disabled
        value={Number(billValue) - Number(myExpense)}
      />

      <label htmlFor="paying-bill">🤑 Who is paying the bill?</label>
      <select
        name=""
        className="paying-bill"
        value={pay}
        onChange={(e) => setPay(e.target.value)}
      >
        <option value="You">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
}
