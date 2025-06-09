interface ListExpandProps {
  isCollapsed: boolean;
  setIsCollapsed: (param: boolean) => void;
}

const ListExpand = ({ isCollapsed, setIsCollapsed }: ListExpandProps) => {
  return (
    <div
      onClick={() => setIsCollapsed(!isCollapsed)}
      className="bg-bgPrimary mb-5 flex h-6 w-6 cursor-pointer items-center justify-center self-end rounded-full text-lg"
    >
      {isCollapsed ? '+' : '-'}
    </div>
  );
};

export default ListExpand;
