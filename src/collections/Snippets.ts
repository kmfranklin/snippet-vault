import { CollectionConfig } from 'payload'

export const Snippets: CollectionConfig = {
  slug: 'snippets',
  labels: {
    singular: 'Snippet',
    plural: 'Snippets',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'tags'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        'Laravel',
        'Blade',
        'Tailwind',
        'Alpine',
        'Git',
        'Terminal',
        'Regex',
        'UI Pattern',
        'React',
        'Other',
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'code',
      type: 'code',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'relatedSnippets',
      type: 'relationship',
      relationTo: 'snippets',
      hasMany: true,
    },
    {
      name: 'notes',
      type: 'richText',
      required: false,
    },
  ],
}
