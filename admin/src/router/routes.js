import UserControl from '@/views/UserControl'
import FinancialInfo from '@/views/FinancialInfo'
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    name: 'Layout',
    title: '首页',
    component: Layout
  },
  {
    path: '/user',
    name: 'Layout',
    component: Layout,
    title: '用户管理',
    children: [
      {
        path: '/user/control',
        name: 'UserControl',
        title: '管理详情',
        component: UserControl
      }
    ]
  },
  {
    path: '/financialInfo',
    name: 'Layout',
    component: Layout,
    title: '财务信息',
    children: [
      {
        path: '/financialInfo',
        name: 'financialInfo',
        title: '财务信息',
        component: FinancialInfo
      }
    ]
  }

]

export default routes
