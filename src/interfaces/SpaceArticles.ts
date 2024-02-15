

export interface SpaceArticlesInterface {
    count:    number;
    next:     null;
    previous: null;
    results:  Result[];
}

export interface Result {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     Launch[];
    events:       Event[];
}

export interface Event {
    event_id: number;
    provider: string;
}

export interface Launch {
    launch_id: string;
    provider:  string;
}

