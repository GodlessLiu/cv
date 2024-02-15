import { TypographyH2 } from '@/components/typography';
import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';


export const SectionHandle: FC<PropsWithChildren & { title: string, className?: string }> = ({ children, title, className }) => {
    return (
        <section className={cn('mt-2', className)}>
            <div className='title'>
                <TypographyH2 className='text-xl mb-1'>{title}</TypographyH2>
                <div className='border-gray-500 dark:border-white border-2 mb-1'>
                </div>
            </div>
            <div>
                {children}
            </div>
        </section>
    )


}