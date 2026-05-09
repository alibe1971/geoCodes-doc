// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const packageJson = require('./package.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GeoCodes',
  favicon: 'sysImg/Logo/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alibe', // Usually your GitHub org/user name.
  projectName: 'geocodes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: [
        'en',
        'it',
    ],
    localeConfigs: {
      en: {
        label: '🇬🇧 English',
        htmlLang: 'en-GB',
        direction: 'ltr',
      },
      it: {
        label: '🇮🇹 Italiano',
        htmlLang: 'it-IT',
        direction: 'ltr',
      },
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarCollapsible: true,
          sidebarPath: './sidebars.js',
          includeCurrentVersion: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: [
              './src/plugins/fontawesome/css/all.css',
              './src/css/custom.css',
              './src/css/customstyle.css',
              './src/css/sidebarIcons.css',
          ],
        },
      }),
    ],
  ],

  scripts: [
    {
      src: '/jquery/jquery-3.7.1.min.js',
      async: false,
    }
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docData',
        sidebarCollapsible: true,
        routeBasePath: '/data',
        versions: {
          '1.0.0': {
            label: "Data Package 1.0.0",
            badge: true,
            banner: "none",
            className: "php"
          },
        },
        includeCurrentVersion: false,
        breadcrumbs: true,
      }
    ],
    [
        '@docusaurus/plugin-content-docs',
      {
        id: 'docPhp',
        sidebarCollapsible: true,
        routeBasePath: '/php',
        versions: {
          '0.1.0': {
            label: "0.1.0 for Php",
            badge: true,
            banner: "none",
            // className: ""
          },
          '0.0.0': {
            label: "0.0.0 for Php",
            badge: true,
            banner: "none",
            // className: ""
          },
        },
        includeCurrentVersion: false,
        breadcrumbs: true,
      }
    ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'docNode',
    //     sidebarCollapsible: true,
    //     routeBasePath: '/node',
    //     versions: {
    //       '1.1.0': {
    //         label: "1.1.0 for Node",
    //         badge: true,
    //         banner: "none",
    //         // className: ""
    //       },
    //       '1.0.0': {
    //         label: "1.0.0 for Node",
    //         badge: true,
    //         banner: "none",
    //         // className: ""
    //       },
    //     },
    //     includeCurrentVersion: false,
    //     breadcrumbs: true,
    //   }
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'docGo',
    //     sidebarCollapsible: true,
    //     routeBasePath: '/go',
    //     versions: {
    //       '2.1.0': {
    //         label: "2.1.0 for Go",
    //         badge: true,
    //         banner: "none",
    //         // className: ""
    //       },
    //       '2.0.0': {
    //         label: "2.0.0 for Go",
    //         badge: true,
    //         banner: "none",
    //         // className: ""
    //       },
    //     },
    //     includeCurrentVersion: false,
    //     breadcrumbs: true,
    //   }
    // ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card [TODO]
      image: 'img/geocodes-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: 'GeoCodes Project',
        logo: {
          alt: 'Alibe.ie',
          src: 'sysImg/Logo/Logo.png',
        },
        hideOnScroll: true,
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          /** VERSIONED PACKAGES */
           {
             type: 'docsVersionDropdown',
             sidebarId: 'dataSidebar',
             dropdownActiveClassDisabled: false,
             position: 'left',
             docsPluginId: 'docData'
          },
          // {
          //    type: 'docsVersionDropdown',
          //    sidebarId: 'phpSidebar',
          //    dropdownActiveClassDisabled: false,
          //    position: 'left',
          //    docsPluginId: 'docPhp'
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   sidebarId: 'nodeSidebar',
          //   dropdownActiveClassDisabled: false,
          //   position: 'left',
          //   docsPluginId: 'docNode'
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   sidebarId: 'goSidebar',
          //   dropdownActiveClassDisabled: false,
          //   position: 'left',
          //   docsPluginId: 'docGo'
          // },

          /** LANGUAGE */
          {
            type: 'localeDropdown',
            position: 'right',
          },
          /** External Link */
          {
            type: 'dropdown',
            label: 'External Links',
            position: 'right',
            items: [
              {
                type: 'html',
                className: 'topBarDropDownCategory',
                value: ' <img src="/sysImg/Logo/Logo.png">  Alibe',
              },
              {
                label: 'Website',
                to: 'https://alibe.ie',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/alibe1971'
              },
              {
                label: 'Linkedin',
                to: 'https://www.linkedin.com/in/alibe'
              },
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/alibe1971'
              },
              {
                type: 'html',
                value: '<hr class="dropDownSeparator" />',
              },
              {
                type: 'html',
                className: 'topBarDropDownCategory',
                value: '<i class="badgeIcons fa fa-github" aria-hidden="true"></i> GitHub',
              },
              {
                label: 'Data Package',
                to: 'https://github.com/alibe1971/data-geoCodes',
              },
              {
                label: 'Package for Php',
                to: 'https://github.com/alibe1971/php-geoCodes',
              },
              {
                label: 'Package for Node',
                to: 'https://github.com/alibe1971/node-geoCodes',
              },
              {
                label: 'Package for Go',
                to: 'https://github.com/alibe1971/go-geoCodes',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyleft (ɔ) ${new Date().getFullYear()} <b>${packageJson.commonName}</b> by Andrea Liberati. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
            'php', 'phpdoc', 'php-extras',
            'bash',
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

export default config;
