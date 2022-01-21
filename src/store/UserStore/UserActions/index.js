export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const USER_LOADING = 'USER_LOADING';

export const userLoading = (bool) => ({
    type: USER_LOADING,
    isLoading: bool 
})
const updateUser = () => {
    return (dispatch) => {
        dispatch(userLoading(true));
        setTimeout(() => {
            
        },1000)
    }
}