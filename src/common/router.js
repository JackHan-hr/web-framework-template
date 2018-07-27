export default {
  routes: [
    {
      path: '/dashboard',
      component: () => import('../routes/Dashboard/Dashboard'),
    },
  ],
}
