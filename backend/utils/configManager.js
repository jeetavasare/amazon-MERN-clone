import { existsSync, readFileSync } from 'fs';
import { resolve, join } from 'path';
let currdir = import.meta.dirname
function loadConfig() {
    const configDir = resolve(currdir, '../config');
    const defaultConfigPath = join(configDir, 'appsettings.json');
    const launchSettingsPath = join(configDir, 'launchsettings.json');

    console.log(launchSettingsPath)
    // default environment
    let env = process.env.NODE_ENV || 'development';
    // Load launchsettings if available
    if (existsSync(launchSettingsPath)) {
        let launchSettings 
        try{
            launchSettings = JSON.parse(readFileSync(launchSettingsPath, 'utf8'));
        }
        catch(e){
            console.log(e)
        }
        env = launchSettings.APP_ENVIRONMENT || env;
    }
    else{
        throw new Error("launchsettings.json is not present in the config directory of project")
    }


    // Load default config
    let config = {}
    try{

        config = JSON.parse(readFileSync(defaultConfigPath, 'utf8'));
    }
    catch{
        console.log("Default config file not present")
        
    }

    env = env.charAt(0).toUpperCase() + env.substring(1)
    env = "."+env
    // Override with environment-specific settings if available
    const envConfigPath = join(configDir, `appsettings${env}.json`); //"ProjectPath"\appsettings.json
    if (existsSync(envConfigPath)) {
        let envConfig 
        try{
            envConfig = JSON.parse(readFileSync(envConfigPath, 'utf8'));
            if (Object.keys(envConfig).length != 0){
                config = {...envConfig };
            }
        }
        catch(e){
            console.log(e)
        }
        
    }

    return config

} 
let config = loadConfig()
export default config