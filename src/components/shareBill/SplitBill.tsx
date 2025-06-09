import { FormEvent, useState } from 'react';
import { Friend } from './FriendsList';
import Input from './Input';

interface SplitBillProps {
  selected: Friend;
  setSelected: (param: Friend | null) => void;
  setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
}

const SplitBill = ({ selected, setSelected, setFriends }: SplitBillProps) => {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [whoPay, setWhoPay] = useState('You');

  const friendExpense = bill - yourExpense;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (bill > 0 && yourExpense <= bill) {
      const newBill = whoPay === 'You' ? friendExpense : -yourExpense;

      setFriends((prev) => {
        return prev.map((e) => {
          if (e.id === selected.id) return { ...e, bill: newBill };
          return e;
        });
      });

      setSelected(null);
    }
    return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-textPrimary bg-sidebar flex h-fit flex-col gap-6 p-4"
    >
      <h3>SPLIT A BILL WITH {selected.name}</h3>
      <Input value={bill} setValue={setBill}>
        💵 Bill Value
      </Input>
      <Input value={yourExpense} setValue={setYourExpense}>
        🧍 Your Expense
      </Input>
      <Input value={friendExpense}>👬 {selected.name}'s expense:</Input>

      <div className="flex w-full items-center justify-between gap-4">
        <label htmlFor="who-pay" className="min-w-60">
          🤑 Who Is Paying The Bill?
        </label>
        <select
          value={whoPay}
          id="who-pay"
          onChange={(e) => setWhoPay(e.target.value)}
          className="text-textSecondary min-w-32 bg-white p-2 text-center"
        >
          <option selected value="You">
            You
          </option>
          <option selected value={selected.name}>
            {selected.name}
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-accentPrimary mt-5 w-32 cursor-pointer self-end rounded-md p-2 text-white"
      >
        Split Bill
      </button>
    </form>
  );
};

export default SplitBill;
