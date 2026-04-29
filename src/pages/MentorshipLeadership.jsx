import TopicPage from '../components/TopicPage';
import { TOPIC_PAGES, STOCK_PHOTOS } from '../data/content';

export default function MentorshipLeadership() {
  return (
    <TopicPage
      topic={TOPIC_PAGES.mentorship}
      photo={STOCK_PHOTOS.mentorship}
      accent="teal"
    />
  );
}
