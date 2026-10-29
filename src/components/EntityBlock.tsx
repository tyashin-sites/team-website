import { ENTITIES, REGION_ORDER } from '@/config/site';

/** PUBLISH-KIT K1: who we are. */
export function EntityBlock() {
  return (
    <>
      <p>
        Aapastech is run by three companies in the same group. Which one you deal with depends on where you are. For a business account, that is the country of the business&apos;s billing address.
      </p>
      <ul>
        {REGION_ORDER.map((r) => {
          const e = ENTITIES[r];
          return (
            <li key={r}>
              <strong>{e.regionLabel}:</strong> {e.name} ({[...e.ids, ...e.address].join('; ')}). It is {e.dataRole}.
            </li>
          );
        })}
      </ul>
      <p>
        The three companies share engineering, hosting and support, and each processes personal data for the others under a written intra-group agreement. Here, &quot;Aapastech&quot;, &quot;we&quot; and &quot;us&quot; mean whichever of them you deal with.
      </p>
    </>
  );
}
