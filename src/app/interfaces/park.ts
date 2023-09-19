export interface ParkResponse {
    limit: string,
    start: string,
    total: string
    data: Park[]
}

export interface Park {
    id: string,
    url: string,
    fullName: string,
    parkCode: string,
    description: string,
    images: Image[]
}

export interface Image {
    title: string
    caption: string,
    url: string
}
