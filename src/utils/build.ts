export const build = (path: string): string => {
 return import.meta.env.DEV ? `http://localhost:3008/api${path}` : `api/${path}`
}