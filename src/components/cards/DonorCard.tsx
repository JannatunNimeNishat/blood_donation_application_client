import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../ui/Button/PrimaryBtn";
const { Meta } = Card;

const DonorCard = (donor: any) => {
  // console.log(donor);
  const { name, bloodType, availability, location, userImageURL,id } =
    donor.donor || {};
  return (
    <div>
      <Card
        className=" "
        hoverable
        cover={
          <Image
            className="h-[370px]"
            alt="donor image"
            width={450}
            height={250}
            src={userImageURL}
          />
        }
      >
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        <div className="mb-3 text-[18px]">
          <h2><span className="font-bold">Name: </span>{name}</h2>
          <h2><span className="font-bold">Blood Type: </span>{bloodType}</h2>
          <h2><span className="font-bold">Availability: </span><span className="text-green-500">{availability}</span></h2>
          <h2><span className="font-bold">Location: </span>{location}</h2>
        </div>
        <Link className="  " href={`/bloodDonors/${id}`}>
            <PrimaryBtn>Details</PrimaryBtn>
        </Link>
      </Card>
    </div>
  );
};

export default DonorCard;
