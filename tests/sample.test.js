import { roleEmployee, roleAdmin } from '../roles/roles'

const banner = Selector('#banner');
const avatarLogin = Selector('#avatarLogin');
const emailID_specialAccess = Selector('#emailId_specialAccess');
const inviteButton = Selector('#invite');
const specialPermissionLink = Selector("#specialPermissionLink")

fixture(`Sample Test`)

    test(`Employee can login`, async t => {
        await t
            .useRole(roleEmployee)
            .expect(banner.exists).ok()
            .expect(avatarLogin.exists).ok()
    });

    test(`Admin can grant special permissions to employee`, async t => {
        await t
            .useRole(roleAdmin)
            .expect(banner.exists).ok()
            .expect(avatarLogin.exists).ok()
            .typeText(emailID_specialAccess, "employee@employee.com")
            .click(inviteButton)
            .useRole(roleEmployee)
            .expect(specialPermissionLink.exists).ok()
    });