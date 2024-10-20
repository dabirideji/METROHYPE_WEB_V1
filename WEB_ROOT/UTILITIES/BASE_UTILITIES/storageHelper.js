export const STORAGE_TYPE = {
    SESSION: "session",
    LOCAL: "local"
};

export const STORAGE = {
    set(key, value, storageType = STORAGE_TYPE.LOCAL) {
        const storage = storageType === STORAGE_TYPE.SESSION ? sessionStorage : localStorage;
        storage.setItem(key, JSON.stringify(value));
    },

    get(key, storageType = STORAGE_TYPE.LOCAL) {
        const storage = storageType === STORAGE_TYPE.SESSION ? sessionStorage : localStorage;
        const item = storage.getItem(key);
        return item ? JSON.parse(item) : null;
    },

    remove(key, storageType = STORAGE_TYPE.LOCAL) {
        const storage = storageType === STORAGE_TYPE.SESSION ? sessionStorage : localStorage;
        storage.removeItem(key);
    },

    clear(storageType = STORAGE_TYPE.LOCAL) {
        const storage = storageType === STORAGE_TYPE.SESSION ? sessionStorage : localStorage;
        storage.clear();
    }
};



