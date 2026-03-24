import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "image",
            name: "authorImage",
            label: "Author Image",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "object",
            name: "content",
            label: "Content",
            list: true,
            fields: [
              {
                type: "string",
                name: "type",
                label: "Block Type",
                options: [
                  { label: "Paragraph", value: "paragraph" },
                  { label: "Emphasis", value: "emphasis" },
                  { label: "Heading", value: "heading" },
                  { label: "Quote", value: "quote" },
                ],
                required: true,
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "object",
                name: "meta",
                label: "Meta",
                fields: [
                  {
                    type: "number",
                    name: "level",
                    label: "Heading Level",
                  },
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/insights/${document._sys.filename}`,
        },
      },
    ],
  },
});
