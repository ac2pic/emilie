export default class Emilie {
    constructor(mod) {
        this.mod = mod;
    }

    preload() {
        if (modloader.installMods.get("char-select")) {
            console.log("char-select is installed. :leaCheese:");
        }
    }

    async registerResourceGenerators() {
        await UtilityResourceManager.addResourceGenerator('custom-character-config', async () => {
            const response = await fetch(`/${this.mod.baseDirectory}character-config.json`);
            return {
                mod: this.mod,
                config: await response.json()
            };
        });
    }
}