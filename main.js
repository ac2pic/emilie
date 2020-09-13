export default class Emilie {
    constructor(mod) {
        this.mod = mod;
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