import TopicPage from '../components/TopicPage';
import { TOPIC_PAGES, STOCK_PHOTOS } from '../data/content';

export default function HealingWellness() {
  return (
    <TopicPage
      topic={TOPIC_PAGES.healing}
      photo={STOCK_PHOTOS.reflection}
      accent="magenta"
    />
  );
}
