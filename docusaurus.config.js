import { themes } from 'prism-react-renderer';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

module.exports = async function () {
    return {
        title: 'ROXY',
        tagline: "FB DEVELO4's BLOG",
        url: 'https://roxy.iro.ooo',
        trailingSlash: false,
        customFields: {
            description:
                "FB DEVELO4's BLOG 에 어서오세요!\nFront 와 BackEnd 기술 문서와 간단한 블로깅을 함께하고 있습니다!",
            image: 'img/wallpaper.png',
            debug: false,
        },
        baseUrl: '/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        staticDirectories: ['public', 'static'],
        favicon: 'img/favicon.ico',
        // whatap agent config
        headTags: [
            {
                tagName: 'script',
                attributes: {
                    type: 'text/javascript',
                },
                innerHTML: `
                    window.WhatapBrowserAgent = {
                        config: {
                            projectAccessKey: 'x4te823r4ri9p-x107ca46a3pivo-z16j3crpakvotc',
                            pcode: 30152,
                            sampleRate: 100,
                        },
                    };
            `,
            },
            {
                tagName: 'script',
                attributes: {
                    src: 'https://repo.whatap-browser-agent.io/rum/prod/v1/whatap-browser-agent.js',
                },
            },
        ],

        // GitHub pages deployment config.
        // If you aren't using GitHub pages, you don't need these.
        organizationName: 'https://github.com/rainbow-flavor',
        projectName: 'roxy blog', // Usually your repo name.

        // Even if you don't use internalization, you can use this field to set useful
        // metadata like html lang.
        i18n: {
            defaultLocale: 'ko',
            locales: ['ko'],
        },
        markdown: { mermaid: true },
        themes: ['@docusaurus/theme-mermaid'],
        plugins: [
            [
                '@docusaurus/plugin-content-blog',
                {
                    /**
                     * 멀티 인스턴스 플러그인 적용 시 필수값으로 설정해야 합니다.
                     */
                    id: 'irostub-blog',
                    /**
                     * 사이트에서 블로그 연결 시 사용할 URL 경로를 설정합니다.
                     * *절대* URL 끝에 슬래시를 붙이지 마세요.
                     */
                    routeBasePath: 'irostub',
                    showReadingTime: true,
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: '포스트 목록',
                    /**
                     * 사이트 디렉터리 기준으로 상대 경로를 지정합니다.
                     */
                    blogTitle: 'Irostub 의 블로그',
                    blogDescription:
                        'Irostub 블로그에 어서오세요! 잡글, 연간회고 등 다양한 포스트가 기다리고있어요!',
                    path: './irostub',
                    blogPostComponent: require.resolve(
                        './src/theme/BlogPostPage'
                    ),
                    feedOptions: {
                        type: 'all',
                        copyright:
                            'Copyright © 2023 Rainbow-Flavor, written by Hank & Irostub.',
                        language: 'kr',
                    },
                },
            ],
            [
                '@docusaurus/plugin-content-blog',
                {
                    /**
                     * 멀티 인스턴스 플러그인 적용 시 필수값으로 설정해야 합니다.
                     */
                    id: 'hank-blog',
                    /**
                     * 사이트에서 블로그 연결 시 사용할 URL 경로를 설정합니다.
                     * *절대* URL 끝에 슬래시를 붙이지 마세요.
                     */
                    routeBasePath: 'hank',
                    showReadingTime: true,
                    /**
                     * 사이트 디렉터리 기준으로 상대 경로를 지정합니다.
                     */
                    blogTitle: 'Hank 의 블로그',
                    path: './hank',
                    blogPostComponent: require.resolve(
                        './src/theme/BlogPostPage'
                    ),
                    feedOptions: {
                        type: 'all',
                        copyright:
                            'Copyright © 2023 Rainbow-Flavor, written by Hank & Irostub.',
                        language: 'kr',
                    },
                },
            ],
            [
                '@docusaurus/plugin-content-docs',
                {
                    id: 'front',
                    path: 'front',
                    routeBasePath: 'front',
                    sidebarPath: require.resolve('./sidebars.js'),
                    docItemComponent: require.resolve('./src/theme/DocItem'),
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
            ],
            [
                '@docusaurus/plugin-content-docs',
                {
                    id: 'back',
                    path: 'back',
                    routeBasePath: 'back',
                    sidebarPath: require.resolve('./sidebars.js'),
                    docItemComponent: require.resolve('./src/theme/DocItem'),
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
            ],
            [
                '@docusaurus/plugin-content-docs',
                {
                    id: 'infra',
                    path: 'infra',
                    routeBasePath: 'infra',
                    sidebarPath: require.resolve('./sidebars.js'),
                    docItemComponent: require.resolve('./src/theme/DocItem'),
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
            ],
            [
                '@docusaurus/plugin-content-docs',
                {
                    id: 'tips',
                    path: 'tips',
                    routeBasePath: 'tips',
                    sidebarPath: require.resolve('./sidebars.js'),
                    docItemComponent: require.resolve('./src/theme/DocItem'),
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
            ],
            async function myPlugin(context, options) {
                return {
                    name: 'docusaurus-tailwindcss',
                    configurePostCss(postcssOptions) {
                        // Appends TailwindCSS and AutoPrefixer.
                        postcssOptions.plugins.push(tailwindcss);
                        postcssOptions.plugins.push(autoprefixer);
                        return postcssOptions;
                    },
                };
            },
        ],

        presets: [
            [
                '@docusaurus/preset-classic',
                {
                    gtag: { trackingID: 'G-FT5YDE3QE7', anonymizeIP: true },
                    theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                    // preset-classic 을 사용할 때, 최소 하나의 docs 는 정의되어있어야한다.
                    docs: {
                        path: 'docs',
                        routeBasePath: 'docs',
                        lastVersion: 'current',
                        onlyIncludeVersions: ['current'],
                        sidebarPath: require.resolve('./sidebars.js'),
                    },
                    blog: false,
                },
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            {
                algolia: {
                    // 알골리아에서 제공한 appId를 사용하세요.
                    appId: 'STBZ15YGTR',

                    // 공개 API 키: 커밋해도 문제가 생기지 않습니다.
                    apiKey: '8fc5bdaa7a1b2e52c1c00182a11a7ba7',

                    indexName: 'roxy-iro',

                    // 옵션: 아래 문서를 참고
                    contextualSearch: true,

                    // 옵션: 알골리아 검색 파라미터
                    searchParameters: {},

                    // 옵션: 기본적으로 활성화된 검색 페이지 경로(비활성화하려면 `false`로 설정)
                    searchPagePath: 'search',

                    //... 다른 알골리아 파라미터
                },
                announcementBar: {
                    id: 'announcementBar-2',
                    content:
                        '⚠️ Roxy 블로그는 단장중! 지금 보시는 블로그로 이전 게시물을 옮겨오는 중입니다.',
                    isCloseable: true,
                },
                image: 'img/wallpaper.png',
                metadata: [
                    { name: 'name', content: 'ROXY' },
                    { name: 'application-name', content: "FB DEVELO4's BLOG" },
                    {
                        name: 'description',
                        content:
                            "FB DEVELO4's BLOG 에 어서오세요! Front 와 BackEnd 기술 문서와 간단한 블로깅을 함께하고 있습니다!",
                    },
                    { name: 'author', content: 'Irostub & Hank' },
                    {
                        name: 'keywords',
                        content: 'FrontEnd, BackEnd, FE, BE, Document, Blog',
                    },
                    { property: 'og:image', content: 'img/wallpaper.png' },

                    {
                        name: 'naver-site-verification',
                        content: '3ee8592974e5e0d84f4c00106dfd59878efeb6cc',
                    },
                ],
                colorMode: {
                    defaultMode: 'dark',
                    disableSwitch: false,
                    respectPrefersColorScheme: false,
                },
                navbar: {
                    title: 'ROXY',
                    hideOnScroll: true,
                    logo: {
                        alt: 'My Site Logo',
                        src: 'img/logo_light.png',
                        srcDark: 'img/logo_dark.png',
                    },
                    items: [
                        {
                            type: 'docSidebar',
                            sidebarId: 'front',
                            label: 'Front',
                            docsPluginId: 'front',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'back',
                            label: 'Back',
                            docsPluginId: 'back',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'infra',
                            label: 'Infra',
                            docsPluginId: 'infra',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'tips',
                            label: 'Tips',
                            docsPluginId: 'tips',
                        },
                        {
                            type: 'dropdown',
                            label: 'Blogs',
                            position: 'left',
                            items: [
                                { to: '/irostub', label: 'Irostub' },
                                { to: '/hank', label: 'Hank' },
                            ],
                        },
                        {
                            href: 'https://github.com/rainbow-flavor/roxy-blog',
                            label: 'GitHub',
                            position: 'right',
                        },
                    ],
                },
                footer: {
                    copyright: `Copyright © ${new Date().getFullYear()} Rainbow-Flavor, written by Hank & Irostub.`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                },
            },
    };
};
