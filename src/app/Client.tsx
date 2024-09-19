"use client";

import { Button } from "@/components/ui/button";
import { useAPIStore } from "@/store/api-fetch";
import React from "react";

type Props = object & {};

export const Client: React.FC<Props> = () => {
    const [word, setWord] = React.useState<string>("");
    const [wordsToTranslate, setWordsToTranslate] = React.useState<string[]>(
        []
    );
    const { fetchAPI, texts } = useAPIStore();

    async function handleFetchAPI() {
        fetchAPI(wordsToTranslate, "pl");
    }

    function addWordToTranslate(word: string) {
        if (!word) {
            return;
        }

        setWordsToTranslate([...wordsToTranslate, word]);
        setWord("");
    }

    return (
        <div>
            <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                className="text-black p-0.5"
            />
            <Button onClick={() => addWordToTranslate(word)}>Add Word</Button>

            <div className="my-8">
                {wordsToTranslate.length > 0 && (
                    <>
                        <span>Words to translate: </span>{" "}
                        {wordsToTranslate.join(", ")}
                    </>
                )}
            </div>

            <Button onClick={handleFetchAPI}>Fetch API</Button>

            <div className="my-8">
                {texts.length > 0 && (
                    <>
                        <span>Translated words: </span> {texts.join(", ")}
                    </>
                )}
            </div>
        </div>
    );
};
