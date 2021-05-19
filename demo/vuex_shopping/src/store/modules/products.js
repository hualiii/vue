import shop from '../../api/shop'
import {PRODUCTS} from '../mutation-types'

// initial state
const state = {
    all: []
}
// mutations
const mutations = {
    [PRODUCTS.SET_PRODUCTS](state, products) {
        state.all = products
    },

    [PRODUCTS.DECREMENT_PRODUCT_INVENTORY](state, {id, number}) {
        const product = state.all.find(product => product.id === id)
        product.inventory -= number
    }
}
// getters
const getters = {}

// actions
const actions = {
    getAllProducts({commit}) {
        shop.getProducts(products => {
            commit(PRODUCTS.SET_PRODUCTS, products)
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}