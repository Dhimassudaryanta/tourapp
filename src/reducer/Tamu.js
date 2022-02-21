const INTIAL_STATE = [{
    nama: 'hohoho',
    id: 2
}];


export default (state = [], action) => {
    switch (action.type) {
        case "SAVE_TAMU":
            return action.payload;

        default:
            return state;
    }
};
