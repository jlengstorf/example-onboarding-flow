module.exports = function () {
  return {
    requiredEnvVars:
      Object.entries(JSON.parse(process.env.REQUIRED_ENV_VARS)) || [],
    siteName: process.env.SITE_NAME || 'my-netlify-site',
  };
};
