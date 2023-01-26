const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const hirukoLog = (text, color) => {
	return !color ? chalk.cyan('[Delxa] ') + chalk.yellow(text) : chalk.cyan('[Delxa] ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  hirukoLog
}