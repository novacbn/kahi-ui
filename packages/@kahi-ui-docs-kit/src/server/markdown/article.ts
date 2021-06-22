import MarkdownIt from "markdown-it";

import type {
    IArticle,
    IArticleFrontmatter,
    IArticleMeta,
    IArticleSection,
} from "../../shared/types/articles";
import type {ISnippet} from "../../shared/types/snippets";

import type {IFrontmatterOptions} from "./frontmatter";
import {FrontmatterOptions, extract_frontmatter} from "./frontmatter";

import {BlockquoteLevels} from "./plugins/blockquote_levels";
import {ExternalLinkPlugin} from "./plugins/external_link";
import type {ILocalLinkOptions} from "./plugins/local_link";
import {LocalLinkPlugin} from "./plugins/local_link";
import {ScrollablesPlugin} from "./plugins/scrollables";
import {SectionsPlugin} from "./plugins/sections";
import {SnippetsPlugin} from "./plugins/snippets";
import {TitlePlugin} from "./plugins/title";

export interface IArticleOptions {
    frontmatter: IFrontmatterOptions;

    identifier: string;

    links: ILocalLinkOptions;

    meta: IArticleParserMeta;
}

export interface IArticleParserMeta {
    sections: IArticleSection[];

    snippets: ISnippet[];

    title: string;
}

function ArticleOptions(options: Partial<IArticleOptions> = {}): IArticleOptions {
    const {frontmatter = {}, identifier = "na", links = {}, meta = {}} = options;

    const {fence, syntax} = FrontmatterOptions(frontmatter);
    const {extensions = []} = links as Partial<ILocalLinkOptions>;
    const {sections = [], snippets = [], title = "N/A"} = meta as Partial<IArticleParserMeta>;

    return {
        identifier,
        frontmatter: {
            fence,
            syntax,
        },

        links: {
            extensions,
        },

        meta: {
            sections,
            snippets,
            title,
        },
    };
}

function normalize_metadata(
    frontmatter: IArticleFrontmatter,
    meta: IArticleParserMeta
): IArticleMeta {
    const {sections, snippets, title} = meta;
    const {properties} = frontmatter;

    const btime = frontmatter.btime ? Date.parse(frontmatter.btime) : undefined;
    const mtime = frontmatter.mtime ? Date.parse(frontmatter.mtime) : undefined;

    return {
        title: frontmatter.title ?? title,
        btime,
        mtime,
        properties,
        sections,
        snippets,
    };
}

export function render_article(text: string, options: Partial<IArticleOptions> = {}): IArticle {
    const article_options = ArticleOptions(options);
    const {content, frontmatter} = extract_frontmatter(text, article_options.frontmatter);

    const md = new MarkdownIt({
        html: true,
        linkify: true,
    });

    md.use(TitlePlugin, article_options)
        .use(LocalLinkPlugin, article_options)
        .use(ExternalLinkPlugin)
        .use(BlockquoteLevels)
        .use(SectionsPlugin, article_options)
        .use(SnippetsPlugin, article_options)
        .use(ScrollablesPlugin);

    const render = md.render(content);
    const article_meta = normalize_metadata(frontmatter, article_options.meta);

    return {
        meta: article_meta,
        render,
    };
}
