# Production obfuscation

Run `npm run build:protected` for a production build with browser JavaScript obfuscation.

Only generated browser bundles in `dist/assets` are obfuscated. Server-side code, SQL migrations, deployment configuration, source maps, and static assets are not transformed. This keeps deployment behavior auditable and prevents secrets or database logic from being damaged.

The pipeline uses compact output, hexadecimal identifiers, string-array encoding, split strings, object-key transformation, and limited control-flow flattening. It is intentionally reversible by rebuilding from the source tree.
