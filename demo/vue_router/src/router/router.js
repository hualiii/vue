const routers = [
    {
        path: '/foo1/:id',
        component: () => import('../components/Foo1'),
        children: [
            {
                path: 'bar1',
                component:()=>import('../components/bar1')
            },
            {
                path: 'bar2',
                component:()=>import('../components/bar2')
            },
            {
                path: "*",
                component:()=>import('../components/bar')
            }
        ]
    }
]
export default routers