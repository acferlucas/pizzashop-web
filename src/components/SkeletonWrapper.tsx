import { ComponentProps, PropsWithChildren } from 'react'

import { Skeleton } from './ui/skeleton'

type SkeletonWrapperProps = ComponentProps<typeof Skeleton> & {
  isLoading: boolean
}

export function SkeletonWrapper({
  children,
  isLoading,
  ...rest
}: PropsWithChildren<SkeletonWrapperProps>) {
  if (isLoading) {
    return <Skeleton {...rest} />
  }

  return <>{children}</>
}
