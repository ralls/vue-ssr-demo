/* eslint-disable import/prefer-default-export */
import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItem } from '../api'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        actions: {
            fetchItem ({ commit }, payload) {
                return fetchItem().then(result => {
                    commit('setItem', result)
                })
            }
        },
        getters: {},
        modules: {},
        mutations: {
            setItem (state, payload) {
                state.comments = payload
            }
        },
        state: () => ({
            comments: []
        })
    })
}

export { createStore }
