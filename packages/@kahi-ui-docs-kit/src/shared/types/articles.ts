import type {ISnippet} from "./snippets";

export type IArticleProperties = Record<string, IArticleProperty[]>;

export interface IArticle {
    meta: IArticleMeta;

    render: string;
}

export interface IArticleFrontmatter {
    btime?: string;

    mtime?: string;

    properties?: IArticleProperties;

    title?: string;
}

export interface IArticleMeta {
    btime?: number;

    mtime?: number;

    properties?: IArticleProperties;

    sections: IArticleSection[];

    snippets: ISnippet[];

    title: string;
}

export interface IArticleProperty {
    default: string;

    description: string;

    name: string;

    types: string[];
}

export interface IArticleSection {
    identifier: string;

    level: number;

    text: string;
}
