import TopicPage from '../components/TopicPage';
import { TOPIC_PAGES, STOCK_PHOTOS } from '../data/content';

export default function GriefGrace() {
  return (
    <TopicPage
      topic={TOPIC_PAGES.grief}
      photo={STOCK_PHOTOS.prayer}
      accent="teal"
    />
  );
}
