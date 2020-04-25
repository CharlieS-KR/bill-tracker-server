export enum PaymentMethods {
    AUTO_WITHDRAWAL = 'AUTO_WITHDRAWAL',
    ONLINE = 'ONLINE',
    SET_ASIDE = 'SET_ASIDE',
    TRANSFER = 'TRANSFER'
}

export enum PaymentCategories {
    ENTERTAINMENT = 'ENTERTAINMENT',
    HOUSING = 'HOUSING',
    GROCERIES = 'GROCERIES',
    EATING_OUT = 'EATING_OUT',
    GAMING = 'GAMING',
    GOING_OUT = 'GOING_OUT',
    EVENTS = 'EVENTS',
    TRAVEL = 'TRAVEL',
    HEALTH = 'HEALTH',
    GIFTS = 'GIFTS',
    CLOTHING = 'CLOTHING',
    OTHER = 'OTHER'
}

export interface IBill {
    name: string
    company: string
    dueDate: Date | string
    description?: string
    totalAmount: number
    biWeeklyAmount?: number
    paymentMethod: PaymentMethods
    category?: PaymentCategories 
}