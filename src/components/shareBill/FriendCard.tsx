import Button from './Button';
import { Friend } from './FriendsList';

interface FriendCardProps {
  friend: Friend;
  active: boolean;
  setSelected: (param: Friend | null) => void;
}

const FriendCard = ({ friend, active, setSelected }: FriendCardProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <img
        src={friend.img}
        alt={friend.name}
        className="h-14 w-14 rounded-full object-cover"
      />
      <div className="min-w-54">
        <h3 className="text-textPrimary font-bold">{friend.name}</h3>
        <p>
          {friend.bill > 0 ? (
            <p className="text-green-600">
              {friend.name} owns you {friend.bill}$
            </p>
          ) : friend.bill < 0 ? (
            <p className="text-red-800">
              You owe {friend.name} {Math.abs(friend.bill)}$
            </p>
          ) : (
            `You and ${friend.name} are even`
          )}
        </p>
      </div>

      <Button
        label={active ? 'Close' : 'Select'}
        handleClick={() => setSelected(active ? null : friend)}
      />
    </div>
  );
};

export default FriendCard;
