
export type license={
    name ?: string,
    url ?: string
}

export type phonetics = {
    text ?: string,
    audio ?: string,
    sourceUrl ?: string,
    license ?: license
}

export type defination = {
    definition : string,
    synonyms : string[],
    antonyms : string[],
    example ?: string
}

export type meanings ={
    partOfSpeach : string,
    definitions : defination[],
    synonyms : string[],
    antonyms : string[]
}

export type data = {
    word : string,
    phonetic ?: string
    phonetics ?: phonetics[],
    meanings : meanings[],
    license : license,
    sourceUrls : string[]
}[]

export default data