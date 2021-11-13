import log from './index.js';

log.log(`All messages are fictitious, all coincidences are accidental`);
log.ln();
log.message(`Just a simple message without emotional color`);
log.ln();
log.info(`Build time: 3.14s`);
log.ln();
log.warn(`This feature will be deprecated in the next major release`);
log.ln();
log.success(`Module successfully published`);
log.ln();
log.error(`Oh no, something went wrong`);
log.ln();
log.block.info(`Build time: 3.14s`);
log.block.message(`Just a simple message without emotional color`);
log.block.warn(`This feature will be deprecated in the next major release`);
log.block.success(`Done!`);
log.block.error(`ALARM SOMETHING WENT TOTALLY WRONG`);
