import { CONFIG } from 'src/config-global';

import GroupDetailsView from 'src/sections/groupDetails/view/group-details-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Group Details - ${CONFIG.appName}`}</title>

      <GroupDetailsView />
    </>
  );
}
