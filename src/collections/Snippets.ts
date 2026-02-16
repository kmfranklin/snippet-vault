import { CollectionConfig } from 'payload'

export const Snippets: CollectionConfig = {
  slug: 'snippets',
  labels: {
    singular: 'Snippet',
    plural: 'Snippets',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterRead: [
      async ({ doc }) => {
        // If description is still in richText format (object with root), convert to string
        if (doc.description && typeof doc.description === 'object' && doc.description.root) {
          doc.description = JSON.stringify(doc.description)
        }
        // Same for notes if it exists
        if (doc.notes && typeof doc.notes === 'object' && doc.notes.root) {
          doc.notes = JSON.stringify(doc.notes)
        }
        return doc
      },
    ],
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'tags'],
    description: 'Your personal development library.',
    listSearchableFields: ['title', 'tags.tag'],
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
        { label: 'Laravel', value: 'Laravel' },
        { label: 'Blade', value: 'Blade' },
        { label: 'Tailwind', value: 'Tailwind' },
        { label: 'Alpine', value: 'Alpine' },
        { label: 'Git', value: 'Git' },
        { label: 'Terminal', value: 'Terminal' },
        { label: 'Regex', value: 'Regex' },
        { label: 'UI Pattern', value: 'UI Pattern' },
        { label: 'Other', value: 'Other' },
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
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
