export const boolean = (value?: any): boolean => value ? Boolean(value) : false;
export const date = (value?: any): Date => value ? new Date(value) : new Date();
export const number = (value?: any): number => value ? Number(value) : 0;
export const string = (value?: any): string => value ? String(value) : '';
