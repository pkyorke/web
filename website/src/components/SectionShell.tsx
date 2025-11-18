import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type ElementTag = keyof HTMLElementTagNameMap;

interface SectionShellProps {
  className?: string;
  as?: ElementTag;
}

const SectionShell = ({ children, className, as: Tag = 'section' }: PropsWithChildren<SectionShellProps>) => (
  <Tag className={clsx('relative w-full py-12', className)}>{children}</Tag>
);

export default SectionShell;
