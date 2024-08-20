// Learn more https://docs.expo.io/guides/customizing-metro
// Metro官方文档：https://metrobundler.dev/
const { getDefaultConfig } = require('expo/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname)

module.exports = config;
