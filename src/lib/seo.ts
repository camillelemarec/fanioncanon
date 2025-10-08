export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fanioncanon.com'

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}

export const DEFAULT_DESCRIPTION =
  'Fanion Canon crée des fanions décoratifs inspirés des ports et régions françaises. Une marque au style marin, branché et élégant, fabriquée avec passion.'


