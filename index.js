import chalk from 'chalk';
import figures from 'figures';

const MoreLog = {
	ln(count = 1) {
		for (let i = 0; i < count; i++) console.log('');
		return this;
	},

	log(...args) {
		console.log(...args);
		return this;
	},

	message(message, ...substitutions) {
		console.log(`${figures.pointer}  ${chalk.bold(message)}`, ...substitutions);
		return this;
	},

	info(message, ...substitutions) {
		console.log(`${chalk.blue('i')}  ${message}`, ...substitutions);
		return this;
	},

	success(message, ...substitutions) {
		console.log(`${chalk.green(figures.tick)}  ${message}`, ...substitutions);
		return this;
	},

	warn(message, ...substitutions) {
		console.log(`${chalk.yellow(figures.warning)}  ${message}`, ...substitutions);
		return this;
	},

	error(message, ...substitutions) {
		console.log(`${chalk.red(figures.cross)}  ${message}`, ...substitutions);
		return this;
	},

	block: {
		message(message, ...substitutions) {
			console.log(`\r\n${chalk.inverse(' MESSAGE ')} ${message}\r\n`, ...substitutions);
			return this;
		},

		info(message, ...substitutions) {
			console.log(`\r\n${chalk.bgBlue.black(' INFO ')} ${message}\r\n`, ...substitutions);
			return this;
		},

		success(message, ...substitutions) {
			console.log(`\r\n${chalk.bgGreen.black(' SUCCESS ')} ${message}\r\n`, ...substitutions);
			return this;
		},

		warn(message, ...substitutions) {
			console.log(`\r\n${chalk.bgYellow.black(' WARNING ')} ${message}\r\n`, ...substitutions);
			return this;
		},

		error(message, ...substitutions) {
			console.log(`\r\n${chalk.bgRed.black('  ERROR  ')} ${message}\r\n`, ...substitutions);
			return this;
		},
	},
}

export default MoreLog;
