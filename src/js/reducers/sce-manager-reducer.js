var stateInitital = { 
    SCEManagers: [],
    error: [],
    loading:true,
};

const SCEManagerReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'REQUEST_ANSWER':
            return state;
        case 'GET_SCE_MANAGERS':
            return { 
                ...state,
                SCEManagers: action.data,
                loading:false,
            }
        case 'SCE_MANAGERS_ERROR':
            return { 
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}
export default SCEManagerReducer;