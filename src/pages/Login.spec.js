import {mount} from "@vue/test-utils";
import Login from "./Login";
import i18n from "../i18n";
import login from "../services/login";
import {postLogin} from "../services/auth";

jest.mock('../services/auth');
jest.mock('../services/login');

describe('Login', () => {
    it('should display form', async () => {
        const wrapper = mount(Login, {
            global: {
                plugins: [i18n]
            }
        })

        expect(wrapper.find('form')).toBeTruthy()
    })
    it('should call login on form submit', async () => {
        const wrapper = mount(Login, {
            global: {
                plugins: [i18n]
            }
        })
        const resp = {token: 'yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk1NzU5NDgsImlhdCI6MTYyOTU3NTY0OCwic3ViIjozfQ.8roDNWgCwBEN8f10XTkaMDgzR5HEMPuFPNdAW8tb60o'};
        login.mockResolvedValue(resp)
        login.mockClear()
        postLogin.mockClear()

        const username = 'test'
        const password = 'test'

        await wrapper.find('#username').setValue(username)
        await wrapper.find('#password').setValue(password)

        await wrapper.find('form').trigger('submit.prevent')

        expect(login).toBeCalledTimes(1)
        expect(login).toHaveBeenCalledWith(username, password);
        expect(postLogin).toBeCalledTimes(1);
    })
})