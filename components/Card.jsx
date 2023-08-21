import cam from "../public/camera.png";
import Image from "next/image";
const Card = ({ column }) => {
  // console.log(typeof column);
  return (
    <div
      style={{
        backgroundColor: column?.color,
      }}
      className={`flex w-full p-5 flex-col rounded-xl bg-clip-border text-gray-700 shadow-md`}
    >
      <div className="flex justify-end">
        <Image src={cam} width={24} height={24} alt={cam} />
      </div>
      <p className="text-sm">{column?.textOne}</p>
      <p className="text-xl font-bold mt-1">{column?.textTwo}</p>
    </div>
  );
};

export default Card;
