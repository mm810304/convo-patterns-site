const path = require('path');
const { title } = require('process');

async function turnLessonsIntoPages({ graphql, actions }) {
  const lessonTemplate = path.resolve('./src/templates/Lesson.js');

  const { data } = await graphql(`
    query {
      lessons: allSanityConvoPatterns {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.lessons.nodes.forEach((lesson) => {
    actions.createPage({
      path: `/${lesson.slug.current}`,
      component: lessonTemplate,
      context: {
        slug: lesson.slug.current
      }
    });
  });
};

exports.createPages = async (params) => {
  await turnLessonsIntoPages(params);
};