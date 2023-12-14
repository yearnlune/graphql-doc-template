import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {directiveDescriptor, directiveTag} from "@graphql-markdown/helpers"
import docusaurusLunrSearch from 'docusaurus-lunr-search'


const config: Config = {
  title: 'GraphQL API',
  tagline: 'GraphQL API documentation',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'organizationName', // Usually your GitHub org/user name.
  projectName: 'graphql-doc-template', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    [
      docusaurusLunrSearch,
      {
        languages: ['en', 'ko']
      }
    ],
    [
      "@graphql-markdown/docusaurus",
      {
        schema: [
          "schema" // graphql paths
        ],
        baseURL: '.',
        homepage: 'static/index.md',
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader"
        },
        docOption: {
          pagination: false
        },
        printTypeOptions: {
          deprecated: 'group'
        },
        groupByDirective: {
          directive: "group",
          field: "category",
          fallback: "Common"
        },
        customDirective: {
          "intOrigin": {
            descriptor: (directive, node) =>
              directiveDescriptor(
                directive,
                node,
                "origin: `${value}`",
              ),
            tag: directiveTag,
          },
          "stringOrigin": {
            descriptor: (directive, node) =>
              directiveDescriptor(
                directive,
                node,
                "origin: `${value}`",
              ),
            tag: directiveTag,
          },
          "default": {
            descriptor: (directive, node) =>
              directiveDescriptor(
                directive,
                node,
                "default: `${value}`",
              ),
          },
          // ... optionally specific custom directive options
        },
      }
    ]
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: "/"
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Graphql Doc',
      logo: {
        alt: 'Graphql Doc',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
