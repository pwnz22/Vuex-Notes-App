import moment from 'moment'
export const note = state => {
    return state.note
}

export const notes = state => {
    return state.notes.sort((a, b) => {
        return a['lastSaved'] < b['lastSaved']
    })
}

export const lastSaved = state => {
    if (!state.note.lastSaved) {
        return 'Never'
    }

    return moment(state.note.lastSaved).calendar()
}
