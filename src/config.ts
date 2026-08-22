import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "Mesh Turn Taker",
  description: "Share a clear, gentle speaking order with your group.",
  accentHex: "#0f766e",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
