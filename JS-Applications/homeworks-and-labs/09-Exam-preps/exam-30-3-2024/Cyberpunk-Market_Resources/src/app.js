import { logout } from './data/users.js';
import { page } from './lib.js';
import { updateNavBar } from './util.js';
import { showHome } from './views/homeView.js';
import { showDashboard } from './views/dashboardView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';

updateNavBar();
page('/', showHome);
page('/catalog', showDashboard);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page.start();

document.getElementById('logoutButton').addEventListener('click', async () => {
    logout();
    updateNavBar();
    page.redirect('/');
});