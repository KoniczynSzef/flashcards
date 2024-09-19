// * API response type

export type APIResponse = {
    code: number;
    texts: string | string[];
    tl: string; // Target language
};

export type APIStore = {
    code: number;
    texts: string[];
    tl: string;

    fetchAPI: (texts: string[], tl: string) => void;
};
