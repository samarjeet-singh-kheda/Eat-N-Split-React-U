export default function Friend({ friend, onSelect, selectedId }) {
  return (
    <li>
      <h3>{friend.name}</h3>
      <img src={friend.image} alt={friend.name} />
      <FriendMoneyStatus friend={friend} />
      <button className="button" onClick={() => onSelect(friend)}>
        {selectedId === friend.id ? "Close" : "Select"}
      </button>
    </li>
  );
}

function FriendMoneyStatus({ friend }) {
  if (friend.balance === 0) return <p>You and {friend.name} are even</p>;

  if (friend.balance < 0)
    return (
      <p className="red">
        You owe {friend.name} ${-friend.balance}
      </p>
    );

  if (friend.balance > 0)
    return (
      <p className="green">
        {friend.name} owe you ${friend.balance}
      </p>
    );
}
