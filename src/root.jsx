import React, {useEffect, useState } from 'react'
import { Bar } from '../fake_node_module/bar-esm'
import { Baz } from '../fake_node_module/baz-commonjs'
import { Foo } from '../fake_node_module/foo-mixture'
import { Button, SecondaryButton } from '../fake_node_module/multi'
import ErrorBoundary from './ErrorBoundary'

export default function RootComponent() {
  return (
    <ErrorBoundary >
      <div>
        <Bar />
        <Baz />
        <Foo />
        <Button />
        <SecondaryButton />
      </div>
    </ErrorBoundary>
  )
}
