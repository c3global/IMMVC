import TopicPage from '../components/TopicPage';
import { TOPIC_PAGES, PHOTOS } from '../data/content';

export default function HealingWellness() {
  return (
    <TopicPage
      topic={TOPIC_PAGES.healing}
      photo={PHOTOS.topicHealing}
      accent="magenta"
    />
  );
}
