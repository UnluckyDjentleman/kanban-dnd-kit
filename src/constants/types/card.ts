import { CardStatus } from "../enums/cardStatus"

interface Card{
    id:string,
    title:string,
    deadline: Date,
    status: CardStatus,
    color: string,
    board_id:number
}

export type {Card}