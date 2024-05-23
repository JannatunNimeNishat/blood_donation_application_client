"use client"
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import { useGetSingleDonorQuery } from "@/redux/api/donorApi";
import Image from "next/image";
import Link from "next/link";


const SingleDonorDetailsPage = ({params}:{params:any}) => {
    const {donorId} = params;
    const {data:singleDonorData, isLoading} = useGetSingleDonorQuery(donorId);

    const {
    id,
    name,
    email,
    mobileNumber,
    bloodType,
    location,
    availability,
    createdAt,
    updatedAt,
    userProfile,
    accountType,
    userImageURL,
  } = singleDonorData?.data || {};

  

    if(isLoading){
        return <h1 className="text-2xl font-bold text-center">Loading...</h1>
    }
    return (
        <div className="py-8 w-11/12 mx-auto">

            <div className="w-8/12 mx-auto rounded-lg p-10 bg-gray-300
            grid grid-cols-8 gap-8 relative
            ">
                {/* donor image */}
                <figure className="col-span-3">
                    <Image className="rounded-lg h-[400px] w-[400px]" width={300} height={300} src={userImageURL} alt="donor image"/>
                </figure>
                {/* donor details */}
                <div className="col-span-5 flex items-center ">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <p className="text-gray-600 text-2xl">{userProfile?.bio}</p>
                    <div>
                        {/* cards */}
                        <div className="grid grid-cols-3 gap-3 mt-8 ">
                            {/* blood type */}
                        <div className="px-3 py-3 bg-white rounded-lg text-center">
                            <p className="text-xl font-semibold">Blood type:</p>
                            <p className="mt-2 text-red-500 font-medium">{bloodType}</p>
                        </div>
                        {/* location */}
                        <div className="px-3 py-3 bg-white rounded-lg text-center">
                            <p className="text-xl font-semibold">Location:</p>
                            <p className="mt-2 text-red-500 font-medium">{location}</p>
                        </div>
                        {/* Availability  */}
                        <div className="px-3 py-3 bg-white rounded-lg text-center">
                            <p className="text-xl font-semibold">Availability :</p>
                            <p className="mt-2 text-red-500 font-medium">{availability}</p>
                        </div>
                        </div>
                        {/* contact details */}

                    </div>
                    </div>

                </div>

                {/* request blood request button */}
                <Link href={`/bloodRequest/${id}`}
                className="absolute top-4 right-5"
                >
                    <PrimaryBtn>
                        Send Blood Request
                    </PrimaryBtn>
                </Link>
            </div>
        </div>
    );
};

export default SingleDonorDetailsPage;