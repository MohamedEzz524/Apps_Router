import { FormEvent, useState } from 'react';
import FormInput from './FormInput';
import { Friend } from './FriendsList';

interface AddFormProps {
  setIsAdding: (param: boolean) => void;
  setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
}

const AddForm = ({ setFriends }: AddFormProps) => {
  const [name, setName] = useState('');
  const [img, setImg] = useState(
    'https://randomuser.me/api/portraits/men/7.jpg',
  );

  const addFriend = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim().length) return;

    const newFriend = {
      id: Date.now(),
      name,
      img,
      bill: 0,
    };

    setFriends((prev) => [...prev, newFriend]);
    setName('');
    setImg('https://randomuser.me/api/portraits/men/7.jpg');
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={addFriend}
        className="bg-sidebar text-textPrimary mt-5 flex flex-col gap-3 p-3 shadow-md"
      >
        <FormInput value={name} setValue={setName}>
          👬 Friend name
        </FormInput>
        <FormInput value={img} setValue={setImg}>
          🌆 Image URL
        </FormInput>

        <button
          type="submit"
          className="bg-accentPrimary w-32 cursor-pointer self-end rounded-md p-2 text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;
