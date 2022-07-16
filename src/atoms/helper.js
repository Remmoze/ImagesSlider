const setProperty = (setter, key) => {
    return (value) => {
        setter((state) => ({ ...state, [key]: value }));
    };
};

export default setProperty;
