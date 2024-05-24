import { Dropdown, MenuProps,  } from "antd";

import Link from "next/link";
import { getUserInfo, removeUser } from "@/services/actions/auth.services";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PrimaryBtn from "../Button/PrimaryBtn";

const AuthButton = () => {
    const userInfo = getUserInfo()
   
    const router = useRouter();
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if(e.key === 'dashboard'){
          router.push(`/dashboard/${userInfo?.role}`)
        }else if(e.key==="logout"){
          removeUser();
          router.refresh();
        }

      };

    const items: MenuProps['items'] = [
        {
          label: 'Dashboard',
          key: 'dashboard',
        },
        {
          label: 'Logout',
          key: 'logout',
        }
        
      ];
      
      const menuProps = {
        items,
        onClick: handleMenuClick,
      };
    return (
        <>
         {
            !userInfo?.id ?
            <Link className=" w-[150px] " href={'/login'}
            >
              <PrimaryBtn>
                Login
              </PrimaryBtn>
            
            </Link>
            :
            <Dropdown menu={menuProps} className="w-[150px] flex items-center justify-center ">
              <div>
            <Image
            className="rounded-full w-[40px] h-[40px] border border-red-500"
            width={25}
            height={25}
            src={userInfo?.userImageURL}
            alt="user img"
            />
            </div>
        
    
    </Dropdown>
         }   
        </>
    );
};

export default AuthButton;