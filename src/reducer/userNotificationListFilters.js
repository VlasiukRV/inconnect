import { USERNOTIFICATION_LIST, CHANGE_FILTERS } from '../constants'

const defaultFilters = {
    term: ''
}

export default (filters = defaultFilters, action) => {
    const { 
        type, 
        payload
    } = action

      switch (type) {
        case USERNOTIFICATION_LIST+CHANGE_FILTERS:
            return Object.assign({}, filters, payload.change)

    }

    return filters
}