import { Selector, t, Role } from 'testcafe'
const appUrl = 'https://yourWebsiteURL.com/signin'
const herokuAppURL = 'https://katalon-demo-cura.herokuapp.com/'

export const roleAdmin = Role(appUrl, async t => {
    await login('admin@admin.com', 'Admin@12345')
}, {
        preserveUrl: true
});

export const roleEmployee = Role(appUrl, async t => {
    await login('employee@employee.com', 'Employee@12345')
}, {
        preserveUrl: true
});

export const herokuLogin = Role(herokuAppURL, async t => {
    await t
        .click(Selector('#menu-toggle'))
        .click(Selector('a').withText('Login'))
    await herokuAppLogin('John Doe', 'ThisIsNotAPassword')
}, {
        preserveUrl: true
});

async function login(userName, password) {
    await t
        .typeText(Selector('input').withAttribute('name', 'EmailId'), userName)
        .typeText(Selector('input').withAttribute('name', 'Password'), password)
        .click(Selector('#submitbutton'))
};

async function herokuAppLogin(userName, password) {
    await t
        .typeText(Selector('#txt-username'), userName)
        .typeText(Selector('#txt-password'), password)
        .click(Selector('#btn-login'))
};