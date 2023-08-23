let fontManager;
try {
  fontManager = require('./build/Release/fontmanager.node');
} catch (releaseNotFoundError) {
  try {
    fontManager = require('./build/Debug/fontmanager.node');
  } catch (debugNotFoundError) {
    throw new Error('There is no built binary for font-manager');
  }
}

module.exports = {
  findFontSync: (fontDescriptor) => fontManager.findFontSync(fontDescriptor),
  findFont: (fontDescriptor) => fontManager.findFont(fontDescriptor),
  findFontsSync: (fontDescriptor) => fontManager.findFontsSync(fontDescriptor),
  findFonts: (fontDescriptor) => fontManager.findFonts(fontDescriptor),
  getAvailableFontsSync: () => fontManager.getAvailableFontsSync(),
  getAvailableFonts: () => fontManager.getAvailableFonts(),
  substituteFontSync: (postscriptName, text) => fontManager.substituteFontSync(postscriptName, text),
  substituteFont: (postscriptName, text) => fontManager.substituteFont(postscriptName, text)
};
