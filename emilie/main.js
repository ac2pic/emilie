export default class Emilie {
    constructor(mod) {
        this.mod = mod;
    }

    async preload() {
        await UtilityResourceManager.addResourceGenerator('menu-ui-replacer', async () => {
            const response = await fetch(`/${this.mod.baseDirectory}menu-gui-config.json`);
            return {
                mod: this.mod,
                menuConfig: await response.json()
            };
        });
    }
}