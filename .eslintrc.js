// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    jest: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'plugin:you-dont-need-lodash-underscore/compatible-warn',
    'plugin:vue/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  // required to lint *.vue files
  plugins: [
    'jest',
    'vue',
    'you-dont-need-lodash-underscore',
    'babel'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', './app/javascript'],
          ['~calculator', './engines/calculator/app/javascript/calculator'],
          ['~evault', './engines/evault/app/javascript/evault']
        ],
        extensions: [
          '.js',
          '.vue',
          '.gql',
          '.graphql'
        ]
      }
    },
    'import/core-modules': [
      'monaco-editor',
      'intersection-observer'
    ]
  },
  // add your custom rules here
  rules: {
    semi: 2,

    // allow paren-less arrow functions
    'arrow-parens': 0,

    // allow labeled loops
    'no-labels': ['error', { allowLoop: true }],

    // allow async-await
    'generator-star-spacing': 0,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // don't allow methods with more than 20 linearly independent paths
    complexity: ['error', 20],

    // always put variable before literal when equating
    yoda: ['error'],

    // No lonely ifs in an else statement
    'no-lonely-if': ['error'],

    // use vue-moment, not moment directly
    'no-restricted-imports': ['error', {
      paths: [{
        name: 'moment',
        message: 'Do not use moment directly, rather use vue-moment which is set up on the pack level. It is accessible in your components by using this.$moment or as a Vue filter. For more information, look here: https://www.npmjs.com/package/vue-moment'
      }]
    }],

    'vue/no-v-html': 0,
    'vue/no-template-shadow': 0,

    // we can define our own global throttle method, but I'm not sure what the benefit of that is
    // https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_throttle
    'you-dont-need-lodash-underscore/throttle': 0,

    // disabling because this incorrectly breaks on optional chaining
    // we can re-enable it once this issue is opened: https://github.com/eslint/eslint/issues/13093
    camelcase: 0,
    // however, this package fixes it in the meantime:
    // https://github.com/babel/eslint-plugin-babel
    'babel/camelcase': ['error', { properties: 'never', ignoreDestructuring: true }]
  }
}
