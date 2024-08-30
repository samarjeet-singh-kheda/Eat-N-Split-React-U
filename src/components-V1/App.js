import { useState } from "react";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
//    https://i.pravatar.cc/150?img={}  [1 to 70]
//    https://i.pravatar.cc/48?u=118836

function App() {
  const [isAddFriendVisible, setIsAddFriendVisible] = useState(false);

  const [friendList, setFriendList] = useState(initialFriends);

  const [isSplitBillVisible, setIsSplitBillVisible] = useState(false);
  const [friend, setFriend] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  function handleSelect(friend) {
    setIsSplitBillVisible((isSplitBillVisible) => !isSplitBillVisible);
    setFriend(friend);
    selectedId === friend.id ? setSelectedId(null) : setSelectedId(friend.id);
  }

  function handleAddFriend(newFriend) {
    setFriendList((friendList) => [...friendList, newFriend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          onSelect={handleSelect}
          friendList={friendList}
          selectedId={selectedId}
        />

        {isAddFriendVisible && (
          <FormAddFriend
            onAdd={handleAddFriend}
            showForm={setIsAddFriendVisible}
          />
        )}

        <button
          className="button"
          onClick={() =>
            setIsAddFriendVisible((isAddFriendVisible) => !isAddFriendVisible)
          }
        >
          Add friend
        </button>
      </div>

      {isSplitBillVisible && (
        <FormSplitBill
          friend={friend}
          friendList={friendList}
          setFriendList={setFriendList}
          setIsSplitBillVisible={setIsSplitBillVisible}
        />
      )}
    </div>
  );
}

export default App;
