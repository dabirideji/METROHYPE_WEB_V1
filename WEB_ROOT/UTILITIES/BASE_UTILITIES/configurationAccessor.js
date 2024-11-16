async function loadConfig() {
    const response = await fetch("/WEB_ROOT/CONFIGURATION/config.json"); //todo  - adjust base url - scalable
    console.log(response);
    if (!response.ok) {
        throw new Error(`Failed to load config file: ${response.statusText}`);
    }
    return await response.json();
}

export async function getConfig(key = null, ...subkeys) {
    const config = await loadConfig();
    const mode = (config['mode'] || 'development').toLowerCase(); 
    const environmentConfig = config[mode] || config['development']; 

    if (!key) {
        return environmentConfig;
    }
    let value = environmentConfig[key];
    for (const subkey of subkeys) {
        if (value && typeof value === 'object' && subkey in value) {
            value = value[subkey];
        } else {
            return undefined; 
        }
    }
    return value;
}
