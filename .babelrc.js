const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
    },
  ],
]

const plugins = [
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties",
  ["@babel/plugin-transform-runtime", { regenerator: false }],
]

module.exports = { presets, plugins }
