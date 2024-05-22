import { Button, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Link from "next/link";
import { getUserInfo, removeUser } from "@/services/actions/auth.services";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    const userInfo = getUserInfo()
    console.log(userInfo);
    const router = useRouter();
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if(e.key === 'profile'){
          router.push(`/dashboard/${userInfo?.role}`)
        }else if(e.key==="logout"){
          removeUser();
          router.refresh();
        }

      };

    const items: MenuProps['items'] = [
        {
          label: 'Profile',
          key: 'profile',
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
            <Link href={'/login'}>
            <Button>
                Login
            </Button>
            </Link>
            :
            <Dropdown menu={menuProps} >
            <Image
            className="rounded-full w-[40px] h-[40px]"
            width={25}
            height={25}
            src={userInfo?.userImageURL}
            alt="user img"
            />
        
    
    </Dropdown>
         }   
        </>
    );
};

export default AuthButton;