// assets
import { DashboardOutlined, HomeOutlined, KeyOutlined, ControlOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  HomeOutlined,
  KeyOutlined,
  ControlOutlined
};

const landing = {
  id: 'group-landing',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/landing/dashboard',
      icon: icons.DashboardOutlined
    },
    {
      id: 'landlord',
      title: 'Lanlord',
      type: 'item',
      url: '/landing/landlord',
      icon: icons.HomeOutlined
    },
    {
      id: 'tenant',
      title: 'Tenant',
      type: 'item',
      url: '/landing/tenant',
      icon: icons.KeyOutlined
    },
    {
      id: 'ajuster',
      title: 'Adjuster',
      type: 'item',
      url: '/landing/adjuster',
      icon: icons.ControlOutlined
    }
  ]
};

export default landing;
