import { cookies, headers } from 'next/headers';
import { ENTITIES, type Currency, type Entity, type RegionId } from '@/config/site';

export const REGION_COOKIE = 'aap_region';

const EU_UK = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU',
  'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB',
]);

export function regionForCountry(country: string | null | undefined): RegionId {
  const c = (country ?? '').toUpperCase();
  if (c === 'IN') return 'in';
  if (EU_UK.has(c)) return 'eu';
  return 'row';
}

export function currencyFor(region: RegionId, country: string): Currency {
  if (region === 'in') return 'INR';
  if (country === 'GB') return 'GBP';
  if (region === 'eu') return 'EUR';
  if (country === 'CA') return 'CAD';
  return 'USD';
}

export interface VisitorRegion {
  region: RegionId;
  country: string;
  currency: Currency;
  entity: Entity;
  /** true when the visitor picked the region themselves. */
  chosen: boolean;
}

/** Reads the visitor's choice (cookie) first, then Cloudflare's country header. */
export async function getVisitorRegion(): Promise<VisitorRegion> {
  let country = '';
  let chosen: RegionId | null = null;
  try {
    const h = await headers();
    country = (h.get('cf-ipcountry') ?? '').toUpperCase();
    const c = await cookies();
    const v = c.get(REGION_COOKIE)?.value;
    if (v === 'in' || v === 'eu' || v === 'row') chosen = v;
  } catch {
    /* outside a request: fall through to the default */
  }
  const region = chosen ?? regionForCountry(country);
  const countryForCurrency = chosen && regionForCountry(country) !== chosen ? '' : country;
  return {
    region,
    country,
    currency: currencyFor(region, countryForCurrency),
    entity: ENTITIES[region],
    chosen: chosen !== null,
  };
}
