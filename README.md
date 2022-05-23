# Rollup CSS test

## How to get conditional css

I'm trying to figure out how to get my CSS to be conditionally included.

## running locally
- yarn
- yarn start
- open http://localhost:8888/

## FIXED

The problem was the order of the plugins, I needed `replace` plugin first.