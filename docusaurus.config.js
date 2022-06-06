// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MoreCommands Docs',
  tagline: 'Documentation for the MoreCommands Minecraft mod',
  url: 'https://morecommands.ptsmods.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'PlanetTeamSpeakk',
  projectName: 'MoreCommands',
  deploymentBranch: 'docs',
  trailingSlash: false,
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PlanetTeamSpeakk/MoreCommands/tree/docs-sources/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MoreCommands Docs',
        logo: {
          alt: 'MoreCommands Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/PlanetTeamSpeakk/MoreCommands',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://curseforge.com/minecraft/mc-mods/morecommands',
            label: 'CurseForge',
            position: 'right',
          },
          {
            href: 'https://modrinth.com/mod/morecommands',
            label: 'Modrinth',
            position: 'right',
          },
          // { // I will fully implement this later
          //   type: 'localeDropdown',
          //   position: 'right'
          // }
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Commands',
                to: '/category/commands',
              },
              {
                label: 'Gamerules',
                to: '/category/gamerules',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/tzsmCyk',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/PlanetTeamSpeakk/MoreCommands',
              },
              {
                label: 'CurseForge',
                href: 'https://curseforge.com/minecraft/mc-mods/morecommands',
              },
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/mod/morecommands',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PlanetTeamSpeak. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'java', // This should not be required, but the following line doesn't work
        additionalLanguages: ['java'],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      }
    }),
};

module.exports = config;
