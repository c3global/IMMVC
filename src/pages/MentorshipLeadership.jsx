import TopicPage from '../components/TopicPage';
import { TOPIC_PAGES, PHOTOS } from '../data/content';

export default function MentorshipLeadership() {
  return (
    <TopicPage
      topic={TOPIC_PAGES.mentorship}
      photo={PHOTOS.topicMentorship}
      accent="teal"
    />
  );
}
