// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/plandev-docs',
  favicon: 'img/favicon-light.svg',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'NASA-AMMOS',
  projectName: 'plandev-docs',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: 'https://github.com/NASA-AMMOS/plandev-docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  tagline: 'Open-source planning, scheduling, and sequencing for space missions',
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'description',
          content:
            'PlanDev (formerly Aerie) - Open-source planning, scheduling, and sequencing software for space missions. Developed by NASA AMMOS.',
        },
        {
          name: 'keywords',
          content: 'mission planning, spacecraft sequencing, aerie, plandev, NASA, AMMOS, space missions, scheduling',
        },
        { name: 'algolia-site-verification', content: '614A37BC4AD17B99' },
      ],
      algolia: {
        appId: 'RQ6CI6281X',
        apiKey: '6e89ccaa342a491222b78e98d037e44f',
        indexName: 'PlanDev Docs',
        replaceSearchResultPathname: isDev ? { from: /^\/docs\/next/g, to: '/docs' } : undefined,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        items: [
          // Left.
          {
            docId: 'introduction',
            label: 'Docs',
            position: 'left',
            type: 'doc',
          },
          {
            label: 'API',
            position: 'left',
            sidebarId: 'api',
            type: 'docSidebar',
          },
          {
            label: 'Upgrade Guides',
            position: 'left',
            sidebarId: 'upgradeGuides',
            type: 'docSidebar',
          },
          // Right.
          // TODO: Uncomment to enable version dropdown.
          // {
          //   dropdownActiveClassDisabled: true,
          //   dropdownItemsAfter: [
          //     {
          //       type: 'html',
          //       value: '<hr class="dropdown-separator">',
          //     },
          //     {
          //       type: 'html',
          //       className: 'dropdown-archived-versions',
          //       value: '<b>Archived versions</b>',
          //     },
          //     {
          //       href: 'https://nasa-ammos.github.io/aerie-docs/1.0.0',
          //       label: '1.0.0',
          //     },
          //   ],
          //   position: 'right',
          //   type: 'docsVersionDropdown',
          // },
          {
            'aria-label': 'GitHub repository',
            className: 'header-github-link',
            href: 'https://github.com/NASA-AMMOS/aerie',
            position: 'right',
          },
        ],
        logo: {
          alt: 'PlanDev Documentation',
          src: 'img/plandev-wordmark-light.svg',
          srcDark: 'img/plandev-wordmark-dark.svg',
          width: 90,
        },
      },
      prism: {
        additionalLanguages: ['graphql', 'java', 'kotlin'],
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(50, 50, 50, 0.9)',
        },
      },
    }),
  plugins: ['docusaurus-plugin-image-zoom'],
  themes: ['@docusaurus/theme-mermaid'],
  title: 'PlanDev Documentation',
  trailingSlash: true,
  url: 'https://nasa-ammos.github.io/',
};

module.exports = config;
