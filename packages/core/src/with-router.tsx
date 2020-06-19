import React, {ComponentType, FC} from "react"
import {withRouter as withNextRouter, NextRouter} from "next/router"
import {WithRouterProps as WithNextRouterProps} from "next/dist/client/with-router"
import {useParams, extractRouterParams} from "./use-params"
import {useRouterQuery} from "./use-router-query"

export interface BlitzRouter extends NextRouter {
  params: ReturnType<typeof extractRouterParams>
}

interface WithRouterProps {
  router: BlitzRouter
}

export function withRouter(WrappedComponent: ComponentType<WithRouterProps>) {
  const Wrapper: FC<WithNextRouterProps> = ({router}) => {
    const query = useRouterQuery()
    const params = useParams()
    return <WrappedComponent router={{...router, query, params}} />
  }
  return withNextRouter(Wrapper)
}
