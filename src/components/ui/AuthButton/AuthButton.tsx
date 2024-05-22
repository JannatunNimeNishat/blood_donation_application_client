import { Button, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Link from "next/link";

const AuthButton = () => {
    const user = true;
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
      };

    const items: MenuProps['items'] = [
        {
          label: '1st menu item',
          key: '1',
        },
        {
          label: '2nd menu item',
          key: '2',
        },
        {
          label: '3rd menu item',
          key: '3',
          danger: true,
        },
        {
          label: '4rd menu item',
          key: '4',
          danger: true,
          disabled: true,
        },
      ];
      
      const menuProps = {
        items,
        onClick: handleMenuClick,
      };
    return (
        <>
         {
            user ?
            <Link href={'/login'}>
            <Button>
                Login
            </Button>
            </Link>
            :
            <Dropdown menu={menuProps}>
                <Button type="primary"  shape="circle">
            A
          </Button>
    
    </Dropdown>
         }   
        </>
    );
};

export default AuthButton;