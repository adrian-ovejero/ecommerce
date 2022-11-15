const PERSISTENCE_TYPES = {
    TYPE_MEM: 'MEMORY',
    TYPE_FILE: 'FILE SYSTEM',
    TYPE_MONGODB: 'MONGODB',
};

const config = {
    PORT: 8080,
    PERSISTENCE_TYPE: PERSISTENCE_TYPES.TYPE_MONGODB,
    //MONGODB_CONNECTION_STR: 'mongodb://localhost/ecommerce_db',
    //MONGODB_CONNECTION_STR: 'mongodb+srv://juanromeroclases:HolaHola123@cluster0.5wxsavc.mongodb.net/ecommerce?retryWrites=true&w=majority',
    MONGODB_CONNECTION_STR: 'mongodb+srv://adrianovejero76:Despertar2021@cluster0.djjzloo.mongodb.net/ecommerce?retryWrites=true&w=majority',

    MONGODB_TIMEOUT: 2000   // Valor bajo para testing.
};

export {PERSISTENCE_TYPES, config as default};
