export const boolean = (value?: any): boolean => Boolean(!!value);
export const date = (value?: any): Date => new Date(value || 0);
export const number = (value?: any): number => Number(value || 0);
export const string = (value?: any): string => String(value || '');
