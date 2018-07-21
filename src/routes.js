const routes = [
    { path: '/', exact: true, component: 'HomePage', title: 'Главная' },
    { path: '/login', component: 'LoginPage', title: 'Вход' },
    { path: '/register', component: 'RegisterPage', title: 'Регистрация' },
    { path: '/game', component: 'GamePage', title: 'Игра' }
];
export default routes;