const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Convo Patterns',
    description: 'Learn key English sentence patterns to speak and understand English fluently.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        token: process.env.SANITY_TOKEN
      }
    },
  ],
}
