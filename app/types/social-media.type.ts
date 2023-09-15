export interface SocialMedia {
    url: string,
    texto?: JSX.Element,
    icon: Icon[],
    titulo:string,
}

export interface Icon {
    url: string,
    website: string,
}