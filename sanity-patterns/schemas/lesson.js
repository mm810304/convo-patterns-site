export default {
  name: 'convo-patterns',
  title: 'Convo Patterns',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'lesson_number',
      title: 'Lesson Number',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      validation: Rule => Rule.required().max(1)
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'title',
      levelCategory: 'level'
    },
    prepare: ({ title, levelCategory }) => {
      const level = `Level ${levelCategory}`;
      return {
        title: title,
        subtitle: level
      }
    }
  }
}