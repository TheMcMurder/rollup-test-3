import React, {useEffect, useState } from 'react'
import { Bar } from '../fake_node_module/bar-esm'
import { Baz } from '../fake_node_module/baz-commonjs'
import { Foo } from '../fake_node_module/foo-mixture'
import { Button, SecondaryButton } from '../fake_node_module/multi'
import Test from '../fake_node_module/test-manual-cjs'
import ErrorBoundary from './ErrorBoundary'
console.log('test', Test)

export default function RootComponent() {
  return (
    <ErrorBoundary >
      <div>
        <Bar />
        <Baz />
        <Foo />
        <Button />
        <SecondaryButton />
        <Test />
      </div>
    </ErrorBoundary>
  )
}
