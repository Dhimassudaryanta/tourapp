

export const SaveTamu = (data, id) => async dispatch => {

    console.log('save')
    // console.log(nama)

    dispatch({ type: 'SAVE_TAMU', payload: data });
}

export const DeleteTamu = (data, id) => async dispatch => {

    console.log('delete')
    // console.log(nama)

    dispatch({ type: 'SAVE_TAMU', payload: data });
}