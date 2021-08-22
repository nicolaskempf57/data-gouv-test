import {mount} from "@vue/test-utils";
import Hash from "./Hash";
import fr from "../translations/fr";
import i18n from "../i18n";
import getHash from "../services/getHash";
import algorithms from "../services/algorithms";

jest.mock('../services/getHash');

describe('Hash', () => {
    it('should display form', () => {
        const msg = fr['hash-form']
        const wrapper = mount(Hash, {
            global: {
                plugins: [i18n]
            }
        })

        expect(wrapper.find('p').text()).toEqual(msg)
    })
    it('should call getHash when form is submitted', async () => {
        const wrapper = mount(Hash, {
            global: {
                plugins: [i18n]
            }
        })
        const resp = {hash: 'hash'};
        getHash.mockClear()
        getHash.mockResolvedValue(resp)

        const text = 'some text'
        const algorithm = 'md5'

        await wrapper.find('input[type=text]').setValue(text)
        await wrapper.find('input[type=radio][value='+algorithm+']').setValue()

        await wrapper.find('form').trigger('submit.prevent')

        expect(getHash).toBeCalledTimes(1)
        expect(getHash).toHaveBeenCalledWith(text, algorithm);
    })

    it('should call getHash for every algorithm when all-algorithms button is clicked', async () => {
        const wrapper = mount(Hash, {
            global: {
                plugins: [i18n]
            }
        })

        const resp = {hash: 'hash'};
        getHash.mockClear()
        getHash.mockResolvedValue(resp)

        const text = 'some text'
        await wrapper.find('input[type=text]').setValue(text)
        await wrapper.find('button.fr-btn--secondary').trigger('click')
        expect(getHash).toBeCalledTimes(algorithms.length)
        algorithms.forEach(algorithm => expect(getHash).toBeCalledWith(text, algorithm))
    })

})