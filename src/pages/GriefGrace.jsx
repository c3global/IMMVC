import TopicPage from '../components/TopicPage';
import { TOPIC_PAGES, PHOTOS } from '../data/content';

export default function GriefGrace() {
  return (
    <TopicPage
      topic={TOPIC_PAGES.grief}
      photo={PHOTOS.topicGrief}
      accent="teal"
    />
  );
}
