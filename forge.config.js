module.exports = {
  makers: [
    // Windows MSI
    {
      name: '@electron-forge/maker-wix',
      config: {
        language: 1033,
        manufacturer: 'Quaint Studios'
      }
    },
    // MacOS DMG
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './assets/dmg-background.png',
        format: 'ULFO'
      }
    },
    // Linux Zip
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux'],
      config: {
        // Config here
      }
    }
  ]
};
