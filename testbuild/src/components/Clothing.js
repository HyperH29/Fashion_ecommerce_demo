import CreateCard from "./Card";

function Clothing() {
  return (
    <div>
      <CreateCard
        image={
          "https://images.unsplash.com/photo-1674560109079-0b1cd708cc2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        }
        title={"This is a Red Shirt"}
      />
    </div>
  );
}

export default Clothing;
