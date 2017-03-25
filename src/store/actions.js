import * as mutations from './mutation-types'

export const saveNote = ({ commit, dispatch, state }) => {
    if (state.note.id === null) {
        commit(mutations.SET_CURRENT_NOTE_ID, Date.now())
        commit(mutations.PREPEND_TO_NOTES, state.note)
    }

    console.log(state.note.id)
}


