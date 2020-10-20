import { Selector, t, Role } from 'testcafe'

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

async function login(userName, password) {
    await t
        .typeText(Selector('input').withAttribute('name', 'EmailId'), userName)
        .typeText(Selector('input').withAttribute('name', 'Password'), password)
        .click(Selector('#submitbutton'))
};