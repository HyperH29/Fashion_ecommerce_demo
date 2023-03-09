type ControlProps = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Control = ({ name, onChange }: ControlProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={onChange} />
      </div>
    </form>
  );
};

export default Control;
