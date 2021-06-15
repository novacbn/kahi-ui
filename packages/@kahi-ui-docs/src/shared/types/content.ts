import type {IArticle, IArticleMeta} from "@kahi-ui/docs-kit/shared";

export interface IContent extends IArticle {
    meta: IContentMeta;
}

export interface IContentMeta extends IArticleMeta {
    btime: number;

    href: string;

    identifier: string;

    mtime: number;
}
