interface IMoreLog {
	/**
	 * Outputs an empty line(s) to the console.
	 *
	 * @param    count    Number of empty lines.
	 *
	 * @example
	 * logger.ln();  // produces one empty line
	 * logger.ln(2); // produces two empty lines
	 */
	ln(count?: number): IMoreLog,

	/**
	 * Just an alias to `console.log()` made to keep things consistent while using this module.
	 * All arguments passed as is to `console.log()`.
	 *
	 * @param    args    Arguments to pass into `console.log()`
	 *
	 * @example
	 * // Equals to `console.log('Something')`
	 * logger.log('Something');
	 *
	 * // Equals to `console.log('Foo %s', 'bar')`
	 * logger.log('Foo %s', 'bar');
	 */
	log(...args: any[]): IMoreLog,

	/**
	 * Outputs a simple message to the console.
	 *
	 * @param    message          A JavaScript string containing zero or more substitution strings.
	 * @param    substitutions    JavaScript objects with which to replace substitution strings within message.
	 *
	 * @example
	 * log.message('Just a styled message without emotional color');
	 * log.message('Foo %s', 'bar');
	 */
	message(message: any, ...substitutions: any[]): IMoreLog,

	/**
	 * Outputs an info message to the console.
	 *
	 * @param    message          A JavaScript string containing zero or more substitution strings.
	 * @param    substitutions    JavaScript objects with which to replace substitution strings within message.
	 *
	 * @example
	 * log.info('Be careful using this, it will be deprecated in the next major version.');
	 */
	info(message: any, ...substitutions: any[]): IMoreLog,

	/**
	 * Outputs a success message to the console.
	 *
	 * @param    message          A JavaScript string containing zero or more substitution strings.
	 * @param    substitutions    JavaScript objects with which to replace substitution strings within message.
	 *
	 * @example
	 * log.success('Packages successfully installed');
	 */
	success(message: any, ...substitutions: any[]): IMoreLog,

	/**
	 * Outputs an error message to the console.
	 *
	 * @param    message          A JavaScript string containing zero or more substitution strings.
	 * @param    substitutions    JavaScript objects with which to replace substitution strings within message.
	 *
	 * @example
	 * log.error('This method was deprecated in %s', '2.1.4');
	 */
	error(message: any, ...substitutions: any[]): IMoreLog,

	block: {
		/**
		 * Outputs a message with block-style badge to the console.
		 *
		 * @param    message          A JavaScript string containing zero or more substitution strings.
		 * @param    substitutions    JavaScript objects with which to replace substitution strings within message.
		 *
		 * @example
		 * log.block.message('Just a block-styled message without emotional color');
		 */
		message(message: any, ...substitutions: any[]): IMoreLog,

		/**
		* Outputs an info message with block-style badge to the console.
		*
		* @param    message          A JavaScript string containing zero or more substitution strings.
		* @param    substitutions    JavaScript objects with which to replace substitution strings within message.
		*
		* @example
		* log.block.info('Be careful using this, it will be deprecated in the next major version.');
		*/
		info(message: any, ...substitutions: any[]): IMoreLog,

		/**
		* Outputs a success message with block-style badge to the console.
		*
		* @param    message          A JavaScript string containing zero or more substitution strings.
		* @param    substitutions    JavaScript objects with which to replace substitution strings within message.
		*
		* @example
		* log.block.success('Packages successfully installed');
		*/
		success(message: any, ...substitutions: any[]): IMoreLog,

		/**
		* Outputs an error message with block-style badge to the console.
		*
		* @param    message          A JavaScript string containing zero or more substitution strings.
		* @param    substitutions    JavaScript objects with which to replace substitution strings within message.
		*
		* @example
		* log.block.error('This method was deprecated in %s', '2.1.4');
		*/
		error(message: any, ...substitutions: any[]): IMoreLog,
	}
}

declare const MoreLog: IMoreLog;

export = MoreLog;
