import type {INavigationMenu} from "@kahi-ui/docs-kit/shared";

import type {IContent} from "./content";

export interface IRouteError {
    code: string;
}

export interface IRouteSuccess {
    // TODO: `JSONValue` doesn't like my purely JSON data?
    data: any;
}

export interface IAsideGet extends IRouteSuccess {
    data: INavigationMenu[];
}

export interface IContentGet extends IRouteSuccess {
    data: IContent;
}
