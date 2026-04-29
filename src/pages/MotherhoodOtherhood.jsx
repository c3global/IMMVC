import TopicPage from '../components/TopicPage';
import { TOPIC_PAGES, STOCK_PHOTOS } from '../data/content';

export default function MotherhoodOtherhood() {
  return (
    <TopicPage
      topic={TOPIC_PAGES.motherhood}
      photo={STOCK_PHOTOS.singleMom}
      accent="magenta"
    />
  );
}
