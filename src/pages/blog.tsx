import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { MemoriesView } from 'src/sections/blog/view/blog-view';

;

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Memories - ${CONFIG.appName}`}</title>

      <MemoriesView />
    </>
  );
}
