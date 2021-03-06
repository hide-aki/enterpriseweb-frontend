let store = null;

export default {
    setStore: (newStore) => {
        store = newStore;
    },
    getToken: () => {
        if (store && store.getState().userReducer.user.token) {
            return store.getState().userReducer.user.token
        }
        return localStorage.getItem('TOKEN')
    },
    login: (userInfo, token) => {
        store.dispatch({ type: 'SET_USER_INFO', data: userInfo })
        localStorage.setItem('TOKEN', token)
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    logout: () => {
        store.dispatch({ type: 'SET_USER_INFO', data: {} })
        localStorage.removeItem("TOKEN")
        localStorage.removeItem("userInfo")
    },
    showUi: (message, code) => {
        store.dispatch({ type: 'SHOW_UI', message, code })
    },
    hideUi: () => {
        store.dispatch({ type: 'HIDE_UI' })
    },
    actShowLoading: (data) => {
        store.dispatch({ type: 'SHOW_LOADING' })
    },
    actHideLoading: (data) => {
        store.dispatch({ type: 'HIDE_LOADING' })
    },
    actSetUserList: (data) => {
        store.dispatch({ type: 'SET_USER_LIST', data })
    },
    actSetActivity: (data) => {
        store.dispatch({ type: 'SET_ACTIVITY', data })
    },
    actInsertUser: data => {
        store.dispatch({ type: 'INSERT_USER', data })
    },
    actUpdateUser: data => {
        store.dispatch({ type: 'UPDATE_USER', data })
    },
    actDeleteUser: data => {
        store.dispatch({ type: 'DELETE_USER', data })
    },
    actSetListClass: data => {
        store.dispatch({ type: 'SET_LIST_CLASS', data })
    },
    actAddClass: data => {
        store.dispatch({ type: 'ADD_CLASS', data })
    },
    actAddStudentToClass: data => {
        store.dispatch({ type: 'ADD_STUDENT_CLASS', data })
    },
    actDeleteClass: data => {
        store.dispatch({ type: 'DELETE_CLASS', data })
    },
    actRemoveStudentFromClass: data => {
        store.dispatch({ type: 'REMOVE_STUDENT', data })
    },
    actUpdateClassTutor: data => {
        store.dispatch({ type: 'UPDATE_CLASS_TUTOR', data })
    }

}