import * as preact from 'preact';

import { Link as StaticLink, RoutableProps, RouterOnChangeArgs } from '..';

export class Match extends preact.Component<RoutableProps, {}> {
    render(): preact.VNode;
}

export interface LinkProps extends preact.JSX.HTMLAttributes {
    activeClassName?: string;
    children?: preact.ComponentChildren;
}

export function Link(props: LinkProps): preact.VNode;

export function useRouter<RouteParams extends Record<string, string | undefined> | null = Record<string, string | undefined> | null>(): [
    RouterOnChangeArgs<RouteParams>,
    (urlOrOptions: string | { url: string; replace?: boolean }, replace?: boolean) => boolean,
];

export default Match;