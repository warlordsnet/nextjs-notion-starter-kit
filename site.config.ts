import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '987748811ef9480bad6120117ddfa59d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Kaiziyo: The generic animanga blog.',
  domain: 'kaiziyo.vercel.app',
  author: 'Kaiziyo',

  // open graph metadata (optional)
  description: 'Welcome to Kaiziyo: The generic animanga blog, I write about random generic anime shit.',

  // social usernames (optional)
  twitter: '_kaiziyo_',
  insta: '_kaiziyo_',
  fb : '#',
  github: '#',
  discord: '#',
  telegram: '3',
 // linkedin: '#',
 // newsletter: '#', // optional newsletter URL
 // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
    {
      title: 'About',
       pageId: '2f7c1b62390b4c229ba27755394251fb'
     },
     {
       title: 'Contact',
       pageId: 'd8e0ff285f4a43aa8cbad0765f4e046f'
     }
  ]
})
