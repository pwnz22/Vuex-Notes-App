import {clone} from 'lodash'
import {defaultNoteState} from './defaults'

export default {
    note: clone(defaultNoteState),
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    saveTimeout: null
}
