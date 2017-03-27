import {defaultNoteState} from './defaults'
import * as types from './mutation-types'
import {clone} from 'lodash'

export default {
    [types.SET_CURRENT_NOTE_ID] (state, id) {
        state.note.id = id
    },

    [types.PREPEND_TO_NOTES] (state, note) {
        state.notes.unshift(note)
    },

    [types.TOUCH_LAST_SAVE] (state) {
        state.note.lastSaved = Date.now()
    },

    [types.SET_SAVE_TIMEOUT] (state, {callback, delay}) {
        state.saveTimeout = setTimeout(callback, delay)
    },

    [types.CLEAR_SAVE_TIMEOUT] (state) {
        state.saveTimeout = null
    },

    [types.SET_CURRENT_NOTE] (state, note) {
        if (note === null) {
            state.note = clone(defaultNoteState)

            return
        }
        state.note = note
    }
}
