import {mount} from "@vue/test-utils";
import Register from "./Register";
import i18n from "../i18n";
import register from "../services/register";
import {postLogin} from "../services/auth";

jest.mock('../services/register');
jest.mock('../services/auth');

describe('Register', () => {
    it('should display form', async () => {
        const wrapper = mount(Register, {
            global: {
                plugins: [i18n]
            }
        })

        expect(wrapper.find('form')).toBeTruthy()
    })
    it('should call register on form submit', async () => {
        const wrapper = mount(Register, {
            global: {
                plugins: [i18n]
            }
        })
        const resp = {token: 'yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk1NzU5NDgsImlhdCI6MTYyOTU3NTY0OCwic3ViIjozfQ.8roDNWgCwBEN8f10XTkaMDgzR5HEMPuFPNdAW8tb60o'};
        register.mockResolvedValue(resp)
        register.mockClear()
        postLogin.mockClear()

        const username = 'test'
        const password = 'test'

        await wrapper.find('#username').setValue(username)
        await wrapper.find('#password').setValue(password)
        await wrapper.find('#confirm-password').setValue(password)

        await wrapper.find('form').trigger('submit.prevent')

        expect(register).toBeCalledTimes(1)
        expect(register).toHaveBeenCalledWith(username, password);
        expect(postLogin).toBeCalledTimes(1);
    })
})