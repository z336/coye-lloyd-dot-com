import { MdArticle } from 'react-icons/md';

export default {
  name: 'post',
  icon: MdArticle,
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the post.',
      validation: (Rule) => Rule.required().error(`Add a title.`),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The web address for this post.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error(`Add a slug.`),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      description: 'A short preview of the post.',
      options: {
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error(`Add an excerpt`),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required().error(`Add a publish date`),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};
