import type { Toc } from '@nuxt/content';

export interface IArticleToc extends Toc {}

export interface IArticleProps {
  toc?: IArticleToc;
}
