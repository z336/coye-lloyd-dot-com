import { RiQuillPenLine } from 'react-icons/ri';

export default {
  name: 'page',
  icon: RiQuillPenLine,
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the page.',
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'mainImage',
      options: { hotspot: true },
      description: 'The image we want to show on this page.',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'The content we show on this page.',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
