import TopicPage from '../components/TopicPage';
import { TOPIC_PAGES, PHOTOS } from '../data/content';

export default function MotherhoodOtherhood() {
  return (
    <TopicPage
      topic={TOPIC_PAGES.motherhood}
      photo={PHOTOS.topicMotherhood}
      accent="magenta"
    />
  );
}
