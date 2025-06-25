import { CONFIG } from 'src/config-global';

import CalendarOverview from 'src/sections/product/view/products-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Calendar - ${CONFIG.appName}`}</title>

      <CalendarOverview />
    </>
  );
}
