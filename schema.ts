export type SupportingFact = {
    title: Array<string>,
    sent_id: Array<number>,
}

export type Context = {
    title: Array<string>,
    sentences: Array<Array<string>>,
}

export type TrainData = {
    id: string,
    question: string,
    answer: string,
    type: string,
    level: string,
    supporting_facts: SupportingFact,
    context: Context
}
