import { component$, /* useStyles$ */ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// import styles from '../../styles.css?inline';

export default component$(() => {
  //  useStylesScoped$(styles);
  return <span>client</span>
});

export const head: DocumentHead = {
  title: 'List Client',
  meta: [
    {
      name: 'description',
      content: 'Esta es mi primera aplicación en qwik',
    },
  ],
};
