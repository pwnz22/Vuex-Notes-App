import * as mutations from './mutation-types'

export const saveNote = ({ commit, dispatch, state }) => {
    commit(mutations.TOUCH_LAST_SAVE)

    if (state.note.id === null) {
        commit(mutations.SET_CURRENT_NOTE_ID, Date.now())
        commit(mutations.PREPEND_TO_NOTES, state.note)
    }

    dispatch('storeNote')
}

export const storeNote = ({state}) => {
    localStorage.setItem('notes', JSON.stringify(state.notes))
}

export const openNote = ({commit}, note) => {
    commit(mutations.SET_CURRENT_NOTE, note)
}

export const deleteNote = ({commit, dispatch, state}, id) => {
    if (id === state.note.id) {
        dispatch('clearCurrentNote')
    }
    commit(mutations.DELETE_NOTE, id)
    dispatch('storeNote')
}

export const startSaveTimeout = ({ commit, dispatch, state }) => {
    if (state.saveTimeout !== null) {
        return
    }

    commit(mutations.SET_SAVE_TIMEOUT, {
        callback() {
            dispatch('saveNote')
            dispatch('stopSaveTimeout')
        },
        delay: 3000
    })
}

export const stopSaveTimeout = ({ commit, dispatch, state }) => {
    clearInterval(state.saveTimeout)
    commit(mutations.CLEAR_SAVE_TIMEOUT)
}

export const clearCurrentNote = ({commit, dispatch}) => {
    dispatch('stopSaveTimeout')
    commit(mutations.SET_CURRENT_NOTE, null)
}
