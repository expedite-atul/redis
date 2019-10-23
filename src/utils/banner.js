const logger = require('./logger');

/**
 * Displays a RediSolar banner as an into level log message.
 */
const showBanner = () => {
  logger.info(
    `
================================================================================
================================================================================
    `,
  );
};

module.exports = showBanner;
