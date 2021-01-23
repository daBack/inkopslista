const WARN = 'warn';
const ERROR = 'error';
const OFF = 'off';

module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
		jest: true
	},
	parser: 'babel-eslint',
	plugins: ['jsdoc', 'react', 'filenames', 'jest', 'import'],
	parserOptions: {
		ecmaVersion: Infinity,
		sourceType: 'module'
	},
	overrides: [
		{
			files: ['*.json'],
			plugins: ['json'],
			extends: ['eslint:recommended', 'plugin:json/recommended', 'plugin:jest/recommended']
		},
		{
			files: ['*.ts', '*.tsx'],
			plugins: ['@typescript-eslint'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/explicit-member-accessibility': [
					ERROR,
					{ overrides: { constructors: 'no-public' } }
				],
				'@typescript-eslint/no-unused-vars': OFF, // TSC is already doing this
				'@typescript-eslint/ban-types': OFF, // TSC is already doing this
				'no-undef': OFF, // TSC is already doing this
				'@typescript-eslint/explicit-module-boundary-types': OFF, // TSC is already doing this
				'@typescript-eslint/consistent-type-assertions': [
					WARN,
					{ assertionStyle: 'angle-bracket' }
				],
				'@typescript-eslint/no-var-requires': OFF,
				'@typescript-eslint/no-explicit-any': ERROR,
				'@typescript-eslint/no-use-before-define': OFF,
				'@typescript-eslint/explicit-function-return-type': [ERROR, { allowExpressions: true }],
				'@typescript-eslint/member-ordering': WARN,
				'jsdoc/no-types': WARN,
				'jsdoc/check-param-names': OFF,
				'jsdoc/require-param-type': OFF,
				'jsdoc/require-returns': OFF,
				'jsdoc/require-param-description': OFF,
				'jsdoc/require-returns-type': OFF,
				'import/named': WARN,
				'import/no-named-as-default': WARN,
				'import/no-extraneous-dependencies': WARN,
				'@typescript-eslint/naming-convention': [
					WARN,
					{
						selector: 'interface',
						format: ['PascalCase'],
						prefix: ['I']
					},
					{
						selector: 'enum',
						format: ['PascalCase'],
						suffix: ['Enum']
					},
					{
						selector: 'typeParameter',
						format: ['PascalCase']
					},
					{
						selector: 'memberLike',
						modifiers: ['private'],
						format: ['camelCase']
					},
					{
						selector: 'class',
						format: ['PascalCase']
					}
				]
			}
		}
	],
	extends: ['eslint:recommended', 'prettier'],
	rules: {
		'no-underscore-dangle': [ERROR, { allowAfterThis: true }],
		'no-debugger': WARN,
		'space-infix-ops': ERROR,
		'no-console': WARN,
		'no-undef': ERROR,
		'wrap-iife': OFF,
		'no-self-assign': ERROR,
		'no-self-compare': ERROR,
		'no-loop-func': WARN,
		'array-callback-return': ERROR,
		'consistent-return': ERROR,
		curly: ERROR,
		'dot-notation': OFF,
		'prefer-const': WARN,
		'no-empty-function': OFF,
		'no-with': ERROR,
		'one-var': [ERROR, 'never'],
		camelcase: [WARN, { properties: 'always', ignoreImports: true }],
		'spaced-comment': [WARN, 'always'],
		'capitalized-comments': [WARN, 'always', { ignorePattern: 'prettier|stylelint' }],
		'no-useless-rename': WARN,
		'jsdoc/check-alignment': WARN,
		'jsdoc/check-examples': OFF,
		'jsdoc/check-indentation': WARN,
		'jsdoc/check-param-names': WARN,
		'jsdoc/check-syntax': WARN,
		'jsdoc/check-tag-names': WARN,
		'jsdoc/check-types': WARN,
		'jsdoc/implements-on-classes': WARN,
		'jsdoc/match-description': WARN,
		'jsdoc/newline-after-description': WARN,
		'jsdoc/no-types': OFF,
		'jsdoc/no-undefined-types': WARN,
		'jsdoc/require-description': OFF,
		'jsdoc/require-description-complete-sentence': WARN,
		'jsdoc/require-example': OFF,
		'jsdoc/require-hyphen-before-param-description': [WARN, 'never'],
		'jsdoc/require-param': WARN,
		'jsdoc/require-param-description': WARN,
		'jsdoc/require-param-name': WARN,
		'jsdoc/require-param-type': WARN,
		'jsdoc/require-returns': WARN,
		'jsdoc/require-returns-check': WARN,
		'jsdoc/require-returns-description': WARN,
		'jsdoc/require-returns-type': WARN,
		'jsdoc/valid-types': WARN,
		'filenames/match-exported': WARN,
		'jest/consistent-test-it': [WARN, { fn: 'it', withinDescribe: 'it' }],
		'jest/valid-title': [
			WARN,
			{
				mustMatch: {
					describe: '^[A-Z][a-zA-Z0-9]+$|^[a-z][a-zA-Z0-9]+\\(\\)$',
					it: '^[A-Z](.+)(?!.)$'
				}
			}
		],
		'jest/prefer-hooks-on-top': WARN,
		'jest/no-duplicate-hooks': WARN,
		'no-useless-constructor': WARN,
		'jsdoc/require-jsdoc': [
			WARN,
			{
				require: {
					ArrowFunctionExpression: false,
					FunctionDeclaration: false,
					FunctionExpression: false,
					ClassDeclaration: true,
					MethodDefinition: true
				}
			}
		],
		'import/no-extraneous-dependencies': WARN,
		'react/jsx-uses-react': ERROR,
		'react/jsx-uses-vars': ERROR
	}
};
