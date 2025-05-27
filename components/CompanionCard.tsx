import Image from 'next/image';
import Link from 'next/link';

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article
      className="companion-card" // Added example Tailwind classes for card styling
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-center"> {/* Added mb-3 for spacing */}
        <div className="subject-badge "> {/* Example styling for badge */}
          {subject}
        </div>
        <button
          className="companion-bookmark "
          aria-label="Bookmark this companion"
        >
          <Image
            src="/icons/bookmark.svg"
            alt="Bookmark Icon"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className='text-2xl font-bold '>{name}</h2> {/* Removed unnecessary braces, added mb-1 */}
      
      <p className="text-sm ">{topic}</p> {/* Added text-gray-600 and mb-2 */}

      <div className="flex items-center gap-2"> {/* Added mb-4 for spacing before button */}
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm ">{duration} mins</p> {/* Added text-gray-600 */}
      </div>

      <Link href={`/companions/${id}`} className='w-full block'> {/* Corrected href and added 'block' for Link to take full width */}
        <button className='btn-primary w-full justify-center '> {/* Added example padding/rounded for button */}
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;