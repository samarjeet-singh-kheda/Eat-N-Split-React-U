import Friend from "./Friend";

export default function FriendList({ onSelect, friendList, selectedId }) {
  return (
    <ul>
      {friendList.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          selectedId={selectedId}
        />
      ))}
    </ul>
  );
}
