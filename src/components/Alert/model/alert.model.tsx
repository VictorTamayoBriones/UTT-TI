export interface IAlert{
    status: 'visible' | 'hidden',
    type: 'error' | 'success',
    message?: string
}