import {
    Table,
    TableBody,
    // TableCaption, // Intentionally removed by user
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils"; // Assuming getSubjectColor is defined
import Link from "next/link";
import Image from "next/image";

// Assuming Companion type is defined (e.g., in the same file or imported)
export interface Companion {
    id: string;
    subject: string; // e.g., "maths", "science"
    name: string;    // e.g., "Neura the Brainy Explorer"
    topic: string;   // e.g., "Neural Network of the Brain"
    duration: number; // e.g., 45 (minutes)
    // color: string; // This field from Companion type is not directly used, getSubjectColor is used instead
}

interface CompanionsListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
    return (
        <article className={cn('companion-list', classNames)}> {/* Or 'companions-list' depending on your CSS */}
            <h2 className="font-bold text-3xl mb-4">{title}</h2> {/* Added mb-4 for spacing, optional */}

            {companions && companions.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-lg w-2/3">Lessons</TableHead>
                            <TableHead className="text-lg">Subject</TableHead>
                            <TableHead className="text-lg text-right">Duration</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {companions.map(({ id, subject, name, topic, duration }) => ( // Removed redundant ?. from companions?.map
                            <TableRow key={id}>
                                <TableCell>
                                    <Link href={`/companions/${id}`}>
                                        <div className="flex items-center gap-2">
                                            <div 
                                                className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" 
                                                style={{ backgroundColor: getSubjectColor(subject) }}
                                            >
                                                <Image
                                                    src={`/icons/${subject}.svg`} // This is correct
                                                    alt={`${subject} icon`} // Slightly more descriptive alt
                                                    width={35}
                                                    height={35} />
                                            </div>
                                            <div className="flex flex-col gap-1"> {/* Reduced gap slightly if needed */}
                                                <p className="font-bold text-xl md:text-2xl"> {/* Adjusted text size for responsiveness */}
                                                    {name}
                                                </p>
                                                <p className="text-base md:text-lg text-muted-foreground"> {/* Adjusted text size & color */}
                                                    {topic}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {/* THIS IS THE MODIFIED SECTION FOR THE TEXT BADGE */}
                                    <div 
                                        className="subject-badge w-fit max-md:hidden py-1 px-2 rounded text-sm font-medium text-gray-700" 
                                        style={{backgroundColor: getSubjectColor(subject)}}
                                    > 
                                        {subject.charAt(0).toUpperCase() + subject.slice(1)} {/* Capitalized subject */}
                                    </div>
                                    {/* This is the part for smaller screens, unchanged by this suggestion */}
                                    <div 
                                        className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" 
                                        style={{ backgroundColor: getSubjectColor(subject) }}
                                    >
                                        <Image
                                            src={`/icons/${subject}.svg`} 
                                            alt={`${subject} icon`} 
                                            width={18}
                                            height={18}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 w-full justify-end">
                                        <p className="text-xl md:text-2xl"> 
                                            {duration}{' '}
                                            <span className="max-md:hidden text-base md:text-lg">mins</span> 
                                        </p>
                                        <Image src="/icons/clock.svg" alt="minutes" width={14} height={14} className="md:hidden" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <p className="mt-4 text-center text-gray-500">
                    No {title.toLowerCase()} to display.
                </p>
            )}
        </article>
    )
}

export default CompanionsList;