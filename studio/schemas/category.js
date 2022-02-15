import { MdOutlineTag } from 'react-icons/md';

export default {
  name: 'category',
  icon: MdOutlineTag,
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
