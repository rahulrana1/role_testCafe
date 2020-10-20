import { herokuLogin } from '../roles/roles'
import { Selector } from 'testcafe';

const facilityDropDown = Selector('#combo_facility')
const visitDateTextBox = Selector('#txt_visit_date')
const bookAppointmentButton = Selector('#btn-book-appointment')

fixture(`Heroku app`)

    test(`User Can Login and Facitlity DropDown Exists`, async t => {
        await t
            .useRole(herokuLogin)
            .expect(facilityDropDown.exists).ok()
    });

    test(`Visit Date Text Box Exists`, async t => {
        await t
            .useRole(herokuLogin)
            .expect(visitDateTextBox.exists).ok()
    });

    test(`Book Appointment Buttin Exists`, async t => {
        await t
            .useRole(herokuLogin)
            .expect(bookAppointmentButton.exists).ok()
    });