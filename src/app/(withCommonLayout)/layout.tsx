import Navbar from "@/components/shared/Navbar/Navbar";


const CommonLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
        <Navbar/>
        <div className="min-h-screen">
            {children}
        </div>
        </>
    );
};

export default CommonLayout;