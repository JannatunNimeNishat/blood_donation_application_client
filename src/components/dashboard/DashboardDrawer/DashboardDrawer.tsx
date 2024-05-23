
import { Button, Layout,  theme } from 'antd';
import React from 'react';
import SideBar from '../SideBar/SideBar';
import { removeUser } from '@/services/actions/auth.services';

import { useRouter } from 'next/navigation';
const { Header, Content } = Layout;



const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
    
    const router = useRouter();
    const handleLogout = ()=>{
        removeUser();
        router.push('/')
        router.refresh();
    }
    return (
        <Layout  style={{ height: "100%" }}>
        <SideBar/>
        <Layout>
        <Header
        className='bg-white flex items-center justify-end px-8'
        >
            <Button type='primary' danger 
            onClick={handleLogout}
            >
                Logout
            </Button>
            
            
        </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                
              }}
            >
              {children}
            </div>
          </Content>
          
        </Layout>
      </Layout>
    );
};

export default DashboardDrawer;