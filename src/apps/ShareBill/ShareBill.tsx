import { useState } from 'react';
import FriendsList, { Friend } from '../../components/shareBill/FriendsList';
import SplitBill from '../../components/shareBill/SplitBill';
import MainTitle from '../../components/global/MainTitle';

const initialFriends: Friend[] = [
  {
    id: 10,
    name: 'Clark',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    bill: 0,
  },
  {
    id: 11,
    name: 'Sarah',
    img: 'https://randomuser.me/api/portraits/women/10.jpg',
    bill: 0,
  },
  {
    id: 12,
    name: 'Ahmed',
    img: 'https://randomuser.me/api/portraits/men/10.jpg',
    bill: 0,
  },
];

const ShareBill = () => {
  const [selected, setSelected] = useState<Friend | null>(null);
  const [friends, setFriends] = useState([...initialFriends]);

  return (
    <section className="main-section">
      <MainTitle title="Sharing Bills" />

      <div className="flex min-h-8/10 min-w-8/10 flex-col gap-3 lg:flex-row">
        <FriendsList
          setSelected={setSelected}
          selected={selected}
          friends={friends}
          setFriends={setFriends}
        />
        {selected && (
          <SplitBill
            key={Date.now()}
            selected={selected}
            setSelected={setSelected}
            setFriends={setFriends}
          />
        )}
      </div>
    </section>
  );
};

export default ShareBill;
