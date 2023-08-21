import Card from "./Card";

const Cards = () => {
  const columns = [
    { color: "#ddefe0", textOne: "Total Revenues", textTwo: "$2,129,430" },
    { color: "#f4ecdd", textOne: "Total Transactions", textTwo: "1,520" },
    { color: "#efdada", textOne: "Total Likes", textTwo: "9,721" },
    { color: "#dee0ef", textOne: "Total Users", textTwo: "892" },
  ];

  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-4">
      {columns.map((column) => (
        <div className="md:px-4 px-2 lg:m-0 my-4" key={column.color}>
          <Card column={column} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
