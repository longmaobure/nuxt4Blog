export interface IArticleItemProps {
  id: string;
  title: string;
  description: string;
  path: string;
  date: string;
  updated?: string;
  cover?: string;
  tags?: string[];
}
