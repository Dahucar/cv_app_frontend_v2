import { types } from "../types/types";

// change 'isOpen' property on state to true
export const syncOpenModal = () => ({
    type: types.uiStartModal
})

// change 'isOpen' property on state to false
export const syncCloseModal = () => ({
    type: types.uiFinishModal
})

// change 'isLoading' property on state to true
export const syncStartLoadingModal = () => ({
    type: types.uiStartLoadingModal
})

// change 'isLoading' property on state to false
export const syncFinishLoadingModal = () => ({
    type: types.uiFinishLoadingModal
})
