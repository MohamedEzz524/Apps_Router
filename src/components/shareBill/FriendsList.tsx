import { useState } from 'react';
import AddForm from './AddForm';
import FriendCard from './FriendCard';
import Button from './Button';

export interface Friend {
  id: number;
  name: string;
  img: string;
  bill: number;
}

interface FriendsProps {
  setSelected: (param: Friend | null) => void;
  selected: Friend | null;
  friends: Friend[];
  setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
}

const Friends = ({
  setSelected,
  selected,
  friends,
  setFriends,
}: FriendsProps) => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="text-textPrimary flex min-w-xs flex-col">
      <div className="bg-sidebar max-h-68 overflow-y-auto shadow-md">
        {friends.map((friend) => {
          const active = JSON.stringify(selected) === JSON.stringify(friend);

          return (
            <div
              key={friend.id}
              className={`${active ? 'bg-accentPrimary/80' : 'hover:bg-accentPrimary/40'} trans-colors flex items-center justify-between p-4`}
            >
              <FriendCard
                friend={friend}
                active={active}
                setSelected={setSelected}
              />
            </div>
          );
        })}
      </div>

      {isAdding && (
        <AddForm setIsAdding={setIsAdding} setFriends={setFriends} />
      )}

      <div className="mt-5 self-end">
        <Button
          label={isAdding ? 'Close' : 'Add Friend'}
          handleClick={() => setIsAdding((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default Friends;
