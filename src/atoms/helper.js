const setProperty = (setter, key) => {
    return (value) => {
        setter((state) => ({ ...state, [key]: value }));
    };
};

const localStorageEffect =
    (key) =>
    ({ setSelf, onSet }) => {
        const savedValue = localStorage.getItem(key);
        if (savedValue !== null) {
            setSelf(JSON.parse(savedValue));
        }

        onSet((newValue, _, isReset) => {
            isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
        });
    };
export { localStorageEffect };

export { setProperty, localStorageEffect };
