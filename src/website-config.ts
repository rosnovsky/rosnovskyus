export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  mastodon?: string;
  /**
   * full url, no username
   */
  pixelfed?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Rosnovsky Park™',
  description: 'From Pacific Northwest to the World',
  coverImage: 'img/blog-cover.jpg',
  logo: '',
  lang: 'en',
  siteUrl: 'https://rosnovsky.us',
  mastodon: 'https://social.rosnovsky.us/rosnovsky',
  pixelfed: 'https://pixelfed.social/rosnovsky',
  showSubscribe: true,
  mailchimpAction:
    'https://rosnovsky.us11.list-manage.com/subscribe/post?u=e4fad23c5627b8f9070cdce9e&amp;id=874dfc643c',
  mailchimpName: 'b_e4fad23c5627b8f9070cdce9e_874dfc643c',
  mailchimpEmailFieldName: 'MERGE0',
};

export default config;
