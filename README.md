# Mesh Turn Taker

> Share a clear, gentle speaking order with your group.

**Live → https://baditaflorin.github.io/mesh-turn-taker/**

Mesh Turn Taker is a browser-local, peer-to-peer facilitation aid. Set a simple speaking order, then advance it together so everyone can see whose turn is current.

## Run locally

`mesh-common` must be a sibling directory because this service links to it locally.

```bash
npm install
npm run dev
```

## Verification

```bash
npm run fmt:check
npm run typecheck
npm run test:unit
npm run smoke
npm run demo
```

The app is published as static GitHub Pages content from `main/docs`. It has no accounts, analytics, database, or service backend; shared speaking order is visible to everyone in the room.

See [privacy notes](docs/privacy.md) and [the deployment decision](docs/adr/0001-deployment-mode.md).

## License

MIT.
