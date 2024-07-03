import GeminiBody from '@/Components/GeminiBody';
import Sidebar from '@/Components/Sidebar';

export default function Home() {
  return (
    <div className="flex contain">
      <Sidebar />
      <GeminiBody />
    </div>
  );
}
