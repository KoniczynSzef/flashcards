import { APIResponse, APIStore } from "@/types/api/api-response";
import axios from "axios";
import { create } from "zustand";

const API_URL = "";

export const useAPIStore = create<APIStore>((set) => ({
    code: 0,
    texts: [],
    tl: "",

    fetchAPI: async (texts, tl) => {
        const body = {
            texts,
            tl,
        };
        const response = await axios.post<
            typeof body,
            {
                data: APIResponse;
            }
        >(API_URL, body, {
            headers: {
                // TODO: Add API key here
                // TODO: Add API host here
                "Content-Type": "application/json",
            },
        });

        let translatedTexts: string[] = [];

        if (typeof response.data.texts === "string") {
            translatedTexts.push(response.data.texts);

            return set(() => ({
                code: response.data.code,
                texts: translatedTexts,
                tl: response.data.tl,
            }));
        }

        translatedTexts = response.data.texts;

        set(() => ({
            code: response.data.code,
            texts: translatedTexts,
            tl: response.data.tl,
        }));
    },
}));
