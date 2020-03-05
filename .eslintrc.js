module.exports = {
    root: true,
    env: {
        node: true,
    },
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
    },
    extends: [
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'object-curly-newline': 'off',
        'indent': 'off',
        quotes: [2, 'double'],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'max-len': ['error', 120],
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'no-useless-constructor': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/interface-name-prefix': [1, { "prefixWithI": "always" }]
    },
    settings: {
        'import/resolver': {
            node: {
                alias: {
                    '@': './src',
                },
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
